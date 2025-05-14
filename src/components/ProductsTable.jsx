import {
  Card,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { confirmDelete, showError, showSuccess } from "../utils/customAlert";

export function ProductsTable({ equipments, searchQuery, onSearchChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "price",
    direction: "asc",
  });
  const itemsPerPage = 10;

  const handleDelete = async (id) => {
    const result = await confirmDelete();
    if (result.isConfirmed) {
      try {
        const res = await fetch(
          `https://ph-assignment-10-server-rosy.vercel.app/equipments/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await res.json();

        if (data.deletedCount > 0) {
          await showSuccess("Deleted!", "The item has been deleted.");
          onSearchChange(searchQuery); // Trigger a re-fetch
        }
      } catch (error) {
        console.error("Error deleting equipment:", error);
        await showError("Error!", "Failed to delete the item.");
      }
    }
  };

  // Handle sorting
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // Sort and paginate items
  const sortedItems = [...equipments].sort((a, b) => {
    const { key, direction } = sortConfig;
    const modifier = direction === "asc" ? 1 : -1;

    if (key === "price") {
      return (a.price - b.price) * modifier;
    } else if (key === "stock") {
      return (a.stockQuantity - b.stockQuantity) * modifier;
    }
    return 0;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Sort indicator component
  const SortIcon = ({ column }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 transition-transform ${
        sortConfig.key === column && sortConfig.direction === "desc"
          ? "rotate-180"
          : ""
      } ${sortConfig.key !== column ? "opacity-0 group-hover:opacity-50" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    </svg>
  );

  return (
    <Card className="h-full w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm">
      <div className="p-6 border-b border-gray-200 dark:border-gray-800">
        <div className="relative">
          <input
            type="search"
            placeholder="Search equipments..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-4 py-3 pl-11 bg-gray-50 dark:bg-gray-800/50 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-red-500/20 focus:border-red-500 dark:focus:ring-red-400/20 dark:focus:border-red-400 transition-all duration-200"
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              <th
                colSpan="2"
                className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-5"
              >
                <Typography
                  variant="small"
                  className="font-semibold text-gray-700 dark:text-gray-300"
                >
                  Name
                </Typography>
              </th>
              <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-5">
                <Typography
                  variant="small"
                  className="font-semibold text-gray-700 dark:text-gray-300"
                >
                  Category
                </Typography>
              </th>
              <th
                className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-5 cursor-pointer select-none group"
                onClick={() => handleSort("stock")}
              >
                <Typography
                  variant="small"
                  className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1"
                >
                  Stock
                  <SortIcon column="stock" />
                </Typography>
              </th>
              <th
                className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-5 cursor-pointer select-none group"
                onClick={() => handleSort("price")}
              >
                <Typography
                  variant="small"
                  className="font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1"
                >
                  Price
                  <SortIcon column="price" />
                </Typography>
              </th>
              <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-5">
                <Typography
                  variant="small"
                  className="font-semibold text-gray-700 dark:text-gray-300"
                ></Typography>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 ? (
              <tr>
                <td
                  colSpan="6"
                  className="p-8 text-center border-b border-gray-200 dark:border-gray-800"
                >
                  <div className="flex flex-col items-center gap-2">
                    <svg
                      className="h-12 w-12 text-gray-400 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    <Typography
                      variant="small"
                      className="font-medium text-gray-600 dark:text-gray-400"
                    >
                      No matching records found
                    </Typography>
                  </div>
                </td>
              </tr>
            ) : (
              currentItems.map(
                (
                  {
                    _id,
                    image,
                    item,
                    category,
                    price,
                    stockQuantity,
                    stockStatus,
                  },
                  index
                ) => {
                  const isLast = index === currentItems.length - 1;
                  const classes = isLast
                    ? "p-5"
                    : "p-5 border-b border-gray-200 dark:border-gray-800";

                  return (
                    <tr
                      key={_id}
                      className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <img
                            src={image}
                            alt={item}
                            className="h-12 w-12 rounded-lg object-cover ring-1 ring-gray-200 dark:ring-gray-800"
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-medium text-gray-700 dark:text-gray-300"
                        >
                          {item}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Typography
                            variant="small"
                            className="font-medium px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                          >
                            {category}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            className="font-medium text-gray-700 dark:text-gray-300"
                          >
                            {stockQuantity}
                          </Typography>
                          <Typography
                            variant="small"
                            className={`text-xs ${
                              stockStatus === "In Stock"
                                ? "text-green-600 dark:text-green-400"
                                : "text-red-600 dark:text-red-400"
                            }`}
                          >
                            {stockStatus}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          className="font-medium text-gray-700 dark:text-gray-300"
                        >
                          $
                          {price.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                          })}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Menu placement="left-start">
                          <MenuHandler>
                            <IconButton variant="text" className="w-8 h-8">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-5 h-5 text-gray-700 dark:text-gray-300"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                                />
                              </svg>
                            </IconButton>
                          </MenuHandler>
                          <MenuList className="min-w-[120px] bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                            <Link to={`/dashboard/update/${_id}`}>
                              <MenuItem className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                  />
                                </svg>
                                Edit
                              </MenuItem>
                            </Link>
                            <MenuItem
                              className="flex items-center gap-2 text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                              onClick={() => handleDelete(_id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-4 h-4"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>
                              Delete
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </td>
                    </tr>
                  );
                }
              )
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {equipments.length > 0 && (
        <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 px-4 py-3 sm:px-6">
          <div className="hidden sm:block">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Showing{" "}
              <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
              <span className="font-medium">
                {Math.min(indexOfLastItem, equipments.length)}
              </span>{" "}
              of <span className="font-medium">{equipments.length}</span>{" "}
              results
            </p>
          </div>
          <div className="flex flex-1 justify-between sm:justify-end gap-2">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <div className="flex gap-1">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                    currentPage === index + 1
                      ? "bg-red-500 text-white"
                      : "text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  } transition-colors`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </Card>
  );
}
