import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Great service! They repaired my air conditioner quickly and
          efficiently. Highly recommend their expertise.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Vikranth</h6>
            <p className="section__description">Satisfied Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I had a great experience with their TV installation service. The
          technicians were professional and the results were excellent.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Uthika</h6>
            <p className="section__description">Happy Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          I am very pleased with their refrigerator repair service. The
          technician arrived on time and fixed the issue efficiently. Highly
          recommended.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Vidhya Jhonson</h6>
            <p className="section__description">Satisfied Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Their washing machine repair service was outstanding. The technician
          was knowledgeable and fixed the problem effectively. Highly
          recommend their services.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Tamililarsi</h6>
            <p className="section__description">Happy Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
