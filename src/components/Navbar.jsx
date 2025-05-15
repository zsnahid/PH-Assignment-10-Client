import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import {
  Avatar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext.jsx";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="px-3 py-1 font-semibold text-gray-700 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-red-600 dark:text-red-400" : ""
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="px-3 py-1 font-semibold text-gray-700 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
      >
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "text-red-600 dark:text-red-400" : ""
          }
        >
          All Products
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none border-none px-4 py-2 shadow-md dark:bg-gray-900 dark:text-white lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-gray-900">
        <Typography
          as={Link}
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-red-600 dark:text-red-400"
        >
          Sports Gear Hub
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button
              onClick={toggleDarkMode}
              variant="text"
              className="flex items-center gap-2 text-gray-700 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
            {user ? (
              <Menu>
                <MenuHandler>
                  <Avatar
                    variant="circular"
                    size="sm"
                    alt="avatar"
                    className="cursor-pointer"
                    src={user?.photoURL}
                  />
                </MenuHandler>
                <MenuList className="dark:bg-gray-800">
                  <MenuItem
                    onClick={() => navigate("/dashboard")}
                    className="flex items-center gap-2 text-gray-700 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    onClick={handleLogOut}
                    className="flex items-center gap-2 text-gray-700 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                variant="filled"
                size="sm"
                color="red"
                className="hidden lg:inline-block"
                onClick={() => navigate("/login")}
              >
                <span>Sign in</span>
              </Button>
            )}
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        {navList}
        {!user && (
          <Button
            variant="gradient"
            size="sm"
            color="red"
            fullWidth
            className="mb-2"
            onClick={() => navigate("/login")}
          >
            <span>Sign in</span>
          </Button>
        )}
      </Collapse>
    </Navbar>
  );
}
