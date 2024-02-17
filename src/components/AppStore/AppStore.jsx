import React from "react";
import AppStoreImg from "../../assets/image/appStore.jpeg";
import PlayStoreImg from "../../assets/image/playStore.png";
import Gif from "../../assets/image/gift.gif";

const AppStore = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="300"
              className="space-y-6 max-w-xl mx-auto"
            >
              <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold dark:text-secondary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary my-2 font-[lemon]">
                Indonesian Food is Available for Android and IOS
              </h1>
              <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 h-[100px] my-2">
                <a href="#">
                  <img
                    src={PlayStoreImg}
                    alt="playstore"
                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px] "
                  />
                </a>
                <a href="#">
                  <img
                    src={AppStoreImg}
                    alt="playstore"
                    className="max-w-[150px] h-auto sm:max-w-[120px] md:max-w-[200px] rounded-md"
                  />
                </a>
              </div>
            </div>
            <div data-aos="zoom-in" data-aos-duration="300">
              <img
                src={Gif}
                alt="gif"
                className="max-w-[300px] mx-auto rounded-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppStore;
