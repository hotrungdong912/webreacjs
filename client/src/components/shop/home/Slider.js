import React, { Fragment, useEffect, useContext, useState } from "react";
import OrderSuccessMessage from "./OrderSuccessMessage";
import { HomeContext } from "./";
import { sliderImages } from "../../admin/dashboardAdmin/Action";
import { prevSlide, nextSlide } from "./Mixins";
import "./style.css";

const apiURL = process.env.REACT_APP_API_URL;

const Slider = (props) => {
  const { data, dispatch } = useContext(HomeContext);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    sliderImages(dispatch);
  }, []);

  return (
    <Fragment>
      <div className="relative mt-8 bg-white-500 border-2 Slide">
        {data.sliderImages.length > 0 ? (
          <>
          <div className="ImgContainer">
            <img
              className="w-full vh80 object-scale-down  "
              src={`${apiURL}/uploads/customize/${data.sliderImages[slide].slideImage}`}
              alt="sliderImage"
            />
          </div>
          <div className="InfoContainer">
          <h1 class="uppercase text-yellow-500 font-bold tracking-wider text-2xl">New Arrivals are here</h1>
            <h2 class="font-black text-black-700 leading-none tracking-wider mb-6 mt-3 text-2xl lg:text-2xl xl:text-2xl">The new arrival have, well, newly arrived.</h2>
            <p class="text-gray-600 font-roboto text-lg sm:w-2/3 lg:w-1/2">Check out the lasted options from our winter small-batch release while they're still in stok.</p>
              <a
                href="#shop"
               
                className=" cursor-pointer text-2xl  px-4 py-1 text-sm text-red-700 font-bold rounded-full border hover:text-white hover:bg-yellow-600 hover:border-transparent focus:outline-none focus:ring-2  focus:ring-offset-2"
              >
                Shop Now
              </a>
          </div>
          </>
          
        ) : (
          ""
        )}
        <svg
          onClick={(e) => prevSlide(data.sliderImages.length, slide, setSlide)}
          className={`z-10 absolute top-0 left-0 flex justify-end items-center box-border flex justify-center w-12 h-full text-gray-700  cursor-pointer hover:text-yellow-700`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      
        <svg
          onClick={(e) => nextSlide(data.sliderImages.length, slide, setSlide)}
          className={`z-10 absolute top-0 right-0 flex justify-start items-center box-border flex justify-center w-12 h-full text-gray-700 cursor-pointer hover:text-yellow-700`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>


      </div>
      <OrderSuccessMessage />
    </Fragment>
  );
};

export default Slider;
