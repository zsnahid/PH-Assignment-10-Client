import { ThemeProvider as MaterialThemeProvider } from "@material-tailwind/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext.jsx";
import "./index.css";
import AuthProvider from "./providers/AuthProvider";
import { router } from "./router/routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MaterialThemeProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ThemeProvider>
    </MaterialThemeProvider>
  </StrictMode>
);
