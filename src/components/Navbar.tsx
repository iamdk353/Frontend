import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 px-10 space-x-5">
      <div className=" flex-1">
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer"
              className="btn btn-primary drawer-button"
            >
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              <li>
                <Link to=""> Add a job</Link>
              </li>
              <li>
                <Link to="alljobs">All jobs</Link>
              </li>
              <li>
                <Link to="stats">Stats</Link>
              </li>
              <li>
                <Link to="profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-5">
          <div className="size-10 bg-primary text-2xl font-semibold flex justify-center items-center rounded-md">
            J
          </div>
          <a className=" text-xl">JOBSTAR</a>
        </div>
      </div>
      <div className="flex-none gap-2"></div>
    </div>
  );
};
export default Navbar;
