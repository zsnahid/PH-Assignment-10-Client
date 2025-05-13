/* eslint-disable react/prop-types */
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Name", "", "Category", "Price", ""];

export function ProductsTable({ equipments }) {
  // console.log(equipments);
  return (
    <Card className="h-full w-full rounded-none shadow-none">
      <table className="w-full table-fixed text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={index}
                className="bg-black/90 dark:bg-red-900 p-4"
              >
                <Typography
                  variant="paragraph"
                  color="white"
                  className="font-semibold leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {equipments.map(({ _id, item, category, price }, index) => {
            const isLast = index === equipments.length - 1;
            const classes = isLast
              ? "p-4"
              : "p-4 border-b border-blue-gray-100 dark:border-white/20";

            return (
              <tr key={_id} className="dark:bg-black/80">
                <td
                  className={classes}
                  colSpan="2"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal dark:text-white/90"
                  >
                    {item}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal dark:text-white/90"
                  >
                    {category}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal dark:text-white/90"
                  >
                    {price}
                  </Typography>
                </td>
                <td className={classes}>
                  <Link to={`/details/${_id}`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium underline dark:text-white/90"
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
