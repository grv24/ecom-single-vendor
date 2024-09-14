import { HomePage, ProductPage } from "../page";

const routes = [
  {
    path: "/",
    component: HomePage,
    layout: "default",
    private: false,
  },
  {
    path: "/product",
    component: ProductPage,
    layout: "default",
    private: false,
  },
];
// product?category=electronics&subcategory=&keyword=&brand=&discount=&featured=&newArrival=&sortBy=&limit=12&page=1&layout=grid&columns=4
export default routes;
