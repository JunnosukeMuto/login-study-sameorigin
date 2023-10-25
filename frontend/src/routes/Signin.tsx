import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { FormEventHandler } from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex justify-center items-center">
      <div className="m-6 max-w-md flex-1">
        <Link to={`/`} className="btn btn-ghost btn-sm gap-2 mb-6 -ml-3">
          <ArrowLeftIcon className="h-4 w-4" />
          Back to home
        </Link>
        <h1 className="text-3xl font-bold mb-4">Sign in</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="label-text mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="input input-bordered mb-2"
          />
          <label htmlFor="password" className="label-text mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="input input-bordered mb-6"
          />
          <input type="submit" className="btn normal-case" value="Sign in" />
        </form>
      </div>
    </div>
  );
}
