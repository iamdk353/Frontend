import { useGlobalContext } from "./userContext";

const Comp1 = () => {
  const { currentUser } = useGlobalContext();
  return <div>comp 1{currentUser}</div>;
};
export default Comp1;
