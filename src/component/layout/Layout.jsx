import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

const AuthLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

const Layout = ({ layoutType, children }) => {
  if (layoutType === "auth") {
    return <AuthLayout>{children}</AuthLayout>;
  }

  return <DefaultLayout>{children}</DefaultLayout>;
};

export default Layout;
