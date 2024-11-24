import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandDetails = () => {
    const brandInfo = useLoaderData();
    const { id } = useParams();

    const singleBrand = brandInfo.find((d)=> d._id ===id);
    console.log(singleBrand);

    return (
      <div className=" mt-[200px]">
        this is brand details page. {singleBrand.brand_name}
      </div>
    );
};

export default BrandDetails;