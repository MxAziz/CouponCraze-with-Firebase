import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Brands from './Brands';
import { AuthContext } from '../../provider/AuthProvider';

import "animate.css";


const AllBrands = ({ allBrands }) => {

  const { user } = useContext(AuthContext);

    const { _id, brand_logo, brand_name, description, isSaleOn, rating, } = allBrands;


    return (
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <figure>
            <img className=" w-full h-[200px]" src={brand_logo} alt="Shoes" />
          </figure>
          <div className="card-body text-center">
            <div className=" flex justify-between items-center">
              <h2 className="card-title text-2xl font-bold">{brand_name}</h2>
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <p>{description}</p>
            <div className="card-actions justify-between mt-4">
              <Link
                to={user ? `/brands/${_id}` : "/login"}
                className="btn bg-[#82316b] hover:bg-[#952876] text-white"
              >
                View Coupons
              </Link>
              <div className="">
                {isSaleOn && (
                  <div>
                    <h1 className="animate__animated animate__bounce text-2xl font-bold">
                      sale is on !
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );

};

export default AllBrands;