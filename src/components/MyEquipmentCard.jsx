/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function MyEquipmentCard({ equipment, equipments, setEquipments }) {
  // console.log(equipment);
  const { category, _id, image, item, price } = equipment;
  const takaSymbol = "৳";

  const handleDeleteEquipment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DC143C",
      cancelButtonColor: "#48494B",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://ph-assignment-10-server-rosy.vercel.app/equipments/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remainingEquipments = equipments.filter(
                (equipment) => equipment._id !== id
              );
              setEquipments(remainingEquipments);
            }
          });
      }
    });
  };

  return (
    <div className="h-full border dark:border-black w-full bg-blue-gray-50/50 dark:bg-gray-800 grid grid-rows-[auto,1fr]">
      <img
        src={image}
        className="w-full h-80 object-cover object-center"
      />
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

        {/* Button group */}
        <div className="flex justify-between items-center gap-3 flex-wrap">
          <Link to={`/details/${_id}`}>
            <Button
              variant="outlined"
              size="sm"
              className="rounded-none block mx-auto dark:border-white/90 dark:text-white/90"
            >
              View Details
            </Button>
          </Link>
          <Link to={`/update/${_id}`}>
            <Button
              variant="outlined"
              size="sm"
              className="rounded-none block mx-auto dark:border-white/90 dark:text-white/90"
            >
              Update
            </Button>
          </Link>
          <Button
            variant="outlined"
            size="sm"
            className="rounded-none block mx-auto dark:border-white/90 dark:text-white/90"
            onClick={() => handleDeleteEquipment(_id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
