import React from "react";
import Slider from "./Slider";
import { useLoaderData } from "react-router-dom";
import Marquee from "react-fast-marquee";
import MarqueeCard from "./MarqueeCard";
import BrandsOnSell from "./BrandsOnSell";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <div className="w-11/12 mx-auto">
        <Slider></Slider>
      </div>

      {/* top brands */}
      <div className="">
        <h1 className="text-4xl font-bold text-center my-10">Top Brands</h1>
        <Marquee pauseOnHover="true" speed={100}>
          <div className="flex space-x-8 w-full">
            {data.map((mCard) => (
              <MarqueeCard mCard={mCard}></MarqueeCard>
            ))}
          </div>
        </Marquee>
      </div>

      {/* Brands on Sell */}
      <div className=" mb-10 w-11/12 mx-auto">
        <h1 className="text-4xl font-bold text-center my-10">Brands on Sell</h1>
        <div className=" grid grid-cols-1 mx-auto md:grid-cols-3 lg:grid-cols-3 gap-8">
          {data.map(
            (sell) => sell.isSaleOn && <BrandsOnSell sell={sell}></BrandsOnSell>
          )}
        </div>
      </div>

      {/* extra section  */}
      <div className="flex gap-8 p-12 justify-center items-center ">
        <div className="">
          <h3 className=" text-4xl font-semibold border-l-8 border-[#9b287b] pl-4">
            Seeking great deals? Over 10,000 offers listed!
          </h3>
          <p className="text-2xl mt-4">
            Find the latest promo codes, coupons and discounts from leading
            brands and stores.
          </p>
        </div>
        <img src="https://www.collectoffers.com/images/img1.png" />
      </div>
      {/* extra section 01 */}
      <div className="flex gap-8 p-12 justify-center items-center bg-[#F9F9F9]">
        <img src="https://www.collectoffers.com/images/img2.png" alt="" />
        <div className="">
          <h3 className=" text-4xl font-semibold border-l-8 border-[#9b287b] pl-4">
            Great offers from your favourite stores
          </h3>
          <p className="text-2xl mt-4">
            You will never miss a single online deal with CollectOffers. Our
            store and brand pages feature top discounts and exclusives deals.
          </p>
        </div>
      </div>
      {/* extra section 02 */}
      <div className="flex gap-8 p-12 justify-center items-center ">
        <div className="">
          <h3 className=" text-4xl font-semibold border-l-8 border-[#9b287b] pl-4">
            Apply the coupon to your basket and save money on your order!
          </h3>
          <p className="text-2xl mt-4">
            Simply click to reveal, visit the online store and apply your promo
            code to your basket.
          </p>
        </div>
        <img src="https://www.collectoffers.com/images/img3.png" />
      </div>
    </div>
  );
};

export default Home;
