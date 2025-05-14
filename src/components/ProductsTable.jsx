import { Card, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function ProductsTable({ equipments, searchQuery, onSearchChange }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = equipments.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(equipments.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
              <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-5">
                <Typography
                  variant="small"
                  className="font-semibold text-gray-700 dark:text-gray-300"
                >
                  Stock
                </Typography>
              </th>
              <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-5">
                <Typography
                  variant="small"
                  className="font-semibold text-gray-700 dark:text-gray-300"
                >
                  Price
                </Typography>
              </th>
              <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/50 p-5">
                <Typography
                  variant="small"
                  className="font-semibold text-gray-700 dark:text-gray-300"
                >
                  Action
                </Typography>
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
                        <Link to={`/details/${_id}`}>
                          <Typography
                            variant="small"
                            className="font-medium text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors"
                          >
                            View Details
                          </Typography>
                        </Link>
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
