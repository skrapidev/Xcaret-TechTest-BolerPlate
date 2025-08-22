import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import BaseComponent from "../Shared/Components/Base/BaseComponent";

const router = createBrowserRouter([
  {
    path: "/",
    Component: () => (
      <BaseComponent>
        <Home />
      </BaseComponent>
    ),
  },
  {
    path: "aboutus",
    Component: () => (
      <BaseComponent>
        <AboutUs />
      </BaseComponent>
    ),
  },
]);

export default router;
