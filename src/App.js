import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import ChatArea from "./components/ChatArea";
import ChatProvider from "./context/ChatProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <ChatArea /> }],
  },
]);

function App() {
  return (
    <ChatProvider>
      <RouterProvider router={router} />
    </ChatProvider>
  );
}

export default App;
