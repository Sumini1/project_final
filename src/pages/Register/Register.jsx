import React, { useState } from "react";
import bgImg from "../../assets/image/halaman.jpeg";
import Swal from "sweetalert2";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [fileImage, setFileImage] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
    role: "",
    phoneNumber: "",
  });

  const Navigate = useNavigate();

  const handleImage = (event) => {
    setFileImage(event.target.files[0]);
  };

  const handleChange = (event) => {
    // cara distructuring
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log("form", form);

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
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

      const profilePictureUrl = imageUploadResponse.data.url;
      await axios
        .post(
          "https://api-bootcamp.do.dibimbing.id/api/v1/register",
          { ...form, profilePictureUrl },
          config
        )
        .then((respon) => {
          console.log(respon);
          Navigate("/login");
        })
        .catch((error) => {
          console.log(error.response);
          Swal.fire({
            title: "Register Gagal",
            text: error.response.data.message,
            icon: "error",
            showConfirmButton: true,
          });
        });
    } catch (error) {
      console.log(error);
      
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
        <h1 className="w-full text-xl max-w-[500px] text-gray-700 font-semibold mx-auto mb-4 font-[lemon]">
          Favorit Food
        </h1>

        <div className="w-full flex flex-col max-w-[500px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl text-gray-700 font-semibold mb-2 font-[lemon]">
              Register
            </h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              placeholder="Name"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              placeholder="Email"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              placeholder="Password"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="password"
              name="passwordRepeat"
              id="passwordRepeat"
              onChange={handleChange}
              placeholder="Repeat Password"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="text"
              name="role"
              id="role"
              onChange={handleChange}
              placeholder="Role"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="file"
              name="profilePictureUrl"
              id="profilePictureUrl"
              onChange={handleImage}
              placeholder="Image Url"
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              onChange={handleChange}
              placeholder=".........."
              className="w-full text-gray-700 py-1 my-1 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              {/* <p className="text-sm">Remember me for 30 days</p> */}
            </div>
            {/* <p className="text-sm font-medium whitespace-normal cursor-pointer underline underline-offset-2">
              Forgot Password ?
            </p> */}
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              onClick={handleSubmit}
              className="w-full text-white my-2 bg-gray-700 border border-gray-700 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
            >
              Register
            </button>
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-gray-700/40"></div>
            <p className="absolute text-lg text-gray-700/80 bg-[#f5f5f5] font-bold">
              or
            </p>
          </div>
          <Link to={"/login"}>
            <button className="w-full text-gray-700 my-2 bg-[#f5f5f5] border border-gray-700/40 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Login
            </button>
          </Link>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm  text-black font-semibold font-[lemon]">
            Thanks for your visit
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
