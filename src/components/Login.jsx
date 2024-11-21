import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-4xl font-bold text-center mt-4">Login</div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-wide bg-[#682254] hover:bg-[#86216a] text-white">
                    Login
                  </button>
                </div>
                <div className="">
                  <p>
                    New to this website ?{" "}
                    <NavLink
                      className="text-lg font-bold text-[#ae2487]"
                      to={"/signup"}
                    >
                      Sign Up
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

export default Login;