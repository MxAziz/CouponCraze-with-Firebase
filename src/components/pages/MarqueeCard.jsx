import React from 'react';
import { NavLink } from 'react-router-dom';

const MarqueeCard = ({ mCard }) => {

    const { brand_name, brand_logo } = mCard;

    return (
      <NavLink to={'/brands'}>
        <div className=" ml-8">
              <img className="h-[150px] w-[200px]" src={brand_logo} alt="" />
              <h3 className=' text-xl font-bold text-center'>{brand_name}</h3>
        </div>
      </NavLink>
    );
};

export default MarqueeCard;