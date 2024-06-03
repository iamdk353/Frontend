import { useNavigate } from "react-router-dom";
const Nojobs = () => {
  const redirect = useNavigate();
  return (
    <div className="w-full h-[80vh] flex justify-center items-center flex-col ">
      <div className="bg-base-300 p-20 rounded-lg flex justify-center items-center  flex-col space-y-5">
        <p className="text-4xl font-semibold">No jobs created </p>

        <button
          className="btn btn-ghost"
          onClick={() => {
            redirect("/home");
          }}
        >
          Create a job
        </button>
      </div>
    </div>
  );
};
export default Nojobs;
