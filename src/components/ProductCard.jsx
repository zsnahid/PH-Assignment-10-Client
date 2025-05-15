import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${product._id}`);
  };

  return (
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-950"
      onClick={handleClick}
    >
      <CardHeader
        shadow={false}
        floated={false}
        className="relative h-64 bg-white"
      >
        <img
          src={product.image}
          alt={product.item}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
        />
        <div className="absolute top-4 left-4">
          <Chip
            color="gray"
            value={product.category}
            size="sm"
            className="rounded-full"
          />
        </div>
      </CardHeader>
      <CardBody className="p-4 flex flex-col h-[140px]">
        <div className="flex-1 overflow-hidden">
          <div className="mb-3 flex items-center justify-between">
            <Typography
              variant="h6"
              color="blue-gray"
              className="font-medium line-clamp-1 dark:text-gray-100"
            >
              {product.item}
            </Typography>
            <Typography color="red" className="font-medium">
              ৳{product.price}
            </Typography>
          </div>
          <Typography
            color="gray"
            className="font-normal line-clamp-2 text-sm opacity-75 dark:text-gray-500"
          >
            {product.description || "No description available"}
          </Typography>
        </div>
      </CardBody>
    </Card>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    item: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
  }).isRequired,
};
