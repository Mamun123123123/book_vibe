import React from "react";
import bookimg from '../../assets/hero_img.jpg'
const Banner = () => {
  return (
    <div className="hero min-h-[70vh]  px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-6xl justify-between w-full">

        
        <img
          src={bookimg}
          className="max-w-sm w-full rounded-2xl shadow-2xl hover:scale-105 transition duration-300"
          alt="Books"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Books to freshen <br /> up your bookshelf
          </h1>

          <p className="mt-4 text-gray-500 max-w-md">
            Discover new books, track your reading journey, and build your
            personal library with ease.
          </p>

          <button className="mt-6 btn btn-primary px-6">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;