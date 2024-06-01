import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import getToken from "../getToken";

import { useGlobalContext } from "./userContext";

const Index = () => {
  const [position, setposition] = useState("");
  const [company, setcompany] = useState("");
  const [location, setLocation] = useState("");
  const [jobstatus, setjobstatus] = useState("Interview");
  const [jobtype, setjobType] = useState("Full time");
  const { setCurrentUser } = useGlobalContext();
  useEffect(() => {
    async function getCurUser() {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/dashboard",
          getToken()
        );

        // toast.success(`Hello ${res.data.username}`);
        setCurrentUser(res.data._id);
        // console.log(currentUser);
      } catch (error: any) {
        toast.error(error.response.data.msg);
      }
    }
    getCurUser();
  }, []);
  return (
    <div className="flex justify-center flex-col space-y-10">
      <p className="  font-semibold text-4xl mx-auto">POST A JOB</p>
      <form
        className=" flex flex-wrap justify-between w-[70vw] mx-auto  "
        onSubmit={async (e) => {
          e.preventDefault();
          console.log({ position, company, location, jobstatus, jobtype });
        }}
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Position</span>
          </div>
          <input
            type="text"
            className="input input-bordered w-full max-w-xs"
            required
            onChange={(e) => {
              setposition(e.target.value);
            }}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Company</span>
          </div>
          <input
            type="text"
            required
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setcompany(e.target.value);
            }}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Location</span>
          </div>
          <input
            type="text"
            required
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Job Type</span>
          </div>
          <select
            className="select select-bordered"
            onChange={(e) => {
              setjobstatus(e.target.selectedOptions[0].innerHTML);
            }}
          >
            <option disabled>Pick one</option>
            <option>Full time</option>
            <option>Part time</option>
            <option>Internship</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Job status</span>
          </div>
          <select
            className="select select-bordered"
            onChange={(e) => {
              setjobType(e.target.selectedOptions[0].innerHTML);
            }}
          >
            <option disabled>Pick one</option>
            <option>Pending</option>
            <option>Interview</option>
            <option>Declined</option>
          </select>
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            {position.length > 0 &&
            company.length > 0 &&
            location.length > 0 ? (
              <span className="label-text text-green-400">Post job</span>
            ) : (
              <span className="label-text text-red-400">
                All fields are required
              </span>
            )}
          </div>
          <button className="btn">Submit</button>
        </label>
      </form>
    </div>
  );
};

export default Index;
