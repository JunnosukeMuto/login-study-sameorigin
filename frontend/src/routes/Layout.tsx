import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  const [response, setResponse] = useState<null | { username: string }>(null);
  async function getHello() {
    await axios
      .get("http://localhost/api/data")
      .then((res) => {
        setResponse(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  async function logout() {
    await axios
      .get("http://localhost/api/logout")
      .then((res) => {
        setResponse(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate("login");
  }
  useEffect(() => {
    getHello();
  }, []);
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
            {response ? (
              <>
                <div className="mr-6">{response.username}</div>
                <button
                  onClick={logout}
                  className="btn bg-base-200 normal-case"
                >
                  Log out
                </button>
              </>
            ) : (
              <Link to={`login`} className="btn bg-base-200 normal-case">
                Log in
              </Link>
            )}
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
