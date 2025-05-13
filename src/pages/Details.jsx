import { Typography } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

export default function Details() {
  const equipment = useLoaderData();
  const takaSymbol = "৳";
  // console.log(equipment);
  const {
    category,
    customization,
    description,
    image,
    item,
    price,
    processingTime,
    rating,
    userEmail,
    userName,
  } = equipment;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 px-6">
      <div className="border border-blue-gray-100 w-full h-96">
        <img
          src={image}
          className="w-full h-full object-contain object-center"
        />
      </div>
      <div>
        <Typography
          variant="small"
          className="font-semibold text-red-900 uppercase"
        >
          {category}
        </Typography>
        <Typography
          variant="h4"
          className="my-1"
        >
          {item}
        </Typography>
        <Typography
          variant="h5"
          className="text-red-900"
        >
          {takaSymbol} {price}
        </Typography>
        <Typography variant="small">{description}</Typography>
        {/* <Card className="h-full w-full shadow-none"> */}
        <table className="w-full table-fixed">
          <tbody>
            <tr>
              <td className="py-4 border-b border-blue-gray-100">
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal dark:text-white/90"
                >
                  <span className="font-medium">Customization:</span>{" "}
                  {customization}
                </Typography>
              </td>
            </tr>
            <tr>
              <td className="py-4 border-b border-blue-gray-100">
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal dark:text-white/90"
                >
                  <span className="font-medium">Rating: </span>
                  {rating}
                </Typography>
              </td>
            </tr>
            <tr>
              <td className="py-4 border-b border-blue-gray-100">
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal dark:text-white/90"
                >
                  <span className="font-medium">
                    Processing Time (Delivery):
                  </span>{" "}
                  {processingTime}
                </Typography>
              </td>
            </tr>
            <tr>
              <td className="py-4 border-b border-blue-gray-100">
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal dark:text-white/90"
                >
                  <span className="font-medium">Owner Email:</span> {userEmail}
                </Typography>
              </td>
            </tr>
            <tr>
              <td className="py-4 border-b border-blue-gray-100">
                <Typography
                  variant="paragraph"
                  color="blue-gray"
                  className="font-normal dark:text-white/90"
                >
                  <span className="font-medium">Owner Name:</span> {userName}
                </Typography>
              </td>
            </tr>
          </tbody>
        </table>
        {/* </Card> */}
      </div>
    </div>
  );
}
