import React from "react";
import Food1 from "../../assets/image/rendang.jpeg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px] py-16">
        <div>
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
              {/* image section */}
              <div>
                <img
                  src={Food1}
                  alt=""
                  className="rounded-full w-[250px] h-[250px]  mx-auto drop-shadow-[-10px_10px_12px] "
                />
              </div>
              {/* text-content-section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-[lemon]">
                  Makanan Nusantara
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5 dark:text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam nobis obcaecati reiciendis possimus fugit eius ipsa
                  optio
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                  dicta totam commodi excepturi aliquam id molestiae saepe
                  omnis, enim veniam nostrum? Dolorum laboriosam reiciendis
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-gradient-to-r from-primary to-secondary dark:bg-secondary" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-gradient-to-r from-primary to-secondary dark:bg-secondary" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-gradient-to-r from-primary to-secondary dark:bg-secondary" />
                  </div>
                </div>
                <div>
                  <Link to={"/new-menu"}>
                    <button className="bg-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200">
                      Create Menu
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
