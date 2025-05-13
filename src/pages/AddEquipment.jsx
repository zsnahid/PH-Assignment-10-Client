import {
  Button,
  Card,
  Chip,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

export default function AddEquipment() {
  const { user } = useContext(AuthContext);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [currentSize, setCurrentSize] = useState("");
  const [currentColor, setCurrentColor] = useState("");

  const handleAddSize = (e) => {
    e.preventDefault();
    if (currentSize && !sizes.includes(currentSize)) {
      setSizes([...sizes, currentSize]);
      setCurrentSize("");
    }
  };

  const handleAddColor = (e) => {
    e.preventDefault();
    if (currentColor && !colors.includes(currentColor)) {
      setColors([...colors, currentColor]);
      setCurrentColor("");
    }
  };

  const handleRemoveSize = (sizeToRemove) => {
    setSizes(sizes.filter((size) => size !== sizeToRemove));
  };

  const handleRemoveColor = (colorToRemove) => {
    setColors(colors.filter((color) => color !== colorToRemove));
  };

  const handleAddEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const galleryImages = form.galleryImages.value
      .split(",")
      .map((url) => url.trim())
      .filter(Boolean);
    const item = form.itemName.value;
    const category = form.categoryName.value;
    const brand = form.brand.value;
    const price = parseFloat(form.price.value);
    const originalPrice = parseFloat(form.originalPrice.value);
    const description = form.description.value;
    const features = form.features.value;
    const specifications = form.specifications.value;
    const stockQuantity = parseInt(form.stockQuantity.value);
    const minimumOrder = parseInt(form.minimumOrder.value);
    const warranty = form.warranty.value;
    const shippingInfo = form.shippingInfo.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const newEquipment = {
      image,
      galleryImages,
      item,
      category,
      brand,
      price,
      originalPrice,
      description,
      features,
      specifications,
      sizes,
      colors,
      stockQuantity,
      minimumOrder,
      warranty,
      shippingInfo,
      stockStatus,
      userEmail,
      userName,
      createdAt: new Date().toISOString(),
    };

    fetch("https://ph-assignment-10-server-rosy.vercel.app/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Equipment added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
          setSizes([]);
          setColors([]);
        }
      })
      .catch((error) => {
        console.error("Error adding equipment:", error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add equipment",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  return (
    <Fade triggerOnce>
      <div className="max-w-4xl mx-auto my-10">
        <Card className="p-6 bg-white dark:bg-gray-900 shadow-lg">
          <Typography
            variant="h4"
            className="text-center mb-6 text-gray-800 dark:text-gray-100"
          >
            Add New Equipment
          </Typography>

          <form onSubmit={handleAddEquipment} className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Information */}
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  Basic Information
                </Typography>
              </div>

              <Input
                type="text"
                label="Item Name"
                name="itemName"
                required
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              <Select
                label="Category"
                name="categoryName"
                required
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              >
                <Option value="Sports Equipment">Sports Equipment</Option>
                <Option value="Fitness Gear">Fitness Gear</Option>
                <Option value="Team Sports">Team Sports</Option>
                <Option value="Training Equipment">Training Equipment</Option>
                <Option value="Outdoor Sports">Outdoor Sports</Option>
                <Option value="Athletic Wear">Athletic Wear</Option>
                <Option value="Accessories">Accessories</Option>
              </Select>

              <Input
                type="text"
                label="Brand"
                name="brand"
                required
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              {/* Images Section */}
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  Images
                </Typography>
              </div>

              <Input
                type="url"
                label="Main Image URL"
                name="image"
                required
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              <Input
                type="text"
                label="Gallery Images URLs (comma-separated)"
                name="galleryImages"
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              {/* Pricing Section */}
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  Pricing & Stock
                </Typography>
              </div>

              <Input
                type="number"
                label="Regular Price"
                name="originalPrice"
                required
                step="0.01"
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              <Input
                type="number"
                label="Sale Price"
                name="price"
                required
                step="0.01"
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              <Input
                type="number"
                label="Stock Quantity"
                name="stockQuantity"
                required
                min="0"
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              <Input
                type="number"
                label="Minimum Order Quantity"
                name="minimumOrder"
                required
                min="1"
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              <Select
                label="Stock Status"
                name="stockStatus"
                required
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              >
                <Option value="In Stock">In Stock</Option>
                <Option value="Out of Stock">Out of Stock</Option>
                <Option value="Pre-order">Pre-order</Option>
                <Option value="Discontinued">Discontinued</Option>
              </Select>

              {/* Variants Section */}
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  Variants
                </Typography>
              </div>

              {/* Sizes */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  label="Add Size"
                  value={currentSize}
                  onChange={(e) => setCurrentSize(e.target.value)}
                  className="dark:text-gray-300"
                  labelProps={{
                    className: "dark:text-gray-400",
                  }}
                />
                <Button
                  size="sm"
                  className="mt-1 bg-red-600 hover:bg-red-700"
                  onClick={handleAddSize}
                >
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Chip
                    key={size}
                    value={size}
                    dismissible={{
                      onClose: () => handleRemoveSize(size),
                    }}
                    className="dark:bg-gray-800"
                  />
                ))}
              </div>

              {/* Colors */}
              <div className="flex gap-2">
                <Input
                  type="text"
                  label="Add Color"
                  value={currentColor}
                  onChange={(e) => setCurrentColor(e.target.value)}
                  className="dark:text-gray-300"
                  labelProps={{
                    className: "dark:text-gray-400",
                  }}
                />
                <Button
                  size="sm"
                  className="mt-1 bg-red-600 hover:bg-red-700"
                  onClick={handleAddColor}
                >
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {colors.map((color) => (
                  <Chip
                    key={color}
                    value={color}
                    dismissible={{
                      onClose: () => handleRemoveColor(color),
                    }}
                    className="dark:bg-gray-800"
                  />
                ))}
              </div>

              {/* Product Details Section */}
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  Product Details
                </Typography>
              </div>

              <div className="col-span-2">
                <Textarea
                  label="Description"
                  name="description"
                  required
                  rows={4}
                  className="dark:text-gray-300"
                  labelProps={{
                    className: "dark:text-gray-400",
                  }}
                />
              </div>

              <div className="col-span-2">
                <Textarea
                  label="Features (one per line)"
                  name="features"
                  rows={3}
                  className="dark:text-gray-300"
                  labelProps={{
                    className: "dark:text-gray-400",
                  }}
                />
              </div>

              <div className="col-span-2">
                <Textarea
                  label="Specifications (one per line)"
                  name="specifications"
                  rows={3}
                  className="dark:text-gray-300"
                  labelProps={{
                    className: "dark:text-gray-400",
                  }}
                />
              </div>

              {/* Additional Information */}
              <div className="col-span-2">
                <Typography
                  variant="h6"
                  className="mb-4 text-gray-700 dark:text-gray-300"
                >
                  Additional Information
                </Typography>
              </div>

              <Input
                type="text"
                label="Warranty Information"
                name="warranty"
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />

              <Input
                type="text"
                label="Shipping Information"
                name="shippingInfo"
                className="dark:text-gray-300"
                labelProps={{
                  className: "dark:text-gray-400",
                }}
              />
            </div>

            {/* Hidden User Info */}
            <input type="hidden" name="userEmail" value={user?.email || ""} />
            <input
              type="hidden"
              name="userName"
              value={user?.displayName || ""}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="mt-6 bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
            >
              Add Equipment
            </Button>
          </form>
        </Card>
      </div>
    </Fade>
  );
}
