import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
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
import { useEffect } from "react";

axios.defaults.baseURL = "http://localhost:5000/api/";
const reactRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signin />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/home"
        element={
          <>
            <Layout />
            <Token></Token>
          </>
        }
      >
        <Route path="" element={<NewJob />} />
        <Route path="alljobs" element={<AllJobs />} />
        <Route path="stats" element={<JobStats />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(<App></App>);
function Token({ childrens }: any) {
  const redirect = useNavigate();

  useEffect(() => {
    console.log("token has changes");
    if (!localStorage.getItem("token")) {
      console.log("no token");
      redirect("/login");
    }
  }, [localStorage.getItem("token")]);
  return <>{childrens}</>;
}
function App() {
  return (
    <>
      <Toaster position="top-right" />
      <UserData>
        <RouterProvider router={reactRouter}></RouterProvider>
      </UserData>
    </>
  );
}
