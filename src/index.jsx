import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Login from './login/login';
import ListProjects from './products/listProducts/listProducts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: 'listProjects',
    element: <ListProjects/>
  }
])

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);