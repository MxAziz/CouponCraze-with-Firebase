import React from "react";

const BrandsOnSell = ({ sell }) => {
  const { _id, isSaleOn, brand_logo, brand_name, coupons, category } = sell;
  return (
    <div className="">
      <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img className=" w-full h-[200px]" src={brand_logo} alt="Shoes" />
          </figure>
          <div className="card-body flex flex-col items-center">
            <h2 className="card-title font-bold">{brand_name}</h2>
            <p>Total Coupons: {coupons.length}</p>
            <p>Category: {category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsOnSell;
