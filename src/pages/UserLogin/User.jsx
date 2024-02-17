
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const UserLogin = () => {
  const { userData } = useContext(AppContext);
  const [userLogin, setUserLogin] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserLogin();
  }, []);

  const getUserLogin = () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get(`https://api-bootcamp.do.dibimbing.id/api/v1/user`, config)
      .then((respon) => {
        console.log(respon);
        setUserLogin(respon.data.user);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  if (loading) {
    return <p className="font-[lemon] text-xl mb-5 py-8 mx-8">Loading...</p>; // Tampilkan pesan loading atau spinner
  }
  console.log(userLogin);

  const handleUpdateProfile = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to update your profile?"
    );
    if (isConfirmed) {
      window.location.href = "/update-profile";
    } else {
      window.location.href = "/user-login";
    }
  };
  return (
    <div className="bg-gray-600 min-h-screen">
      <Navbar userRole={userData.role} />

      <h1
        data-aos="zoom-in"
        data-aos-duration="300"
        className="text-center  bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-[lemon] py-10 text-3xl "
      >
        User Login
      </h1>
      <div
        data-aos="zoom-in"
        data-aos-duration="300"
        className="grid grid-cols-1 max-w-[700px] mx-auto gap-6"
      >
        <div className="flex flex-col justify-center gap-4 text-start mx-4 shadow-lg p-4  rounded-3xl dark:bg-gray-700 bg-gray-100 relative group dark:hover:text-white  group-hover:text-white">
          <img
            src={userLogin.profilePictureUrl}
            alt=""
            className="w-[300px] h-[300px] rounded-full block mx-auto hover:scale-110 hover:rotate-6 duration-200 mb-5"
          />
          <div>
            <h1 className="text-xl mx-20 font-bold text-gray-500  dark:hover:text-white dark:text-white font-[lemon]">
              {userLogin.name}
            </h1>
            <p className="text-gray-500 text-sm mx-20 dark:hover:text-white dark:text-white font-serif font-semibold">
              {userLogin.role}
            </p>
            <p className="text-gray-500 text-sm mx-20 dark:hover:text-white dark:text-white font-serif font-semibold">
              {userLogin.phoneNumber}
            </p>
            <div className="flex justify-between">
              <p className="text-gray-500 text-sm mx-20 dark:hover:text-white dark:text-white font-serif font-semibold ">
                {userLogin.email}
              </p>
              <Link to={"/update-profile"}>
                <button
                  onClick={handleUpdateProfile}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 mx-11 mb-"
                >
                  Update
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;