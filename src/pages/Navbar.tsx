import { useEffect } from "react";
import { useGlobalContext } from "./userContext";
import axios from "axios";
import toast from "react-hot-toast";
import getToken from "../getToken";

const Navbar = () => {
  const { currentUser } = useGlobalContext();
  useEffect(() => {
    async function GetUser() {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/whoami/" + currentUser,
          getToken()
        );
        console.log(res.data);
        toast.success(res.data.username);
      } catch (error: any) {
        toast.error("error");
      }
    }
    GetUser();
  });
  console.log(currentUser);
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1  space-x-2 ml-5">
        <div className="size-8 bg-primary flex justify-center items-center font-semibold text-2xl rounded-md">
          J
        </div>
        <a className="btn no-animation text-xl">JOBSTAR</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <button className="size-10 flex justify-center items-center rounded-full bg-primary ">
            {currentUser[0]}
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
