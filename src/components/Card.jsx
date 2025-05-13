/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

//  {
//   "_id": "676e40adab84969b8cf2da45",
//   "image": "https://i.ibb.co.com/Nx0kdc9/bat2.jpg",
//   "item": "SG Nexus Plus Kashmir Willow Cricket Bat",
//   "category": "Cricket",
//   "price": "5000",
//   "description": "Finest Kashmir willow hard pressed & traditionally shaped for superb strokes. Handle-Singapore cane handle with special 3-way insertion of rubber in between splits for enhanced flexibility and shock absorption.",
//   "rating": "4",
//   "customization": "Cover- Comes with a sleek, full length bat cover to protect your bat when not in use.",
//   "processingTime": "3 days",
//   "userEmail": "zsnbackup@gmail.com",
//   "userName": "Zahid"
// }

export function ProductCard({ equipment }) {
  // console.log(equipment);
  const { category, _id, image, item, price } = equipment;
  const takaSymbol = "৳";

  return (
    <Fade
      delay={200} // Wait 200ms before starting
    >
      <div className="border dark:border-black h-full w-full bg-blue-gray-50/50 dark:bg-gray-800 grid grid-rows-[auto,1fr]">
        <img src={image} className="w-full h-80 object-cover object-center" />
        <div className="p-3 flex flex-col">
          {/* texts */}
          <div className="flex-grow">
            <div className="flex justify-between items-center">
              <small className="text-red-900 dark:text-red-500 uppercase font-semibold">
                {category}
              </small>
              <p className="font-medium">
                {takaSymbol}
                {price}
              </p>
            </div>
            <p className="my-3 font-semibold"> {item} </p>
          </div>

          <div className="flex justify-center">
            <Link to={`/details/${_id}`}>
              <Button
                variant="outlined"
                size="sm"
                className="rounded-none block mx-auto dark:border-white/90 dark:text-white/90"
              >
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
