import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalUser } from "../Context/GlobalUserContext";
import getToken from "../helper/getToken";
import Job from "./Job";
import Nojobs from "./Nojobs";
const AllJobs = () => {
  const { userId } = useGlobalUser();
  const [jobs, setJobs] = useState([]);
  const [fetching, setfetching] = useState(true);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserJobs = async () => {
      try {
        const res = await axios.get(`job/created/${userId}`, getToken());
        if (res.data && res.data.job) {
          setJobs(res.data.job.reverse());
          setfetching(false);
        } else {
          console.error("Unexpected response format:", res.data);
          setfetching(false);
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setfetching(false);
      }
    };

    if (userId) {
      getUserJobs();
    }
  }, [userId]);

  return (
    <>
      {fetching ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div className="loading loading-lg"></div>
        </div>
      ) : jobs.length > 0 ? (
        <div className="w-full flex flex-wrap">
          {jobs.map((job, index) => (
            <Job data={job} key={index} />
          ))}
        </div>
      ) : (
        <Nojobs />
      )}
    </>
  );
};
export default AllJobs;
