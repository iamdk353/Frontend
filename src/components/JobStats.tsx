import { useEffect, useState } from "react";
import { useGlobalUser } from "../Context/GlobalUserContext";
import axios from "axios";
import getToken from "../helper/getToken";

const JobStats = () => {
  const { userId } = useGlobalUser();
  const [Interview, setInterview] = useState(0);
  const [Pending, setPending] = useState(0);
  const [Declined, setDeclined] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserJobs = async () => {
      try {
        const res = await axios.get(`job/created/${userId}`, getToken());
        if (res.data && res.data.job) {
          const jobList = res.data.job;
          setPending(
            jobList.filter((i: any) => i.jobstatus === "Pending").length
          );
          setInterview(
            jobList.filter((i: any) => i.jobstatus === "Interview").length
          );
          setDeclined(
            jobList.filter((i: any) => i.jobstatus === "Declined").length
          );
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    if (userId) {
      getUserJobs();
    }
  }, [userId]);
  return (
    <div className="flex flex-wrap justify-around">
      <div className="card w-96 bg-base-200 shadow-xl flex justify-center items-center p-4  border-b-2 border-b-warning">
        <div className="flex space-x-5">
          <div className="card-title ">Pending jobs</div>
          <div className="bg-warning p-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="bg-base-300"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
            </svg>
          </div>
        </div>
        <div className="text-warning font-bold text-2xl">
          {loading ? <div className="loading"></div> : Pending}
        </div>
      </div>
      <div className="card w-96 bg-base-200 shadow-xl flex justify-center items-center p-4  border-b-2 border-b-success">
        <div className="flex space-x-5">
          <div className="card-title ">Interview jobs</div>
          <div className="bg-success p-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <div className="text-success font-bold text-2xl">
          {loading ? <div className="loading"></div> : Interview}
        </div>
      </div>
      <div className="card w-96 bg-base-200 shadow-xl flex justify-center items-center p-4  border-b-2 border-b-error">
        <div className="flex space-x-5">
          <div className="card-title ">Interview jobs</div>
          <div className="bg-error p-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="text-error font-bold text-2xl">
          {loading ? <div className="loading"></div> : Declined}
        </div>
      </div>
    </div>
  );
};
export default JobStats;
