import { Outlet, Navigate } from "react-router-dom";

// Simulate authentication check by always returning true
const isAuthenticated = () => {
  // Simulate authenticated status
  return Boolean(localStorage.getItem("user"));; // Set to `true` to allow access
};

const PrivateRoutes = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
