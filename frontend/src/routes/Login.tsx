import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { FormEventHandler } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    await axios
      .post(
        "http://localhost/api/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.login) {
          navigate("/");
        } else {
          alert("login failed...");
        }
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="m-6 max-w-md flex-1">
        <Link to={`/`} className="btn btn-ghost btn-sm gap-2 mb-6 -ml-3">
          <ArrowLeftIcon className="h-4 w-4" />
          Back to home
        </Link>
        <h1 className="text-3xl font-bold mb-4">Log in</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="label-text mb-1">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="input input-bordered mb-2"
          />
          <label htmlFor="password" className="label-text mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="input input-bordered mb-6"
          />
          <input type="submit" className="btn normal-case" value="Log in" />
        </form>
      </div>
    </div>
  );
}
