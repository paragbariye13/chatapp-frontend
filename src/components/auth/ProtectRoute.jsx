import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectRoute = ({ childern, user, redirect = "/login" }) => {
  if (!user) return <Navigate to={redirect} />;
  return childern ? childern : <Outlet />;
};

export default ProtectRoute;
