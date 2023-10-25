import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="h-screen">
        <div className="navbar sticky flex bg-opacity-90 backdrop-blur">
          <div className="flex-1">
            <Link to={`/`} className="btn btn-ghost normal-case text-xl">
              Login Study
            </Link>
          </div>
          <div>
            <Link to={`signin`} className="btn bg-base-200 normal-case">
              Sign in
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
