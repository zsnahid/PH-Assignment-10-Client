/* eslint-disable react/prop-types */
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function ProductsTable({ equipments }) {
  return (
    <Card className="h-full w-full overflow-scroll rounded-none border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th
              colSpan="2"
              className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4"
            >
              <Typography
                variant="small"
                className="font-semibold leading-none text-gray-700 dark:text-gray-300"
              >
                Name
              </Typography>
            </th>
            <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4">
              <Typography
                variant="small"
                className="font-semibold leading-none text-gray-700 dark:text-gray-300"
              >
                Category
              </Typography>
            </th>
            <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4">
              <Typography
                variant="small"
                className="font-semibold leading-none text-gray-700 dark:text-gray-300"
              >
                Price
              </Typography>
            </th>
            <th className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4">
              <Typography
                variant="small"
                className="font-semibold leading-none text-gray-700 dark:text-gray-300"
              >
                Action
              </Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {equipments.map(({ _id, image, item, category, price }, index) => {
            const isLast = index === equipments.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-gray-200 dark:border-gray-800";

            return (
              <tr key={_id}>
                <td className={classes}>
                  <div className="flex items-center gap-3">
                    <img
                      src={image}
                      alt={item}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                  </div>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-700 dark:text-gray-300"
                  >
                    {category}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    className="font-normal text-gray-700 dark:text-gray-300"
                  >
                    {price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Link to={`/details/${_id}`}>
                    <Typography
                      variant="small"
                      className="font-medium text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 underline"
                    >
                      View Details
                    </Typography>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
