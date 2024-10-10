import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Root from "../root/Root";
import Blogs from "../pages/Blogs/Blogs";
import Error from "../pages/Error/Error";
import Contact from "../pages/Contact/Contact";
import Treatments from "../pages/Treatments/Treatments";
import Dentists from "../pages/Dentists/Dentists";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dentists",
        element: <Dentists />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/treatments",
        element: <Treatments />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
    ],
  },
]);
export default router;
