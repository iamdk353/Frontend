import axios from "axios";
import { useEffect } from "react";
import { useGlobalUser } from "../Context/GlobalUserContext";
import getToken from "../helper/getToken";

const AllJobs = () => {
  const { userId } = useGlobalUser();
  console.log(userId);
  useEffect(() => {
    async function getUserJobs() {
      const res = await axios.get(`job/created/${userId}`, getToken());
      console.log(res.data.job);
    }
    getUserJobs();
  }, [userId]);
  return <div>AllJobs</div>;
};
export default AllJobs;
