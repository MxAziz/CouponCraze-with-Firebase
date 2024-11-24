import { updateProfile } from 'firebase/auth';
import React from 'react';
import auth from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const navigate = useNavigate();

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);

        const Profile = {
          displayName: name,
          photoURL: photo,
        };

        updateProfile(auth.currentUser, Profile)
            .then(() => {
                console.log('profile update successful');
                navigate('/profile');
                toast.success('Your profile is up to date !')

            })
            .catch(error => {
            console.log(error.message);
        })


    }

    return (
      <div className="hero bg-base-200 min-h-screen mt-10">
        <div className="hero-content flex-col">
          <div className="text-4xl font-bold text-center mb-6">
            Update Your Profile
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleUpdateProfile} className="card-body">
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
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-wide bg-[#682254] hover:bg-[#86216a] text-white">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default UpdateUser;