import React, { useState } from "react";
import bgImg from "../../assets/image/halaman.jpeg";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const FoodRating = () => {
  const { id } = useParams();
  const [rating, setRating] = useState({
    rating: 0,
    review: "",
  });
  console.log(rating);
  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    const { name, value } = event.target;
    if ((name === "rating" && parseInt(value) > 5) || parseInt(value) < 0) {
      return;
    }
    setRating({
      ...rating,
      [name]: value,
    });
  };
  console.log("rating", rating);
  const Navigate = useNavigate();

  const handleSubmit = () => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .post(
        `https://api-bootcamp.do.dibimbing.id/api/v1/rate-food/${id}`,
        { ...rating, rating: parseInt(rating.rating) },
        config
      )
      .then((respon) => {
        console.log(respon);
        Navigate(`/food-by-id/${id}`);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold font-[lemon]">
            Welcome to
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Nusantara Food of Indonesia
            </span>
          </h1>
          <p className="text-white text-xl font-bold mt-9">
            The Tasty is Really Great
          </p>
        </div>
        <img src={bgImg} alt="" className="w-full h-full object-cover " />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
       
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl text-gray-700 font-semibold mb-2 font-[lemon] mt-20">
              Give Star
            </h3>
            <p className="text-base mb-2">
              Welcome Back! Please give your star.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="number"
              name="rating"
              id="rating"
              value={rating.rating}
              onChange={handleChange}
              placeholder="Rating"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none mt-9"
            />
            <input
              type="text"
              name="review"
              id="review"
              value={rating.review}
              onChange={handleChange}
              placeholder="Review"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between"></div>

          <div className="w-full flex flex-col my-4">
            <button
              onClick={handleSubmit}
              className="w-full text-white my-2 bg-gray-700 border border-gray-700 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer mt-8"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black font-[lemon] mt-11">
            Thanks for your star
          </p>
        </div>
        <p className="text-sm font-normal text-black font-[lemon] mb-52">
          Enjoy your day
        </p>
      </div>
    </div>
  );
};

export default FoodRating;
