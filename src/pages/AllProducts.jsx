import {
  Button,
  IconButton,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { SearchBar } from "../components/SearchBar2";

export default function AllProducts() {
  const data = useLoaderData();
  const [products] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const itemsPerPage = 8;

  // Get unique categories
  const categories = [
    "all",
    ...new Set(products.map((product) => product.category)),
  ];

  // Handle search, category filter and sorting
  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Apply category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply price sorting
    if (sortOrder !== "default") {
      filtered.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return sortOrder === "lowToHigh" ? priceA - priceB : priceB - priceA;
      });
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchQuery, products, selectedCategory, sortOrder]);

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10 min-h-[50vh]">
      <div className="mb-6 space-y-6">
        <Typography variant="h3" className="text-gray-800 dark:text-gray-100">
          All Products
        </Typography>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="w-full md:w-1/2">
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
            />
          </div>

          <div className="flex gap-4 w-full md:w-1/2">
            <Select
              value={selectedCategory}
              onChange={(value) => setSelectedCategory(value)}
              label="Category"
              className="w-full"
            >
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Option>
              ))}
            </Select>

            <Select
              value={sortOrder}
              onChange={(value) => setSortOrder(value)}
              label="Sort by Price"
              className="w-full"
            >
              <Option value="default">Default</Option>
              <Option value="lowToHigh">Price: Low to High</Option>
              <Option value="highToLow">Price: High to Low</Option>
            </Select>
          </div>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <Typography
          variant="h6"
          className="text-center text-gray-600 dark:text-gray-400"
        >
          No products found.
        </Typography>
      ) : (
        <>
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts
              .slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              )
              .map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 0 ? (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outlined"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </Button>

              {Array.from(
                { length: Math.ceil(filteredProducts.length / itemsPerPage) },
                (_, i) => (
                  <IconButton
                    key={i + 1}
                    variant={currentPage === i + 1 ? "filled" : "outlined"}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </IconButton>
                )
              )}

              <Button
                variant="outlined"
                disabled={
                  currentPage ===
                  Math.ceil(filteredProducts.length / itemsPerPage)
                }
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            </div>
          ) : (
            <div className="text-center mt-8">
              <Typography variant="h5" color="gray">
                No products found
              </Typography>
            </div>
          )}
        </>
      )}
    </div>
  );
}
