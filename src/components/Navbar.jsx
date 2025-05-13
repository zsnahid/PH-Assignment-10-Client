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
  Switch,
  Typography,
} from "@material-tailwind/react";
import React, { useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);
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

  useEffect(() => {
    const themeToggleBtn = document.getElementById("theme-toggle-btn");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      themeToggleBtn.checked = true;
    }
  }, []);

  const handleThemeToggle = () => {
    let savedTheme = localStorage.getItem("theme");

    const currentTheme = document.documentElement.classList;

    if (!savedTheme || savedTheme === "light") {
      localStorage.theme = "dark";
    } else if (savedTheme === "dark") {
      localStorage.theme = "light";
    }

    savedTheme = localStorage.getItem("theme");
    const isDark = currentTheme.contains("dark");

    if (isDark) {
      currentTheme.remove("dark");
      currentTheme.add(savedTheme);
    } else {
      currentTheme.remove("light");
      currentTheme.add(savedTheme);
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="px-3 py-1 font-semibold hover:bg-red-50 dark:hover:bg-red-900/30 dark:text-white/90"
      >
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
      </Typography>
      {!user && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="px-3 py-1 font-semibold hover:bg-red-50 dark:hover:bg-red-900/30 dark:text-white/90"
        >
          <NavLink
            to="/all-equipments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            All Equipments
          </NavLink>
        </Typography>
      )}
    </ul>
  );

  return (
    <Navbar className="dark:bg-black/90 dark:text-white/90 sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 border-none">
      <div className="flex items-center justify-between text-blue-gray-900 dark:text-white/90">
        <Typography
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 font-bold uppercase"
        >
          <Link to="/">
            <span className="text-red-900">Equi</span>Sports
          </Link>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-3">
            <SunIcon
              id="sun-icon"
              className="size-5 text-red-900 dark:text-white/90"
            />
            <Switch id="theme-toggle-btn" onClick={handleThemeToggle} />
            <MoonIcon
              id="moon-icon"
              className="size-4 text-black dark:text-red-900"
            />
          </div>
          <div className="flex items-center gap-x-1">
            {user ? (
              <Menu>
                <MenuHandler>
                  <Avatar
                    src={user.photoURL}
                    alt="profile picture"
                    size="sm"
                    className="cursor-pointer"
                  />
                </MenuHandler>
                <MenuList className="p-1">
                  <MenuItem className="flex items-center gap-2 rounded hover:bg-red-50/80">
                    <Typography variant="small" className="font-medium">
                      {user.displayName}
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    className="flex items-center gap-2 rounded hover:bg-red-50/80"
                    onClick={() => navigate("/dashboard")}
                  >
                    <Typography variant="small" className="font-normal">
                      Dashboard
                    </Typography>
                  </MenuItem>
                  <MenuItem
                    className="flex items-center gap-2 rounded hover:bg-red-50/80"
                    onClick={handleLogOut}
                  >
                    <Typography variant="small" className="font-normal">
                      Sign Out
                    </Typography>
                  </MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link to="/login">
                <Button
                  variant="outlined"
                  size="sm"
                  className="hidden lg:inline-block rounded-none dark:border-white/90 dark:text-white/90"
                >
                  <span>Log In</span>
                </Button>
              </Link>
            )}
            {!user && (
              <Link to="/register">
                <Button
                  variant="filled"
                  size="sm"
                  className="hidden lg:inline-block rounded-none bg-red-900"
                >
                  <span>Register</span>
                </Button>
              </Link>
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
        {user ? (
          <Button
            fullWidth
            variant="outlined"
            size="sm"
            className="rounded-none dark:border-white/90 dark:text-white/90"
            onClick={handleLogOut}
          >
            Sign Out
          </Button>
        ) : (
          <div className="flex items-center gap-x-1">
            <Link to="/login" className="w-full">
              <Button
                fullWidth
                variant="outlined"
                size="sm"
                className="rounded-none dark:border-white/90 dark:text-white/90"
              >
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/register" className="w-full">
              <Button
                fullWidth
                variant="filled"
                size="sm"
                className="bg-red-900 rounded-none border border-red-900"
              >
                <span>Register</span>
              </Button>
            </Link>
          </div>
        )}
      </Collapse>
    </Navbar>
  );
}
