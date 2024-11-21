import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueeCard = ({ mCard }) => {

    console.log(mCard);

    const { brand_name, brand_logo } = mCard;

    return (
      <div>
        <div className=" ml-8">
              <img className="h-[150px] w-[200px]" src={brand_logo} alt="" />
              <h3 className=' text-xl font-bold text-center'>{brand_name}</h3>
        </div>
      </div>
    );
};

export default MarqueeCard;