import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllBrands from './AllBrands';

const Brands = () => {

    const brandsItem = useLoaderData();
    // console.log(brandsItem);


    return (
      <div className="mt-[110px]">
        <h1 className="text-4xl font-bold text-center">All Brands</h1>
        <div className=" w-11/12 mx-auto mt-6">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info md:w-full max-w-xs"
          />
          <button className="btn bg-[#6e2d5c] hover:bg-[#952876] text-white">Search</button>
            </div>

            {/* all brands card */}
            <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-10">
                {
                    brandsItem.map(allBrands => <AllBrands key={allBrands._id} allBrands={allBrands}></AllBrands>)
                }

            </div>
      </div>
    );
};

export default Brands;