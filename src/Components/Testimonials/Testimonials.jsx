import Slider from "react-slick";
import "./Testimonials.css";
import { clients } from "../../sources";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
const Testimonials = () => {
  const ref = useRef(null);
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    puseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    response: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  return (
    <section id="Testimonials">
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1">
            <span className="gradient-text">گواهینامه ها</span>
          </h1>
          <h4 className="sub-title muted">کارفرما های من چی میگن؟</h4>
        </div>
        <Slider className="Testimonials-container" {...settings} ref={ref}>
          {clients.map((list, index) => (
            <>
              <div className="flex" key={index}>
                <div className="details">
                  <h3 className="name">{list.name}</h3>
                  <small className="muted">مدیر اجرایی شرکت دیجیکالا</small>
                </div>
                <div className="profile">
                  <img src={list.image} alt={list.name} />
                </div>
              </div>
              <p className="p muted content">{list.review}</p>
              <div className="stars-container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </>
          ))}
        </Slider>

        <div className="flex-center buttons-container">
          <button
            className="flex-center btn"
            onClick={() => ref.current.slickNext()}
          >
            <FaLongArrowAltRight />
          </button>
          <button
            className="flex-center btn"
            onClick={() => ref.current.slickPrev()}
          >
            <FaLongArrowAltLeft />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
