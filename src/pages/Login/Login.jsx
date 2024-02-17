import React, { useState } from "react";
import bgImg from "../../assets/image/halaman.jpeg";
import { FaGoogle } from "react-icons/fa6";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState("");
  const [loading, setLoading] = useState("");
  const Navigate = useNavigate();
  const {  setUserData   } = useContext(AppContext);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = () => {
    setLoading(true);
    const bodyPayload = {
      email: email,
      password: password,
    };
    // console.log(bodyPayload);
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      },
    };
    axios
      .post(
        "https://api-bootcamp.do.dibimbing.id/api/v1/login",
        bodyPayload,
        config
      )
      .then((respon) => {
        console.log(respon);
        Swal.fire({
          title: "Login Berhasil",
          icon: "succes",
          showConfirmButton: true,
        });
        setSucces("Login berhasil");
        const token = respon.data.token;
        setUserData(respon.data.user);
        localStorage.setItem("token", token);
        setLoading(false);
        Navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.message);
        Swal.fire({
          title: "Login Gagal",
          text: error.response.data.message,
          icon: "error",
          showConfirmButton: true,
        });
        setLoading(false);
      });
  };

  return (
    <div className=" w-full h-screen flex items-start">
      <div className=" relative w-1/2 h-full flex flex-col">
        <div className=" absolute top-[20%] left-[10%] flex flex-col">
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
              Login
            </h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="text"
              name="email"
              id="email"
              onChange={onChangeEmail}
              placeholder="Enter your email"
              className="w-full text-gray-700 py-4 my-2 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              onChange={onChangePassword}
              placeholder="Enter your Password"
              className="w-full text-gray-700 py-4 my-2 bg-transparent border-b border-gray-700 outline-none focus:first-letter:outline-none"
            />
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="w-full flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <p className="text-sm">Remember me for 30 days</p>
            </div>
            <p className="text-sm font-medium whitespace-normal cursor-pointer underline underline-offset-2">
              Forgot Password ?
            </p>
          </div>

          <div className="w-full flex flex-col my-4">
            <button
              className="w-full text-white my-2 bg-gray-700 rounded-md p-4 text-center flex items-center justify-center font-bold cursor-pointer"
              onClick={onSubmit}
              disabled={loading ? true : false}
            >
              {loading ? "loading...." : "Log in"}
            </button>
            {/* <Link to={'/register'}>
            <button className="w-full text-gray-700 my-2 bg-[#f5f5f5] border border-gray-700 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Register
            </button>
            </Link> */}
          </div>

          <div className="w-full flex items-center justify-center relative py-2">
            <div className="w-full h-[1px] bg-gray-700/40"></div>
            <p className="absolute text-lg text-gray-700/80 bg-[#f5f5f5] font-bold">
              or
            </p>
          </div>
          <Link to={"/register"}>
            <button className="w-full text-gray-700 my-2 bg-[#f5f5f5] border border-gray-700/40 font-semibold rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
              Register
            </button>
          </Link>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-black">
            Dont have acocount?
            <span className="font-semibold underline underline-offset-2 cursor-pointer">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
