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
    <div className="h-screen flex overflow-hidden">
      {/* Sidebar - Fixed height with independent scroll */}
      <Card className="w-full lg:w-[300px] h-screen rounded-none shadow-none bg-gray-900 dark:bg-gray-950 text-gray-50 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <Typography variant="h5" className="text-gray-50">
            Dashboard Menu
          </Typography>
        </div>

        <List className="text-gray-100 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 hover:scrollbar-thumb-gray-600">
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

      {/* Main Content - Fixed height with independent scroll */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Fixed Header */}
        <div className="bg-gray-900 dark:bg-gray-950 p-4 flex justify-end items-center gap-4 border-b border-gray-800">
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
            <MenuList className="p-1 dark:bg-gray-900">
              <MenuItem className="flex items-center gap-2 rounded hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-900 dark:hover:text-red-200">
                <Typography
                  variant="small"
                  className="font-medium dark:text-gray-200"
                >
                  {user?.displayName}
                </Typography>
              </MenuItem>
              <MenuItem
                className="flex items-center gap-2 rounded hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-900 dark:hover:text-red-200"
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
                <Typography
                  variant="small"
                  className="font-normal dark:text-gray-200"
                >
                  Sign Out
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-950 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-gray-100 dark:scrollbar-track-gray-800 hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-gray-600">
          <div className="p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
