import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCards() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://ph-assignment-10-server-rosy.vercel.app/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (category) => {
    navigate(`/category/${category.toLowerCase()}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <Typography color="gray">Loading categories...</Typography>
      </div>
    );
  }

  return (
    <div className="mt-12 max-w-screen-2xl w-11/12 mx-auto">
      <Typography
        variant="h3"
        className="pl-3 mb-10 border-l-4 border-red-600 dark:border-red-500 text-gray-900 dark:text-gray-100"
      >
        Browse by Category
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Card
            key={category._id}
            className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300  dark:bg-gray-950"
            onClick={() => handleCategoryClick(category.name)}
          >
            <CardHeader
              shadow={false}
              floated={false}
              className="relative h-48 bg-white"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </CardHeader>
            <CardBody className="p-4">
              <Typography
                variant="h5"
                className="text-center text-gray-900 dark:text-gray-100"
              >
                {category.name}
              </Typography>
              <Typography
                color="gray"
                className="mt-2 text-center text-sm dark:text-gray-500"
              >
                {category.productCount} Products
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
