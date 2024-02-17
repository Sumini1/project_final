import { Outlet, Navigate, useLocation } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const { userData } = useContext(AppContext);
  const location = useLocation();
  const { hash, pathname, search } = location;
  if (!token && token === null) {
    return <Navigate to={"/login"} />;
  }
  const userAkses = [
    "/login",
    "/register",
    "/new-menu",
    "/all-food",
    "/food-by-id",
    "/update-profile",
    "/food-rating",
  ];
  if (userData.role && userData.role !== "admin") {
    if (userAkses.some((item) => pathname.startsWith(item)) || pathname === "/") {
      return <>{children || <Outlet />}</>;
    } else {
      return <Navigate to={"/"} />;
    }
  } else {
    return <>{children || <Outlet />}</>;
  }

  // outlet itu component bawaan react router dom, component default
};
export default ProtectedRoute;
