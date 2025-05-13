import { Spinner } from "@material-tailwind/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

/* eslint-disable react/prop-types */
export default function PrivateRoutes({ children }) {
  const { loading, user } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="min-h-[50vh] max-w-screen-2xl w-11/12 mx-auto my-10 grid">
        <Spinner className="h-12 w-12 text-red-900 place-self-center" />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
