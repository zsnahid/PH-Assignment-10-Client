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
  const { _id, image, item } = equipment;

  return (
    <Fade direction="up" delay={200} triggerOnce>
      <div className="group">
        <div className="relative border border-gray-200 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900/20 transition-colors">
          <div className="h-80 overflow-hidden">
            <img
              src={image}
              className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="p-3">
            <p className="my-3 font-semibold text-gray-800 dark:text-gray-200">
              {" "}
              {item}{" "}
            </p>
            <div className="flex justify-center">
              <Link to={`/details/${_id}`}>
                <Button
                  variant="outlined"
                  size="sm"
                  className="rounded-none border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-900/20"
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
