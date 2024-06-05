import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import getToken from "../helper/getToken";
import { useGlobalUser } from "../Context/GlobalUserContext";
const profile = () => {
  const { userId } = useGlobalUser();
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [profile, setProfile] = useState(1);

  const [location, setlocation] = useState("Bengaluru");
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
    async function getUser() {
      try {
        const res = await axios.get("verify/whoami", getToken());
        console.log(res.data);
        setUsername(res.data.username);
        setName(res.data.name);
        setlocation(res.data.location);
        setProfile(res.data.profile);
        setLoading(false);
      } catch (error: any) {
        toast.error(error.message);
        setLoading(false);
      }
    }
    getUser();
  }, []);
  return (
    <div className="w-[95vw] h-screen flex justify-center items-center ">
      {loading ? (
        <div className="loading loading-lg"></div>
      ) : (
        <form
          className="flex flex-col  p-10 space-y-5 items-center  border rounded-lg select-none w-[40%]"
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              setSubmit(true);

              const updated = await axios.put(
                "/verify/profile",
                { _id: userId, name, username, location, profile },
                getToken()
              );
              if (updated.data.updated) {
                toast.success("updated ");
                toast("changes apply when you re-login");
              } else toast.error(updated.data);
              setSubmit(false);
            } catch (error: any) {
              setLoading(false);
              toast.error(error);

              setSubmit(false);
              if (error.message === "Network Error") {
                toast.error("Internal Server Error");
                return;
              }
              const err = error.response.data.error.startsWith("E11000")
                ? "email already exist"
                : error.response.data.error;
              toast.error(err);
            }
          }}
        >
          <p className="text-3xl font-semibold ">EDIT PROFILE</p>
          <div className="size-20 p-2 border rounded-full">
            <img src={`../../assets/${profile}.svg`} alt={`profile pic`} />
          </div>
          <div className="flex w-full h-15  justify-center">
            <div className="dropdown dropdown-right ">
              <div tabIndex={0} role="button" className="btn m-1">
                Change
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-300 rounded-box w-[20vw] flex flex-row "
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
                  return (
                    <li key={i}>
                      <a
                        onClick={() => {
                          setProfile(i);
                        }}
                      >
                        <img
                          src={`../../assets/${i}.svg`}
                          alt="profile pic"
                          className="size-12 "
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Name"
              value={name}
              onChange={async (e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="Email"
              className="grow"
              placeholder="Email"
              value={username}
              required
              onChange={async (e) => {
                setUsername(e.target.value);
              }}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>

            <input
              type="text"
              className="grow"
              placeholder="Location"
              value={location}
              onChange={async (e) => {
                setlocation(e.target.value);
              }}
            />
          </label>
          <button
            className={`btn btn-prmiary `}
            type="submit"
            disabled={submit}
          >
            {submit ? (
              <span className="loading loading-spinner loading-xs"></span>
            ) : (
              "Update"
            )}
          </button>
        </form>
      )}
    </div>
  );
};
export default profile;
