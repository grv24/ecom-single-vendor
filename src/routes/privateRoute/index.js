import React from "react";

const PrivateRoute = ({ element }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");
  console.log(element);
  return isAuthenticated ? element : "hehe";
};

export default PrivateRoute;
