import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ProductsTable } from "../components/ProductsTable";

export default function AllEquipments() {
  const data = useLoaderData();
  const [equipments, setEquipments] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredEquipments, setFilteredEquipments] = useState(data);

  // Handle search
  useEffect(() => {
    const filtered = equipments.filter(
      (equipment) =>
        equipment.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
        equipment.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEquipments(filtered);
  }, [searchQuery, equipments]);

  const handleSorting = () => {
    fetch("https://ph-assignment-10-server-rosy.vercel.app/equipments-sorted")
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
      });
  };

  return (
    <div className="px-6 my-10 min-h-[50vh]">
      <div className="flex justify-between items-center mb-6">
        <Typography variant="h3">All Products</Typography>
        <Button
          variant="outlined"
          className="rounded-none dark:border-white/90 dark:text-white/90"
          onClick={handleSorting}
        >
          Sort by Price
        </Button>
      </div>
      <ProductsTable
        equipments={filteredEquipments}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </div>
  );
}
