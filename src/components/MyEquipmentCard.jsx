/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function MyEquipmentCard({ equipment, equipments, setEquipments }) {
  const { _id, image, item } = equipment;

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
          <div className="flex justify-between items-center gap-3 flex-wrap">
            <Link to={`/details/${_id}`}>
              <Button
                variant="outlined"
                size="sm"
                className="rounded-none border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-900/20"
              >
                View Details
              </Button>
            </Link>
            <Link to={`/update/${_id}`}>
              <Button
                variant="outlined"
                size="sm"
                className="rounded-none border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-900/20"
              >
                Update
              </Button>
            </Link>
            <Button
              variant="outlined"
              size="sm"
              className="rounded-none border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-900/20"
              onClick={() => handleDeleteEquipment(_id)}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
