import React from "react";
import Slider from "react-slick";
import org1 from "../../assets/image/cinta.jpeg";
import org2 from "../../assets/image/cinta1.jpeg";
import org3 from "../../assets/image/sumini1.jpeg";

const testimonialData = [
  {
    id: 1,
    name: "Cinta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis minus commodi cumque cum delectus! ",
    img: org1,
  },
  {
    id: 2,
    name: "Rindu",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis minus commodi cumque cum delectus! ",
    img: org2,
  },
  {
    id: 3,
    name: "Sumini",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius blanditiis minus commodi cumque cum delectus! ",
    img: org3,
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-11">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary py-6 font-[lemon]">
              Testimonial
            </h1>
            <p className="text-xs text-gray-400 dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sapiente, ipsa est corporis dicta iste magni aspernatur quis
              perspiciatis a molestiae.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6 group  dark:text-white ">
                    <div className="flex flex-col justify-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-700 bg-gray-100 relative group dark:hover:text-white  group-hover:text-white">
                      <img
                        src={img}
                        alt=""
                        className="w-[200px] h-[200px] rounded-full block mx-auto"
                      />
                      <p className="text-gray-500 text-sm dark:hover:text-white dark:text-white">
                        {text}
                      </p>
                      <h1 className="text-xl font-bold text-secondary hover:text-white dark:text-white font-[lemon]">
                        {name}
                      </h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0 my-20 dark:text-white">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
