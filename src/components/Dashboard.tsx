import axios from "axios";

import { useEffect } from "react";
const Dashboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    async function get() {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/dashboard",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data._id);
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);
  return <>this is dashboard</>;
};
export default Dashboard;
