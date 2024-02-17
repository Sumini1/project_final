import React from "react";
import Img2 from "../../assets/image/bakso.jpeg";
import Img3 from "../../assets/image/rendang.jpeg";
import Img4 from "../../assets/image/sate.jpeg";

const ServceData = [
  {
    id: 1,
    img: Img2,
    name: "Bakso",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptatem magni accusamus omnis harum tempore.",
  },
  {
    id: 2,
    img: Img3,
    name: "Rendang",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptatem magni accusamus omnis harum tempore.",
  },
  {
    id: 3,
    img: Img4,
    name: "Sate",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo voluptatem magni accusamus omnis harum tempore.",
  },
];

const Services = () => {
  return (
    <div className="py-10 bg-gray-100 dark:bg-gray-800">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary py-6 font-[lemon]">
            Services
          </h1>
          <p className="mb-6 dark:hover:text-white dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente,
            ipsa est corporis dicta iste magni aspernatur quis perspiciatis a
            molestiae.
          </p>
        </div>
        {/* Card Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-16 md:grid-cols-3 md:gap-5  place-items-center ">
            {ServceData.map(({ id, img, name, description }) => {
              return (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="300"
                  key={id}
                  className="w-[350px] h-[250px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary duration-300 px-4 shadow-xl"
                >
                  <div className="h-[100px] mx-7 mb-6 px-7">
                    <img
                      src={img}
                      alt=""
                      className="rounded-full w-[200px] h-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-200 pb-18 "
                    />
                  </div>
                  <div className="my-16 text-balance">
                    <h1 className="text-xl font-bold dark:text-white font-[lemon] text-gray-500">
                      {name}
                    </h1>
                    <p className="text-gray-500 text-sm line-clamp-2 group-hover:text-white duration-300 dark:text-white">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
