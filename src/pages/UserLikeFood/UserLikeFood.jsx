import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const UserLikeFood = () => {
  const { userData } = useContext(AppContext);
  const [userLike, setUserLike] = useState([]);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserLikeFood();
  }, []);

  const getUserLikeFood = () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get(`https://api-bootcamp.do.dibimbing.id/api/v1/like-foods`, config)
      .then((respon) => {
        console.log(respon);
        setUserLike(respon.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  if (loading) {
    return <p className="font-[lemon] text-xl mb-5 py-8 mx-8">Loading...</p>; // 
  }

  return (
    <div className="bg-gray-700  dark:dark:bg-gray-600  duration-200 dark:text-slate-400 min-h-screen">
      <Navbar userRole={userData.role} />
      <h1
        data-aos="zoom-in"
        data-aos-duration="300"
        className="py-20 font-[lemon] text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary text-center dark:text-secondary mb-11 mt-[10px] "
      >
        User Like Food
      </h1>
      <div className="container grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 ">
        {userLike.map((item) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            key={item.id}
            className="w-[380px] h-[250px] group rounded-2xl bg-gray-300 dark:bg-gray-700  hover:text-white  duration-300 px-4 shadow-xl mb-20 hover:scale-105 mt-3"
          >
            <div>
              <img
                src={item.imageUrl}
                alt=""
                className="w-[200px] h-[200px] rounded-full mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-200 pb-18 mt-[-20px]"
              />
            </div>
            <div className="justify-start">
              <h1 className="text-lg dark:text-white font-[lemon] text-gray-500 mb-2 mx-2 mt-[-15px]">
                {item.name}
              </h1>
            </div>

            <Link to={`/food-by-id/${item.id}`}>
              <button className="text-gray-100 font-semibold rounded-full w-[70px] bg-gray-500">
                Detail
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserLikeFood;
