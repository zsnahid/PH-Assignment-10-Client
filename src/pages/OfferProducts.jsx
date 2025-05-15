import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";

export default function OfferProducts() {
  const [offerProducts, setOfferProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfferProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://ph-assignment-10-server-rosy.vercel.app/equipments/discounted"
        );
        setOfferProducts(data.data);
      } catch (error) {
        console.error(
          "Error fetching offer products:",
          error?.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchOfferProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Typography color="gray">Loading offers...</Typography>
      </div>
    );
  }

  // Don't render if no offer products
  if (offerProducts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10 min-h-[50vh]">
      <div className="mb-6">
        <Typography
          variant="h3"
          className="text-gray-800 dark:text-gray-100 capitalize"
        >
          Offer Products
        </Typography>
      </div>

      {offerProducts.length === 0 ? (
        <Typography
          variant="h6"
          className="text-center text-gray-600 dark:text-gray-400"
        >
          No products found in this category.
        </Typography>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {offerProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
