
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleSlug from "./pages/SingleSlug";

 const router = createBrowserRouter([
   {
     path: "/",
     element: <Layout />,
     children: [
       {
         path: "/",
         element: <Home />,
       },
       {
         path: ":slug",
         element: <SingleSlug />,
       },
       {
         path: "about",
         element: <About />,
       },
       {
         path: "contact",
         element: <Contact />,
       },
     ],
   },
 ]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
