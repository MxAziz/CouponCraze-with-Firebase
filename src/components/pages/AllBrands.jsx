import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AllBrands = ({ allBrands }) => {

    // console.log(allBrands);
    const { _id, brand_logo, brand_name, description, isSaleOn, rating, } = allBrands;

    useEffect(() => {
        AOS.init({
          duration: 1000,
          // once: true,
        });
    },[])


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
            <div className="card-actions justify-between">
              <button className="btn bg-[#6e2d5c] hover:bg-[#952876] text-white">
                View Coupons
              </button>
              <div className="">
                {isSaleOn && (
                  <div>
                    <h1
                      data-aos="bounce"
                      style={{
                        color: "#952876",
                        fontSize: "2rem",
                        textAlign: "center",
                        // margin: "50px 0",
                      }}
                      className=" text-2xl font-bold"
                    >
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