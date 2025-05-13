import { Card, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function DashboardOverview() {
  const { user } = useContext(AuthContext);

  return (
    <div className="grid gap-4">
      <div className="p-4 border rounded-lg">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Welcome, {user?.displayName || "User"}!
        </Typography>
        <Typography color="gray">Email: {user?.email}</Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="my-equipments">
          <Card className="p-4 hover:shadow-lg transition-all">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              My Equipment
            </Typography>
            <Typography color="gray">View and manage your equipment</Typography>
          </Card>
        </Link>

        <Link to="add-equipment">
          <Card className="p-4 hover:shadow-lg transition-all">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Add Equipment
            </Typography>
            <Typography color="gray">
              Add new equipment to the system
            </Typography>
          </Card>
        </Link>

        <Link to="all-equipments">
          <Card className="p-4 hover:shadow-lg transition-all">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              All Equipment
            </Typography>
            <Typography color="gray">Browse all available equipment</Typography>
          </Card>
        </Link>
      </div>
    </div>
  );
}
