import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa6";
import { AppContext } from "../../App";

const FoodById = () => {
  const { userData } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const [listReview, setListReview] = useState([]);
  const param = useParams();
  console.log(param.id);

  const [detail, setDetail] = useState({});

  useEffect(() => {
    getMenu();
    getListRating();
  }, []);

  const handleLike = () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .post(
        ` https://api-bootcamp.do.dibimbing.id/api/v1/${
          detail.isLike ? "unlike" : "like"
        }`,
        { foodId: detail.id },
        config
      )
      .then((respon) => {
        getMenu();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

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
      .get(
        ` https://api-bootcamp.do.dibimbing.id/api/v1/foods/${param.id}`,
        config
      )
      .then((respon) => {
        console.log(respon);
        setDetail(respon.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getListRating = () => {
    setLoading(true);
    const config = {
      headers: {
        "Content-Type": "application/json",
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get(
        `https://api-bootcamp.do.dibimbing.id/api/v1/food-rating/${param.id}`,
        config
      )
      .then((respon) => {
        setListReview(respon.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("Error occurred while loading data!");
      });
  };

  const confirmUpdate = () => {
    if (window.confirm("Are you sure want to update?")) {
      // Lakukan navigasi atau tindakan lain saat update dikonfirmasi
      window.location.href = `/update-food-by-id/${param.id}`;
    } else {
      window.location.href = `/food-by-id/${param.id}`;
    }
  };

  const confirmReview = () => {
    if (window.confirm("Are you sure want to review?")) {
      // Lakukan navigasi atau tindakan lain saat review dikonfirmasi
      window.location.href = `/food-rating/${param.id}`;
    } else {
      window.location.href = `/food-by-id/${param.id}`;
    }
  };

  if (loading) {
    return <p className="font-[lemon] font-bold mx-4 py-4">Loading...</p>; // Tampilkan pesan loading atau spinner
  }

  return (
    <div className=" bg-gray-400  dark:bg-gray-700 min-h-screen pb-10">
      <Navbar userRole={userData.role} />
      <h1
        data-aos="zoom-in"
        data-aos-duration="300"
        className="text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-[lemon] py-10 text-3xl "
      >
        Detail Food
      </h1>
      <div className=" flex items-center justify-center py-5 ">
        <div
          data-aos="zoom-in"
          data-aos-duration="300"
          // className="w-[40rem] h-[30rem] overflow-hidden"
          className="grid grid-cols-1 max-w-[700px] mx-auto gap-6"
        >
          <div className="flex flex-col justify-center gap-4 text-start mx-4 shadow-lg p-4  rounded-3xl dark:bg-gray-400 bg-slate-200 relative group dark:hover:text-white  group-hover:text-white">
            <img
              src={detail.imageUrl}
              alt=""
              // className="rounded-[70px] w-full h-full object-cover hover:scale-105"
              className="w-[300px] h-[300px] rounded-full block mx-auto hover:scale-110 hover:rotate-6 duration-200 mb-5"
            />
            <div className="flex gap-4 justify-between ">
              <h1 className="text-xl mx-20 font-bold text-gray-500  dark:hover:text-white dark:text-white font-[lemon]">
                {detail.name}
              </h1>

              {Array.from({ length: 5 }).map((_, index) =>
                index + 1 <= detail.rating || 0 ? (
                  <FaStar key={index} className="text-gray-700 text-4xl" />
                ) : (
                  <FaRegStar key={index} className="text-gray-700 text-4xl" />
                )
              )}
              <div className="flex justify-between items-center w-[40rem] mx-auto pb-7">
                <button
                  onClick={handleLike}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-4 mx-14 py-2 rounded-full hover:scale-105 duration-200 w-[50px] h-[50px] mt-[-15px]"
                >
                  {detail.isLike ? <FaHeart /> : <FaRegHeart />}
                  {detail.totalLikes}
                </button>
              </div>
            </div>
          </div>
          <div className="cotainer flex justify-normal gap-4 items-start w-[40rem] mx-auto text-white font-[lemon] my-4">
            {(detail.ingredients || []).map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
          <div className="flex justify-between mx-7">
            <p className=" flex justify-between items-center w-[40rem] mx-auto text-white  font-[Ubuntu] font-thin mt-[-20px]">
              {detail.description}
            </p>
            <Link to={`/update-food-by-id/${param.id}`}>
             {
              userData.role === "admin" && (
                <button
                  onClick={confirmUpdate}
                  className="bg-gradient-to-r from-primary to-secondary text-white  rounded-full hover:scale-105 duration-200  w-[70px] m-1 p-1 mt-[-15px]"
                >
                  Update
                </button>
              )
             }
            </Link>
            <Link to={`/food-rating/${param.id}`}>
              <button
                onClick={confirmReview}
                className="bg-gradient-to-r from-primary to-secondary text-white  rounded-full hover:scale-105 duration-200  w-[70px] m-1 p-1 mt-[-15px]"
              >
                Review
              </button>
            </Link>
          </div>

          <div>
            {listReview.map((item, index) => (
              <div key={index}>
                <p className="flex justify-normal gap-4 items-start w-[40rem] mx-auto text-white font-[lemon] my-4">
                  {item.user.name}
                </p>
                <div className="flex mx-4 px-4 gap-2">
                  {Array.from({ length: 5 }).map((_, index) =>
                    index + 1 <= item.rating || 0 ? (
                      <FaStar key={index} className="text-white" />
                    ) : (
                      <FaRegStar key={index} className="text-white" />
                    )
                  )}
                  <p className="mx-10 text-white font-[Ubuntu]">
                    {item.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodById;
