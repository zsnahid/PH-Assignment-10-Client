import { Card, Typography } from "@material-tailwind/react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function DashboardOverview() {
  const { user } = useContext(AuthContext);

  return (
    <div className="grid gap-4">
      <div className="p-4 border-red-100 dark:border-red-900/20 border rounded-lg bg-red-50/50 dark:bg-gray-900">
        <Typography
          variant="h6"
          className="mb-2 text-gray-800 dark:text-gray-100"
        >
          Welcome, {user?.displayName || "User"}!
        </Typography>
        <Typography className="text-gray-700 dark:text-gray-300">
          Email: {user?.email}
        </Typography>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link to="add-equipment">
          <Card className="p-4 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <Typography
              variant="h6"
              className="mb-2 text-gray-800 dark:text-gray-100"
            >
              Add Equipment
            </Typography>
            <Typography className="text-gray-600 dark:text-gray-300">
              Add new equipment to the system
            </Typography>
          </Card>
        </Link>

        <Link to="all-equipments">
          <Card className="p-4 hover:shadow-lg transition-all border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
            <Typography
              variant="h6"
              className="mb-2 text-gray-800 dark:text-gray-100"
            >
              All Equipment
            </Typography>
            <Typography className="text-gray-600 dark:text-gray-300">
              Browse all available equipment
            </Typography>
          </Card>
        </Link>
      </div>
    </div>
  );
}
