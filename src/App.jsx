import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import Order from "./features/order/Order";
import CreateOrder, {action as actionCreateOrder} from "./features/order/CreateOrder";
import AppLayout from "./AppLayout";
import { loader as loaderMenu } from "./features/menu/Menu";
import { loader as loaderOrder } from "./features/order/Order";
import { action as actionOrder } from "./features/order/Order";
import Error from "./ui/Error"


const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { 
        path: "/menu",
        element: <Menu />,
        loader: loaderMenu,
        errorElement: <Error />
       },
      { path: "/cart", element: <Cart /> },
      { path: "/order/new", element: <CreateOrder />, action: actionCreateOrder },
      { path: "/order/:orderId", element: <Order />, loader: loaderOrder, action: actionOrder },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
