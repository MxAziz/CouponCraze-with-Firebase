import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import auth from "../firebase.config";

const SignUp = () => {

  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Regular expression:
  const passwordReg = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photo, email, password);

    // reset error and status.
    setErrorMessage('');

      // password validation
    if (!passwordReg.test(password)) {
      toast.error(
        "Must have an Uppercase, a Lowercase and Length must be at least 6 character "
      );
      return;
    }

    createUser(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        navigate('/');
        toast.success('Sign Up is successful');

        // update user profile
        const profile = {
          photoURL: photo,
          displayName: name,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            console.log('user profile updated');
          })
          .catch(error => console.log('user profile update error',error));

      })
      .catch(error => {
        console.log(error.message);
        setErrorMessage(error.message);
        toast.error(`${error.message}`);
        // toast.error("Invalid Email or Password");
      })
  }
  const handleGoogleSignIn =()=> {
    signInWithGoogle()
      .then(result => {
      console.log(result.user);
        navigate('/')
        toast.success('Sign up with Google is successful');
      })
      .catch(error => {
        console.log(error.message);
    })
  }

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen mt-8">
        <div className="hero-content flex-col ">
          <div className="text-4xl font-bold text-center ">Sign Up</div>
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
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
                  placeholder="Photo-URL"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered "
                  required
                />
              </div>
              <div className="form-control mt-2 ">
                <button className="btn btn-wide  bg-[#682254] hover:bg-[#86216a] text-white">
                  Sign Up
                </button>
              </div>
              <div className="divider">OR</div>
              <div className="">
                <button
                  onClick={handleGoogleSignIn}
                  className="btn btn-wide bg-[#682254] hover:bg-[#86216a] text-white"
                >
                  Sign up with Google
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
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute left-64 top-[345px]"
            >
              {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </button>
            {errorMessage && (
              <p className=" text-center font-semibold text-red-600 mb-2">
                {errorMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
