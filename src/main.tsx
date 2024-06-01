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
import AppContext from "./pages/userContext";
import Layout from "./pages/Layout";
import Index from "./pages/Index";
import Jobs from "./pages/Jobs";
const reactRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Layout />}>
        <Route path="" element={<Index />} />
        <Route path="jobs" element={<Jobs />} />
      </Route>
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
