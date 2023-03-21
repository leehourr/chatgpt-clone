import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ChatArea from "./components/ChatArea";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <ChatArea /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
