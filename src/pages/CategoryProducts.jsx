import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { SearchBar } from "../components/SearchBar2";

export default function CategoryProducts() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://ph-assignment-10-server-rosy.vercel.app/equipments/category/${category}`
        );
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    const filtered = products.filter(
      (product) =>
        product.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <Typography color="gray">Loading products...</Typography>
      </div>
    );
  }

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10 min-h-[50vh]">
      <div className="mb-6 space-y-6">
        <Typography
          variant="h3"
          className="text-gray-800 dark:text-gray-100 capitalize"
        >
          {category} Products
        </Typography>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
        />
      </div>

      {filteredProducts.length === 0 ? (
        <Typography
          variant="h6"
          className="text-center text-gray-600 dark:text-gray-400"
        >
          No products found in this category.
        </Typography>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
