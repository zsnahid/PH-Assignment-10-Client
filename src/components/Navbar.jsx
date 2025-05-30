import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
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
      .then(() => {
        setOpenNav(false); // Close drawer after logging out
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleNavLinkClick = () => {
    setOpenNav(false); // Close drawer when clicking a route
  };

  const handleLoginClick = () => {
    setOpenNav(false); // Close drawer when clicking login button
    navigate("/login");
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
          onClick={handleNavLinkClick}
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
          onClick={handleNavLinkClick}
        >
          All Products
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="px-3 py-1 font-semibold text-gray-700 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
      >
        <NavLink
          to="/offers"
          className={({ isActive }) =>
            isActive ? "text-red-600 dark:text-red-400" : ""
          }
          onClick={handleNavLinkClick}
        >
          Offers
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="px-3 py-1 font-semibold text-gray-700 hover:text-red-600 dark:text-gray-200 dark:hover:text-red-400"
      >
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-red-600 dark:text-red-400" : ""
          }
          onClick={handleNavLinkClick}
        >
          Blog
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-20 h-max max-w-full rounded-none border-none px-4 py-2 shadow-md dark:bg-gray-900 dark:text-white lg:px-11 lg:py-4">
      <div className="flex items-center justify-between text-gray-900">
        <Typography
          as={Link}
          to="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-2xl text-red-600 dark:text-red-400"
        >
          Sportify
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
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Button
                variant="filled"
                size="sm"
                color="red"
                className="hidden lg:inline-block"
                onClick={handleLoginClick}
              >
                <span>Log in</span>
              </Button>
            )}
          </div>
          <IconButton
            variant="text"
            className="lg:hidden ml-auto text-gray-700 dark:text-gray-200"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse
        open={openNav}
        className="absolute left-0 right-0 top-full bg-white dark:bg-gray-900 shadow-lg z-10"
      >
        {navList}
        {!user ? (
          <Button
            variant="filled"
            size="sm"
            color="red"
            fullWidth
            className="mb-2"
            onClick={handleLoginClick}
          >
            <span>Log in</span>
          </Button>
        ) : (
          <Button
            variant="filled"
            size="sm"
            color="red"
            fullWidth
            className="mb-2"
            onClick={handleLogOut}
          >
            <span>Log out</span>
          </Button>
        )}
      </Collapse>
    </Navbar>
  );
}