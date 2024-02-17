import React from "react";
import { FaHeart } from "react-icons/fa6";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileButton,
  FaMobileScreenButton,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left dark:text-secondary mb-3 font-[lemon] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Indonesian Food
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
                similique nihil laborum alias optio tenetur temporibus numquam
                accusantium assumenda tempore.
              </p>
              <br />
              <div className="flex items-center gap-3 mt-6">
                <FaLocationArrow />
                <p>Indonesia, Nusantara</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileScreenButton />
                <p>+92 632546121</p>
              </div>
              {/* social handle */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
              <div>
                <div className="py-8 px-4 ">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-4 font-[lemon] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-4 font-[lemon] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-4 font-[lemon] bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Login</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center py-10 p-10 border-t-2 border-gray-300/50">
            <div className="flex items-center justify-center">
              <span className="font-bold  text-gray-700 dark:text-gray-400">
                @copyright 2023 All rights reserved || Made with{" "}
              </span>
              <FaHeart className="text-red-500 mx-1" />
              <span className="font-bold  text-gray-700 dark:text-gray-400">
                {" "}
                by Sumini
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
