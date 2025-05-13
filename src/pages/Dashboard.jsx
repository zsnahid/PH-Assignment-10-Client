import {
  HomeIcon,
  MoonIcon,
  PlusCircleIcon,
  RectangleGroupIcon,
  Square3Stack3DIcon,
  SunIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useContext } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext.jsx";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useTheme();

  const isActive = (path) => {
    return location.pathname === path ? "bg-red-900/20 text-red-200" : "";
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Card className="h-screen w-full lg:w-[300px] p-4 rounded-none shadow-none bg-gray-900 dark:bg-gray-950 text-gray-50">
        <div className="p-4 border-b border-gray-700">
          <Typography variant="h5" className="text-gray-50">
            Dashboard Menu
          </Typography>
        </div>
        <List className="text-gray-100">
          <Link to="/">
            <ListItem className="hover:bg-red-900/20 hover:text-red-200 transition-colors">
              <ListItemPrefix>
                <HomeIcon className="h-5 w-5" />
              </ListItemPrefix>
              Home
            </ListItem>
          </Link>
          <Link to="/dashboard">
            <ListItem
              className={`${isActive(
                "/dashboard"
              )} hover:bg-red-900/20 hover:text-red-200 transition-colors`}
            >
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Overview
            </ListItem>
          </Link>
          <Link to="/dashboard/my-equipments">
            <ListItem
              className={`${isActive(
                "/dashboard/my-equipments"
              )} hover:bg-red-900/20 hover:text-red-200 transition-colors`}
            >
              <ListItemPrefix>
                <RectangleGroupIcon className="h-5 w-5" />
              </ListItemPrefix>
              My Equipments
            </ListItem>
          </Link>
          <Link to="/dashboard/add-equipment">
            <ListItem
              className={`${isActive(
                "/dashboard/add-equipment"
              )} hover:bg-red-900/20 hover:text-red-200 transition-colors`}
            >
              <ListItemPrefix>
                <PlusCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Add Equipment
            </ListItem>
          </Link>
          <Link to="/dashboard/all-equipments">
            <ListItem
              className={`${isActive(
                "/dashboard/all-equipments"
              )} hover:bg-red-900/20 hover:text-red-200 transition-colors`}
            >
              <ListItemPrefix>
                <Square3Stack3DIcon className="h-5 w-5" />
              </ListItemPrefix>
              All Equipments
            </ListItem>
          </Link>
        </List>
      </Card>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-900 dark:bg-gray-950 p-4 flex justify-end items-center gap-4">
          <Button
            onClick={toggleDarkMode}
            variant="text"
            className="flex items-center gap-2 text-gray-200 hover:text-red-400"
            size="sm"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5" />
            ) : (
              <MoonIcon className="h-5 w-5" />
            )}
          </Button>
          <Menu>
            <MenuHandler>
              <Avatar
                src={user?.photoURL}
                alt="profile picture"
                size="sm"
                className="cursor-pointer"
              />
            </MenuHandler>
            <MenuList className="p-1">
              <MenuItem className="flex items-center gap-2 rounded hover:bg-red-50 hover:text-red-900">
                <Typography variant="small" className="font-medium">
                  {user?.displayName}
                </Typography>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-2 rounded hover:bg-red-50 hover:text-red-900"
                onClick={() => {
                  logOut()
                    .then(() => {
                      navigate("/");
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              >
                <Typography variant="small" className="font-normal">
                  Sign Out
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 overflow-auto bg-gray-50 dark:bg-gray-950 shadow-none rounded-none">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
