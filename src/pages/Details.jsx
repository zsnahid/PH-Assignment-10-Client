import {
  Button,
  Chip,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

export default function Details() {
  const equipment = useLoaderData();
  const takaSymbol = "৳";
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    category,

    description,
    image,
    item,
    price,
    processingTime,
    rating,
    galleryImages,
    brand,
    colors,
    features,
    sizes,
    specifications,
  } = equipment;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Product Image Section */}
        <div className="space-y-4">
          <div className="aspect-square rounded-lg border border-gray-200 overflow-hidden bg-white">
            <img
              src={selectedImage || image}
              alt={item}
              className="w-full h-full object-contain object-center p-4"
            />
          </div>

          {/* Gallery Grid */}
          {galleryImages && galleryImages.length > 0 && (
            <div className="grid grid-cols-4 gap-2">
              {/* Main image thumbnail */}
              <div
                className={`aspect-square border rounded cursor-pointer overflow-hidden ${
                  !selectedImage ? "border-red-500 border-2" : "border-gray-200"
                }`}
                onClick={() => setSelectedImage(null)}
              >
                <img
                  src={image}
                  alt={`${item} main`}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Gallery image thumbnails */}
              {galleryImages.map((galleryImg, index) => (
                <div
                  key={index}
                  className={`aspect-square border rounded cursor-pointer overflow-hidden ${
                    selectedImage === galleryImg
                      ? "border-red-500 border-2"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(galleryImg)}
                >
                  <img
                    src={galleryImg}
                    alt={`${item} gallery ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          {/* Category & Product Name */}
          <div>
            <Chip
              value={category}
              className="mb-2 bg-red-50 text-red-900 font-barlow tracking-wider"
            />
            <Typography
              variant="h3"
              className="text-gray-900 dark:text-white font-barlow"
            >
              {item}
            </Typography>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <Rating value={Math.floor(rating)} readonly />
            <Typography color="blue-gray" className="font-normal opacity-75">
              ({rating} out of 5)
            </Typography>
          </div>

          {/* Price */}
          <Typography variant="h4" className="text-red-900 font-barlow">
            {takaSymbol} {price}
          </Typography>

          {/* Description */}
          <Typography className="text-gray-700 dark:text-gray-300">
            {description}
          </Typography>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4">
            <Typography variant="h6" className="font-barlow">
              Quantity:
            </Typography>
            <div className="flex items-center gap-2">
              <IconButton
                variant="text"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <AiOutlineMinus className="h-4 w-4" />
              </IconButton>
              <Typography className="w-12 text-center font-medium">
                {quantity}
              </Typography>
              <IconButton
                variant="text"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                <AiOutlinePlus className="h-4 w-4" />
              </IconButton>
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button size="lg" className="w-full bg-red-900 hover:bg-red-800">
            Add to Cart
          </Button>

          {/* Product Details Table */}
          <div className="mt-8 border-t border-gray-200 pt-8 space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-100">
              <Typography
                variant="small"
                className="font-medium text-gray-900 dark:text-white"
              >
                Brand
              </Typography>
              <Typography
                variant="small"
                className="text-gray-700 dark:text-gray-300"
              >
                {brand}
              </Typography>
            </div>

            {colors && colors.length > 0 && (
              <div className="flex justify-between py-3 border-b border-gray-100">
                <Typography
                  variant="small"
                  className="font-medium text-gray-900 dark:text-white"
                >
                  Colors
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color, index) => (
                    <Chip
                      key={index}
                      value={color}
                      size="sm"
                      className="bg-gray-100 text-gray-700"
                    />
                  ))}
                </div>
              </div>
            )}

            {sizes && sizes.length > 0 && (
              <div className="flex justify-between py-3 border-b border-gray-100">
                <Typography
                  variant="small"
                  className="font-medium text-gray-900 dark:text-white"
                >
                  Sizes
                </Typography>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size, index) => (
                    <Chip
                      key={index}
                      value={size}
                      size="sm"
                      className="bg-gray-100 text-gray-700"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between py-3 border-b border-gray-100">
              <Typography
                variant="small"
                className="font-medium text-gray-900 dark:text-white"
              >
                Features
              </Typography>
              <Typography
                variant="small"
                className="text-gray-700 dark:text-gray-300"
              >
                {features}
              </Typography>
            </div>

            <div className="flex justify-between py-3 border-b border-gray-100">
              <Typography
                variant="small"
                className="font-medium text-gray-900 dark:text-white"
              >
                Specifications
              </Typography>
              <Typography
                variant="small"
                className="text-gray-700 dark:text-gray-300"
              >
                {specifications}
              </Typography>
            </div>
            <div className="flex justify-between py-3 border-b border-gray-100">
              <Typography
                variant="small"
                className="font-medium text-gray-900 dark:text-white"
              >
                Processing Time
              </Typography>
              <Typography
                variant="small"
                className="text-gray-700 dark:text-gray-300"
              >
                {processingTime}
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
