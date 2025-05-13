import { Typography } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import { ProductCard } from "./Card";

export default function Products() {
  const equipments = useLoaderData();
  // console.log(equipments);
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto mt-20">
      <Typography
        variant="h3"
        className="mb-10 pl-3 border-l-4 border-l-red-900 uppercase"
      >
        Products
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {equipments.map((equipment) => (
          <ProductCard
            key={equipment._id}
            equipment={equipment}
          />
        ))}
      </div>
    </div>
  );
}
