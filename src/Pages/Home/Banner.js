import React from 'react';
import banner from '../../Assets/Images/banner.jpg'

const Banner = () => {
    return (
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={banner} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://placeimg.com/800/200/arch" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start">
          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-title ">Total Page Likes</div>
              <div className="stat-value text-primary">89,400</div>
              <div className="stat-desc">31% more than last month</div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-title ">Total Page Views</div>
              <div className="stat-value text-secondary">189,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
          <div className="stats shadow">
            <div className="stat text-center">
              <div className="stat-title ">Total Customer Reviews</div>
              <div className="stat-value text-accent">9,400</div>
              <div className="stat-desc">11% more than last month</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;