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
import axios from "axios";
import NewJob from "./components/NewJob";
import JobStats from "./components/JobStats";
import AllJobs from "./components/AllJobs";
import Profile from "./components/Profile";
import UserData from "./Context/GlobalUserContext";

axios.defaults.baseURL = "http://localhost:5000/api/";

const reactRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Layout />}>
        <Route path="" element={<NewJob />} />
        <Route path="alljobs" element={<AllJobs />} />
        <Route path="stats" element={<JobStats />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <UserData>
      <RouterProvider router={reactRouter}></RouterProvider>
    </UserData>
  </>
);
