import React from "react";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen mt-8">
        <div className="hero-content flex-col ">
          <div className="text-4xl font-bold text-center mt-8">Sign Up</div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-wide bg-[#682254] hover:bg-[#86216a] text-white">
                  Sign Up
                </button>
              </div>
              <div className="">
                <p>
                  Already have an account ?{" "}
                  <NavLink
                    className="text-lg font-bold text-[#ae2487]"
                    to={"/login"}
                  >
                    Login
                  </NavLink>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
