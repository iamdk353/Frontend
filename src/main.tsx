import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Signin from "./pages/Signin";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
// import Index from "./pages/Index";
import Layout from "./Layout/Layout";

const reactRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Layout />}></Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <RouterProvider router={reactRouter}></RouterProvider>
  </>
);
