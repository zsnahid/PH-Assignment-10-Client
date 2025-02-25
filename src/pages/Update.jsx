import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

// import Swal from 'sweetalert2'
export default function Update() {
  const { user } = useContext(AuthContext);
  const equipment = useLoaderData();
  // console.log(equipment);

  const {
    category,
    customization,
    description,
    _id,
    image,
    item,
    price,
    processingTime,
    stockStatus,
    rating,
  } = equipment;

  const handleUpdateEquipment = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const item = form.itemName.value;
    const category = form.categoryName.value;
    const price = parseFloat(form.price.value);
    const description = form.description.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const updatedEquipment = {
      image,
      item,
      category,
      price,
      description,
      rating,
      customization,
      processingTime,
      stockStatus,
      userEmail,
      userName,
    };
    // console.log(updatedEquipment);

    fetch(`https://ph-assignment-10-server-rosy.vercel.app/equipments/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          // console.log("successfully updated");
          Swal.fire({
            title: "Success!",
            text: "Equipment updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-gray-50 dark:bg-black/10 my-10">
      <h2 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Update Equipment
      </h2>
      <form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        onSubmit={handleUpdateEquipment}
      >
        {/* <!-- Image --> */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            defaultValue={image}
            className="mt-1 px-1 border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* <!-- Item Name --> */}
        <div>
          <label
            htmlFor="item-name"
            className="block text-sm font-medium text-gray-700"
          >
            Item Name
          </label>
          <input
            type="text"
            id="item-name"
            name="itemName"
            defaultValue={item}
            className="mt-1 border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* <!-- Category Name --> */}
        <div>
          <label
            htmlFor="category-name"
            className="block text-sm font-medium text-gray-700"
          >
            Category Name
          </label>
          <input
            type="text"
            id="category-name"
            name="categoryName"
            defaultValue={category}
            className="mt-1 border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* <!-- Price --> */}
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            defaultValue={price}
            className="mt-1 border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            step="0.01"
          />
        </div>

        {/* <!-- Description --> */}
        <div className="col-span-1 md:col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            defaultValue={description}
            className="mt-1 p-1 border border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>

        {/* <!-- Rating --> */}
        <div>
          <label
            htmlFor="rating"
            className="block text-sm font-medium text-gray-700"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            defaultValue={rating}
            className="mt-1 border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            min="0"
            max="5"
            step="0.1"
          />
        </div>

        {/* <!-- Customization --> */}
        <div>
          <label
            htmlFor="customization"
            className="block text-sm font-medium text-gray-700"
          >
            Customization
          </label>
          <input
            type="text"
            id="customization"
            name="customization"
            placeholder="e.g., Extra grip, Hit paper"
            defaultValue={customization}
            className="mt-1 border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* <!-- Processing Time --> */}
        <div>
          <label
            htmlFor="processing-time"
            className="block text-sm font-medium text-gray-700"
          >
            Processing Time (Delivery Time)
          </label>
          <input
            type="text"
            id="processing-time"
            name="processingTime"
            defaultValue={processingTime}
            className="mt-1 border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* <!-- Stock Status --> */}
        <div>
          <label
            htmlFor="stock-status"
            className="block text-sm font-medium text-gray-700"
          >
            Stock Status
          </label>
          <input
            type="number"
            id="stock-status"
            name="stockStatus"
            defaultValue={stockStatus}
            className="mt-1 border-b border-blue-gray-100 bg-blue-gray-50 dark:bg-gray-800 block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>

        {/* <!-- User Email --> */}
        <div>
          <label
            htmlFor="user-email"
            className="block text-sm font-medium text-gray-700"
          >
            User Email
          </label>
          <input
            type="email"
            id="user-email"
            name="userEmail"
            className="mt-1 px-1 block w-full bg-blue-gray-100 dark:bg-gray-900 sm:text-sm"
            defaultValue={user.email}
            readOnly
          />
        </div>

        {/* <!-- User Name --> */}
        <div>
          <label
            htmlFor="user-name"
            className="block text-sm font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            type="text"
            id="user-name"
            name="userName"
            className="mt-1 px-1 block w-full bg-blue-gray-100 dark:bg-gray-800 sm:text-sm"
            defaultValue={user?.displayName}
            readOnly
          />
        </div>

        {/* <!-- Submit Button --> */}
        <div className="col-span-1 md:col-span-2 text-center">
          <input
            type="submit"
            value="Update"
            className="px-6 py-2 bg-white text-black font-semibold shadow-sm border border-black transition ease-in-out duration-300 hover:bg-red-900 hover:text-white hover:border-transparent hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2"
          />
        </div>
      </form>
    </div>
  );
}
