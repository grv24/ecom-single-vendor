import React from "react";
import { TokenProvider } from "./context/TokenContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./component";
import routes from "./routes/route.js";
import PrivateRoute from "./routes/privateRoute/index.js";

const App = () => {
  return (
    <TokenProvider>
      <Router>
        <Routes>
          {routes.map(
            ({ path, layout, component: Component, private: isPrivate }) => {
              const LayoutComponent = (
                <Layout layoutType={layout}>
                  <Component />
                </Layout>
              );
              return isPrivate ? (
                <Route
                  key={path}
                  path={path}
                  element={<PrivateRoute element={LayoutComponent} />}
                />
              ) : (
                <Route key={path} path={path} element={LayoutComponent} />
              );
            }
          )}
        </Routes>
      </Router>
    </TokenProvider>
  );
};

export default App;
