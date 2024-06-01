import axios from "axios";
import { useState } from "react";
import getToken from "../helper/getToken";
import toast from "react-hot-toast";

const NewJob = () => {
  const initialState = {
    position: "",
    company: "",
    joblocation: "",
    Jobstats: "Pending",
    jobtype: "Internship",
  };
  const [form, setform] = useState(initialState);
  return (
    <div className="flex items-center justify-between space-y-4 bg-base-200 flex-col p-10 w-[90] ">
      <p className="text-2xl font-semibold ">POST A JOB OPENING</p>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(form);
          const res = await axios.post("/job", form, getToken());
          toast.success(res.data.msg);
          setform(initialState);
        }}
      >
        <div className="w-[80vw] flex flex-wrap mt-10 space-x-2 p-10">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Position</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={form.position}
              required
              onChange={(e) => {
                setform((prevForm) => ({
                  ...prevForm,
                  position: e.target.value,
                }));
              }}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Company</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={form.company}
              required
              onChange={(e) => {
                setform((prevForm) => ({
                  ...prevForm,
                  company: e.target.value,
                }));
              }}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job Location</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              value={form.joblocation}
              required
              onChange={(e) => {
                setform((prevForm) => ({
                  ...prevForm,
                  joblocation: e.target.value,
                }));
              }}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job status</span>
            </div>
            <select
              className="select select-bordered"
              value={form.Jobstats}
              onChange={(e) => {
                setform((prevForm) => ({
                  ...prevForm,
                  Jobstats: e.target.selectedOptions[0].innerHTML,
                }));
              }}
            >
              <option disabled>Pick one</option>
              <option>Pending</option>
              <option>Interview</option>
              <option>Declinded</option>
            </select>
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Job Type</span>
            </div>
            <select
              className="select select-bordered"
              value={form.jobtype}
              onChange={(e) => {
                setform((prevForm) => ({
                  ...prevForm,
                  jobtype: e.target.selectedOptions[0].innerHTML,
                }));
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
              <span className="label-text opacity-0">Job Type</span>
            </div>
            <button className="btn btn-outline">Submit</button>
          </label>
        </div>
      </form>
    </div>
  );
};
export default NewJob;
