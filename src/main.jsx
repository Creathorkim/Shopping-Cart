import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "./components/ErrorPage.jsx";
import Shop from "./pages/Shop.jsx";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage />,
    children: [
      { index : "true", element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
