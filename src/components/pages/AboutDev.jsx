import React from 'react';

const AboutDev = () => {
    return (
      <div className="bg-gray-100 pb-6 mt-[150px]">
        {/* container */}
        <div className="text-center space-y-4 bg-[#542547] text-white py-8">
          <h1 className="text-4xl font-bold">About</h1>
          <p className="font-bold">Muhammad Aziz | Nov 21, 2024 | 1 min read</p>
          <p>
            Tired of missing out on incredible deals? CouponCraze is here to
            revolutionize the way you shop. Our app is your personal <br />{" "}
            savings assistant, helping you find and organize coupons from your
            favorite stores and brands
          </p>
        </div>

        <div className=" w-11/12 mx-auto my-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className=' text-xl text-gray-700'>
            Feel free to communicate with us at any time. Whether you are
            unraveling a mystery or simply extending greetings, <br /> we are
            attentive. While we cannot guarantee quantum speed, we endeavor to
            respond to you promptly.
          </p>

          <p className="mt-4 font-bold">
            Email:{" "}
            <small className="text-lg hover:text-[#8c2d71] hover:underline">
              contact@couponcraze.com
            </small>
          </p>
        </div>

        <div className="w-11/12 mx-auto text-center">
          <h1 className="text-4xl font-bold mb-5">Meet The Founder</h1>
          <img
            className="h-[450px] md:w-2/4 rounded-xl mx-auto"
            src="/img/founder.jpg"
            alt=""
          />

          <div className=" space-y-4 mt-4">
            <div className="">
              <h3 className="font-semibold">Hello,</h3>
              <p>
                I’m <small className="font-bold text-lg">Muhammad Aziz</small>,
                a 20-year-old on a mission to bring his ideas to life.
                <br /> I am also an open source advocate, follow me on github
                <a
                  className="font-bold hover:text-[#8c2d71] hover:underline"
                  href="https://github.com/MxAziz"
                >
                  https://github.com/MxAziz
                </a>
              </p>
            </div>

            <p className="font-bold">
              Email:{" "}
              <a
                className=" hover:text-[#8c2d71] hover:underline"
                href="mailto:hereabdulaziz@gail.com"
              >
                hereabdulaziz@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
};

export default AboutDev;