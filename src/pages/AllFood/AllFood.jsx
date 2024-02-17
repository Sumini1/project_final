import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const AllFood = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userData } = useContext(AppContext);

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods`, config)
      .then((respon) => {
        console.log(respon);
        setMenu(respon.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this food?"
    );

    if (isConfirmed) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      axios
        .delete(
          `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`,
          config
        )
        .then((respon) => {
          console.log(respon);
          getMenu();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="bg-gray-700 dark:bg-gray-600 dark:text-slate-400">
      <Navbar className="bg-[#8FBC8F]"  userRole={userData.role}/>

      <h1 className="py-20 text-5xl text-center dark:text-secondary mb-10 mt-[-30px] font-[lemon]">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          List All Food
        </span>
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-5 mx-auto pb-10">
        {menu.map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-300 dark:bg-gray-700 rounded-2xl hover:text-white px-4 shadow-xl mb-20 hover:scale-105"
          >
            <img
              src={item.imageUrl}
              alt=""
              className="w-[200px] h-[200px] rounded-full mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 pb-18 mt-[-20px]"
            />
            <div>
              <h1 className="text-lg dark:text-white font-[lemon] text-gray-500 mb-2 mx-2 mt-[-15px] pb-2">
                {item.name}
              </h1>
              <div>
                <Link to={`/food-by-id/${item.id}`}>
                  <button className="text-gray-100 font-semibold rounded-full w-[70px] bg-gray-500 mb-6 ">
                    detail
                  </button>
                </Link>

                {userData.role === "admin" && (
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-gray-100 font-semibold rounded-full w-[70px] bg-gray-500 mb-6 "
                  >
                    delete
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {loading && (
        <p className="font-[lemon] text-xl mb-5 py-8 mx-8 text-center">
          Loading...
        </p>
      )}
    </div>
  );
};

export default AllFood;
