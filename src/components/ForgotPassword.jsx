import React, { useEffect, useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase.config";
import { toast } from  "react-toastify";

const ForgotPassword = () => {
  const emailRef = useRef() ;

  useEffect(() => {
    const savedEmail = localStorage.getItem("forgotEmail");
    if (savedEmail) {
      emailRef.current.value = savedEmail  ;
    }
  }, []);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    const email =  emailRef.current.value;

    if (!email) {
      toast.error("Please provide a valid email address");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Please check your email.");
        localStorage.removeItem("forgotEmail");
        window.location.href = "https://mail.google.com/";
      })

      .catch((error) => {
        toast.error("Failed to send reset email. ", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen mt-10">
      <div className="hero-content flex-col">
        <div className="text-4xl font-bold text-center mb-6">
          Reset Password
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handlePasswordReset} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-wide bg-[#682254] hover:bg-[#86216a] text-white">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
