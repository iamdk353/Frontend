import axios from "axios";
import { useEffect, useState } from "react";
import getToken from "../helper/getToken";
import { useGlobalUser } from "../Context/GlobalUserContext";
import { Link } from "react-router-dom";
import user from "../interface/user";
import { navLinks } from "../helper/navLinks";
// import user from "../interface/user";

const Navbar = () => {
  const { userId, setUserId } = useGlobalUser();
  const [navState, setNavstate] = useState<user>();

  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get("verify/whoami", getToken());
        setUserId(res.data._id);
        setNavstate(res.data);
        if (userId) {
          console.log(userId);
        }
        console.log(navState);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [userId]);
  return (
    <div className="navbar bg-base-100 px-10 flex justify-between">
      <div className="">
        <a className="btn btn-ghost text-xl no-animation">Jobstar</a>
      </div>
      <div role="tablist" className="tabs tabs-boxed">
        {navLinks.map((i, index) => {
          return (
            <Link to={i.to} key={index} role="tab" className={`tab `}>
              {i.name}
            </Link>
          );
        })}
      </div>
      <div className="flex-none gap-2">
        <div className="badge p-3 bg-primary text-primary-content">
          {navState?.name}
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="size-10 rounded-full flex justify-center items-center p-1">
              <img
                alt="profil pic"
                src={`../../assets/${navState?.profile}.svg`}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
