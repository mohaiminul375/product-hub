import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
// router (react router dom)
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
