import { useEffect, useState } from "react";
import { useGlobalContext } from "./userContext";
import axios from "axios";
import toast from "react-hot-toast";
import getToken from "../getToken";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const redirect = useNavigate();
  const { currentUser } = useGlobalContext();
  interface userTypes {
    location: String;
    name: String;
    profile: Number;
    username: String;
    _id: String;
  }
  const [user, setuser] = useState<userTypes>();
  useEffect(() => {
    async function GetUser() {
      try {
        if (currentUser) {
          console.log("id from nav" + currentUser);
          console.log("http://localhost:5000/api/user/whoami/" + currentUser);
          const res = await axios.get(
            "http://localhost:5000/api/user/whoami/" + currentUser,
            getToken()
          );
          // console.log(res.data);
          setuser(res.data);
          // console.log(user);
        }
        // toast.success(res.data.username);
      } catch (error: any) {
        console.error(error);
      }
    }
    GetUser();
  }, [currentUser]);
  return (
    <div className="navbar px-10 h-20 bg-base-300">
      <div className="flex-1  space-x-2 ml-5">
        <div className="size-8 bg-primary flex justify-center items-center font-semibold text-2xl rounded-md">
          J
        </div>
        <a className="btn no-animation text-xl">JOBSTAR</a>
      </div>
      <div className="flex-none gap-2">
        <div className="badge h-10 w-20 bg-base-content text-primary-content">
          {user?.name}
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={`./${user?.profile}.svg`}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-32"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a
                onClick={() => {
                  localStorage.clear();
                  redirect("/");
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
