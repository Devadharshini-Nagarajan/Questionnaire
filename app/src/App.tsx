import React from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Pages/Layout/Layout";
import Home from "./components/Pages/Home/Home";
import ErrorBoundary from "./components/shared/ErrorBoundary/ErrorBoundary";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <RouterProvider router={routes} />
      </div>
    </ThemeProvider>
  );
};

export default App;
