/* eslint-disable react/prop-types */
import { Button, Typography } from "@material-tailwind/react";
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
    <div className="group w-full">
      <div className="relative border border-gray-200 dark:border-gray-800 hover:border-red-200 dark:hover:border-red-900/20 transition-colors bg-white dark:bg-gray-900">
        <div className="h-80 overflow-hidden">
          <img
            src={image}
            alt={item}
            className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-300"
          />
        </div>

        <div className="absolute inset-0 flex items-end justify-center p-4 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-full space-y-2">
            <Typography variant="h6" className="text-white text-center">
              {item}
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to={`/dashboard/update/${_id}`}>
                <Button
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
                >
                  Update
                </Button>
              </Link>
              <Button
                onClick={() => handleDeleteEquipment(_id)}
                size="sm"
                className="bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
