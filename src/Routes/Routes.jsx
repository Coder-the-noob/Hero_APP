import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import InstallApps from "../Pages/InstallApps";
import RootLayout from "../Layout/RootLayout";
import ErrorPage from "../Pages/ErrorPage";
import GithubPage from "../Pages/GithubPage";
import AllApps from "../Pages/AllApps";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('./AppData.json')
      },
      {
        path: "/allapps",
        element: <AllApps />,
      },
      {
        path: "/installation",
        element: <InstallApps />,
      },
      {
        path: '/appdetails/:id',
        element: <AppDetails></AppDetails>
      }
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  },
  {
    path: "/github",
    element: <GithubPage></GithubPage>,
  }
]);

export default router;
