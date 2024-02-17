import React, { useContext, useState } from "react";
import bgImg from "../../assets/image/halaman.jpeg";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AppContext } from "../../App";

const UpdateFoodById = () => {
  const { userData } = useContext(AppContext);
  const [fileImage, setFileImage] = useState(null);
  const { id } = useParams();
  const [update, setUpdate] = useState({
    name: "",
    description: "",
    ingredients: "",
  });
  console.log(update);

  const handleImage = (event) => {
    setFileImage(event.target.files[0]);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdate((prevUpdate) => ({
      ...prevUpdate,
      [name]: value,
    }));
  };

  const Navigate = useNavigate();

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      if (!fileImage) {
        throw new Error("Please select an image to upload.");
      }
      const formData = new FormData();
      formData.append("image", fileImage);
      const imageUploadResponse = await axios.post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/upload-image",
        formData,
        {
          maxBodyLength: Infinity,
          headers: {
            "Content-Type": "multipart/form-data",
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const imageUrl = imageUploadResponse.data.url;
      await axios
        .post(
          `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${id}`,
          { ...update, ingredients: update.ingredients.split(","), imageUrl },
          config
        )
        .then((respon) => {
          console.log(respon);
          Navigate(`/food-by-id/${id}`);
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire({
            title: "Update Menu Gagal",
            text:
              error?.response?.data?.errors[0]?.message ||
              error?.message ||
              "Error",
            icon: "error",
            showConfirmButton: true,
          });
        });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Update Menu Gagal",
        text: error?.response?.data?.message || error?.message || "Error",
        icon: "error",
        showConfirmButton: true,
      });
    }
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
          <p className="text-white text-xl font-bold ">
            The Tasty is Really Great
          </p>
        </div>
        <img src={bgImg} alt="" className="w-full h-full object-cover " />
      </div>

      <div className="w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl text-gray-700 font-semibold  font-[lemon] mt-11">
              Update your Food
            </h3>
            <p className="text-base mb-10 mt-[30] pt-4">
              Welcome Back! Please update your favorite food.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              value={update.name}
              placeholder="Enter Name of Food "
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="text"
              name="description"
              id="description"
              value={update.description}
              onChange={handleChange}
              placeholder="Description"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="file"
              name="image"
              id="image"
              // value={update.imageUrl}
              onChange={handleImage}
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="text"
              name="ingredients"
              id="ingredients"
              value={update.ingredients}
              onChange={handleChange}
              placeholder="Ingredients (comma-separated)"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
          </div>
          <div className="w-full flex flex-col my-4">
            <button
              onClick={() => handleSubmit(id)}
              className="w-full text-white my-2 mt-12 bg-gray-700 border border-gray-700 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer "
            >
              Update
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black font-[lemon] -mt-[-40] pb-[50px]">
            Thanks forr you visit, enjoy your meal...
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateFoodById;
