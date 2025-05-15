import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export default function OfferSection() {
  const [offerProducts, setOfferProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfferProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://ph-assignment-10-server-rosy.vercel.app/equipments/discounted"
        );
        console.log(data);

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
    <div className="mt-20 max-w-screen-2xl w-11/12 mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <Typography
          variant="h3"
          className="pl-3 border-l-4 border-red-600 dark:border-red-500 text-gray-900 dark:text-gray-100"
        >
          Special Offers
        </Typography>
        <div className="px-3 py-1 bg-red-100 dark:bg-red-900/20 rounded-full">
          <Typography
            variant="small"
            className="font-medium text-red-900 dark:text-red-400"
          >
            Up to 50% Off
          </Typography>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {offerProducts.slice(0, 4).map((product) => (
          <div key={product._id} className="relative">
            <div className="absolute -top-0 -right-3 z-10">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full">
                <Typography variant="small" className="font-medium">
                  {Math.round(
                    ((product.originalPrice - product.price) /
                      product.originalPrice) *
                      100
                  )}
                  % Off
                </Typography>
              </div>
            </div>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
