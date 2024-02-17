import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaCircleChevronRight } from "react-icons/fa6";
import { AppContext } from "../../App";

const AllUser = () => {
  const { userData } = useContext(AppContext);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateAdminRole = (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const userDetail = user.find((orang) => orang.id === id);
    axios
      .post(
        `https://api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${id}`,
        { role: userDetail.role },
        config
      )
      .then((respon) => {
        console.log(respon);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event, index) => {
    const { value } = event.target;
    const newUser = [...user];
    newUser[index].role = value;
    setUser(newUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  const getUser = () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios
      .get(`https://api-bootcamp.do.dibimbing.id/api/v1/all-user`, config)
      .then((respon) => {
        const users = respon.data.data.splice(0, 18);
        setUser(users);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  if (loading) {
    return <p className="font-[lemon] font-bold mx-4 py-4">Loading...</p>; // Tampilkan pesan loading atau spinner
  }

  return (
    <div className=" bg-gray-200 dark:bg-gray-700">
      <Navbar userRole={userData.role} />
      <h1
        data-aos="zoom-in"
        data-aos-duration="300"
        className="py-10 text-center font-[lemon] text-primary text-4xl"
      >
        <span className="bg-gradient-to-r from-primary  to-secondary bg-clip-text text-transparent">
          {" "}
          List All User
        </span>
      </h1>
      <div className=" container grid grid-cols-1 sm:grid-cols-3 gap-5  py-10  mt-9">
        {user.map((item, idx) => (
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            key={idx}
            className="w-[380px] h-[250px] group rounded-2xl bg-gray-600  hover:text-white  duration-300 px-4 shadow-xl mb-20 hover:scale-105 dark:bg-gray-300 mt-9"
          >
            <div>
              <img
                src={item.profilePictureUrl}
                className="w-[200px] h-[200px] rounded-full mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-200 pb-18 mt-[-20px] "
              />
            </div>
            <div>
              <h1 className="text-lg  dark:text-gray-700 font-[lemon] text-gray-200 mb-2 mx-2 mt-[-25px]">
                {item.name}
              </h1>
              <p className="mx-2 font-serif ">
                <select
                  name="role"
                  id={`role-${idx}`}
                  value={item.role}
                  onChange={(e) => handleChange(e, idx)}
                  className="rounded-md bg-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-700"
                >
                  <option value="admin">admin</option>
                  <option value="user">user</option>
                </select>
                <button
                  className="mx-2"
                  onClick={() => updateAdminRole(item.id)}
                >
                  <FaCircleChevronRight className="text-gray-200 dark:text-gray-700" />
                </button>
              </p>
              <p className="mx-2 text-gray-200 dark:text-gray-700 font-serif">
                {item.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUser;
