import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export default function FeaturedItems() {
  const [featuredItems, setFeaturedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        // Fetch equipments sorted by rating to get featured items
        const response = await fetch(
          "https://ph-assignment-10-server-rosy.vercel.app/equipments-sorted"
        );
        const data = await response.json();
        // Get top 4 items as featured
        setFeaturedItems(data.slice(0, 4));
      } catch (error) {
        console.error("Error fetching featured items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Typography color="gray">Loading featured items...</Typography>
      </div>
    );
  }

  return (
    <div className="mt-20 max-w-screen-2xl w-11/12 mx-auto">
      <Typography
        variant="h3"
        className="pl-3 mb-10 border-l-4 border-red-600 dark:border-red-500 text-gray-900 dark:text-gray-100"
      >
        Featured Items
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredItems.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
}
