import axios from "axios";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    async function getUser() {
      await axios.get("");
    }
  });
  return <div>Navbar</div>;
};
export default Navbar;
