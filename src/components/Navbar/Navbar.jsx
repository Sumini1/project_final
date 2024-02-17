import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "../DarkMode/DarkMode";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ userRole = "user" }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("token", token);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    const logoutEndpoint = "https://api-bootcamp.do.dibimbing.id/api/v1/logout";
    axios
      .post(logoutEndpoint, null, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);

        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        // Handle error jika diperlukan
      });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 sticky top-0 z-50">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center font-semibold">
            <div>
              <Link
                to={"#"}
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <h1 className="w-10 text-primary font-[lemon]">
                  Indonesian Food
                </h1>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <button>
                  <DarkMode />
                </button>
              </div>
              <div className="hidden sm:flex gap-4 ">
                <Link
                  to={"/#"}
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  Home
                </Link>
                {userRole === "admin" && (
                  <div className="relative inline-block ">
                    <button
                      onClick={toggleDropdown}
                      className="inline-block py-4 px-4 hover:text-primary"
                    >
                      About ▼
                    </button>

                    {isDropdownOpen && (
                      <div
                        className="absolute mt-6 bg-white shadow-md mx-2 text-current dark:bg-gray-900 w-[100px] rounded-b-md gap-3 pl-3 border-b-2"
                        style={{ top: "40px" }}
                      >
                        <div>
                          <Link to="/all-user">All User</Link>
                        </div>
                        <div>
                          <Link to="/user-like-food">User Like</Link>
                        </div>
                        <div>
                          <Link to="/user-login">User Login</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {token ? (
                  <Link
                    to={"/login"}
                    onClick={handleLogout}
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    to={"/login"}
                    className="inline-block py-4 px-4 hover:text-primary"
                  >
                    Login
                  </Link>
                )}
              </div>
              <Link to={"/new-menu"}>
                <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-200 flex items-center gap-3">
                  Order
                  <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
