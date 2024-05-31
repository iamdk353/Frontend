import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import getToken from "../getToken";
import { UserContext } from "./UserContext";
// import useUser from "./UserContext";
const Index = () => {
  useEffect(() => {
    async function getCurUser() {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/user/dashboard",
          getToken()
        );
        console.log(res.data._id);

        toast.success(`hello ${res.data.username}`);
      } catch (error: any) {
        toast.error(error.response.data.msg);
      }
    }
    getCurUser();
  }, []);
  return (
    <UserContext>
      <>hello</>
    </UserContext>
  );
};
export default Index;
