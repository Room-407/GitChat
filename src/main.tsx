import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import loadable from "@loadable/component";

const HomePage = loadable(() => import("./App.tsx"));
const SignUpPage = loadable(() => import("./pages/signup.tsx"));

const ROUTE_PATH = {
  HOME: "/",
  SIGN_IN: "/signin",
  SIGN_UP: "/signup",
};

const router = createMemoryRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <HomePage />,
    loader: HomePage.load,
  },
  {
    path: ROUTE_PATH.SIGN_UP,
    element: <SignUpPage />,
    loader: SignUpPage.load,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
