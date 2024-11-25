import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import { useState } from "react";
import copy from "copy-to-clipboard";
import { toast } from 'react-toastify';

const BrandDetails = () => {
    const brandInfo = useLoaderData();
  const { id } = useParams();
  const [text, setText] = useState("");

  const handleCopy = (couponCode) => {
    copy(couponCode);
    toast.success("Coupon code copied to clipboard!");
  };

  // use now btn functionality
  const handleUseNow = (shopLink) => {
    if (shopLink) {
      window.open(shopLink, "_blank");
    } else {
      alert("No shop link available!");
    }
  };

  const singleBrand = brandInfo.find((d) => d._id === id);

  const { brand_logo, brand_name, description, rating, shop_link, coupons } =
    singleBrand;

    return (
      <div className=" mt-[150px] w-4/5 mx-auto text-center">
        <img className=" h-60 mx-auto" src={brand_logo} alt="" />
        <h1 className=" text-3xl font-bold mt-4">{brand_name}</h1>
        <div className="">
          <p className=" font-semibold text-xl mb-4">Rating: {rating}</p>
        </div>

        {/* coupons card */}
        <div
          className={`md:w-[610px] grid grid-cols-1 ${
            coupons[1] && "md:grid-cols-2"
          } mx-auto mb-20`}
        >
          <div className="card bg-[#82316b] mx-auto text-white mb-4 md:mb-0 w-72">
            <div className="card-body text-left">
              <h2 className="card-title">{coupons[0].description}</h2>
              <p>Expiry Date: {coupons[0].expiry_date}</p>
              <p>Coupon Type : {coupons[0].coupon_type}</p>
              <p>Condition: {coupons[0].condition}</p>
              <div className="card-actions justify-between">
                <button
                  onClick={() => handleCopy(coupons[0].coupon_code)}
                  className="btn"
                >
                  Copy code
                </button>
                <button className="btn" onClick={() => handleUseNow(shop_link)}>
                  Use Now
                </button>
              </div>
            </div>
          </div>
          {coupons[1] && (
            <>
              <div className="card bg-[#82316b] mx-auto text-white w-72">
                <div className="card-body text-left">
                  <h2 className="card-title">{coupons[1].description}</h2>
                  <p>Expiry Date: {coupons[1].expiry_date}</p>
                  <p>Coupon Type : {coupons[1].coupon_type}</p>
                  <p>Condition: {coupons[1].condition}</p>
                  <div className="card-actions justify-between">
                    <button
                      onClick={() => handleCopy(coupons[1].coupon_code)}
                      className="btn"
                    >
                      Copy code
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleUseNow(shop_link)}
                    >
                      Use Now
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {/* ends */}
      </div>
    );
};

export default BrandDetails;