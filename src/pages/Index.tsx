import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import getToken from "../getToken";
import Comp1 from "./Comp1";
import Comp3 from "./Comp3";
import Comp2 from "./Comp2";
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
        console.log(currentUser);
      } catch (error: any) {
        toast.error(error.response.data.msg);
      }
    }
    getCurUser();
  }, []);
  return (
    <div>
      <Comp1 />
      <Comp3 />
      <Comp2 />
    </div>
  );
};

export default Index;
