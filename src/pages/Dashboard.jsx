import {
  PlusCircleIcon,
  RectangleGroupIcon,
  Square3Stack3DIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "bg-red-50 text-red-900" : "";
  };

  return (
    <div className="min-h-[calc(100vh-200px)] max-w-screen-2xl w-11/12 mx-auto my-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <Card className="h-fit w-full lg:w-[300px] p-4">
          <div className="p-4 border-b">
            <Typography variant="h5" color="blue-gray">
              Dashboard Menu
            </Typography>
          </div>
          <List>
            <Link to="/dashboard">
              <ListItem className={`${isActive("/dashboard")}`}>
                <ListItemPrefix>
                  <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Overview
              </ListItem>
            </Link>
            <Link to="/dashboard/my-equipments">
              <ListItem className={`${isActive("/dashboard/my-equipments")}`}>
                <ListItemPrefix>
                  <RectangleGroupIcon className="h-5 w-5" />
                </ListItemPrefix>
                My Equipments
              </ListItem>
            </Link>
            <Link to="/dashboard/add-equipment">
              <ListItem className={`${isActive("/dashboard/add-equipment")}`}>
                <ListItemPrefix>
                  <PlusCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Add Equipment
              </ListItem>
            </Link>
            <Link to="/dashboard/all-equipments">
              <ListItem className={`${isActive("/dashboard/all-equipments")}`}>
                <ListItemPrefix>
                  <Square3Stack3DIcon className="h-5 w-5" />
                </ListItemPrefix>
                All Equipments
              </ListItem>
            </Link>
          </List>
        </Card>

        {/* Main Content */}
        <Card className="flex-1 p-6">
          <Outlet />
        </Card>
      </div>
    </div>
  );
}
