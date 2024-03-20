/* eslint-disable no-unused-vars */

// eslint-disable-next-line no-unused-vars
import App from './App.jsx'
import React from "react";
import ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CoinList from './Components/CoinList.jsx';
import  CoinDetails  from './Components/coinDetails.jsx';
import { Chart } from 'react-chartjs-2';



const router = createBrowserRouter([
  {
    path: "/",
    element: <CoinList/>
  },
  {
    path: "coins/:coinId",
    element: <CoinDetails/>
  },
  {
    path: "/asghar",
    element: <div>Hello asghar!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

