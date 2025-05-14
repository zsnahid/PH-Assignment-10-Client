import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ProductsTable } from "../components/ProductsTable";

export default function AllEquipments() {
  const data = useLoaderData();
  // eslint-disable-next-line no-unused-vars
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

  return (
    <div className="px-6 my-10 min-h-[50vh]">
      <div className="mb-6">
        <Typography variant="h3">All Products</Typography>
      </div>
      <ProductsTable
        equipments={filteredEquipments}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
    </div>
  );
}
