import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { createContext, useState } from "react";
import "./index.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import Dashboard from "./components/Dashboard";
import Layout from "./components/Layout";

export interface userType {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Layout />}>
        <Route path="" element={<Dashboard />} />
      </Route>
    </>
  )
);
export const userContext = createContext<userType | undefined>(undefined);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
function App() {
  const [user, setUser] = useState("");
  return (
    <userContext.Provider value={{ user, setUser }}>
      <Toaster />
      <RouterProvider router={Router} />
    </userContext.Provider>
  );
}
