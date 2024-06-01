import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import getToken from "../getToken";

import { useGlobalContext } from "./userContext";

const Index = () => {
  const { currentUser, setCurrentUser } = useGlobalContext();
  useEffect(() => {
    async function getCurUser() {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/dashboard",
          getToken()
        );

        toast.success(`Hello ${res.data.username}`);
        setCurrentUser(res.data._id);
        // console.log(currentUser);
      } catch (error: any) {
        toast.error(error.response.data.msg);
      }
    }
    getCurUser();
  }, []);
  return <div>currrent user {currentUser}</div>;
};

export default Index;
