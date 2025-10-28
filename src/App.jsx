import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Home from './ui/Home';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import { action as UpdateOrderAction } from './features/order/UpdateOrder';
import AppLayout from './ui/AppLayout';
import Error from './ui/Error';

import './index.css';
const router = createBrowserRouter([
  {
    // technically called layout route becase it does not have a part
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
