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
import Index from "./pages/Index";
import AppContext from "./pages/userContext";
const reactRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Index />} />
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <AppContext>
      <RouterProvider router={reactRouter}></RouterProvider>
    </AppContext>
  </>
);
