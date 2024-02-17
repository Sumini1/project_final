import ProtectedRoute from "./hoc/ProtectedRoute";
import AllFood from "./pages/AllFood/AllFood";
import AllUser from "./pages/AllUser/AllUser";
import FoodById from "./pages/FoodById/FoodById";
import UserLikeFood from "./pages/UserLikeFood/UserLikeFood";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import NewMenu from "./pages/NewMenu/NewMenu";
import Register from "./pages/Register/Register";
import UpdateFoodById from "./pages/UpdateFoodById/UpdateFoodById";
import UserLogin from "./pages/UserLogin/User";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import FoodRating from "./pages/FoodRating/FoodRating";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/new-menu",
    element: (
      <ProtectedRoute>
        <NewMenu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/all-food",

    element: (
      <ProtectedRoute>
        <AllFood />
      </ProtectedRoute>
    ),
  },
  {
    path: "/food-by-id/:id",
    element: (
      <ProtectedRoute>
        <FoodById />
      </ProtectedRoute>
    ),
  },
  {
    path: "/all-user",
    element: (
      <ProtectedRoute>
        <AllUser />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-like-food",
    element: (
      <ProtectedRoute>
        <UserLikeFood />
      </ProtectedRoute>
    ),
  },
  {
    path: "/update-food-by-id/:id",
    element: (
      <ProtectedRoute>
        <UpdateFoodById />
      </ProtectedRoute>
    ),
  },
  {
    path: "/user-login",
    element: (
      <ProtectedRoute>
        <UserLogin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/update-profile",
    element: (
      <ProtectedRoute>
        <UpdateProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/food-rating/:id",
    element: (
      <ProtectedRoute>
        <FoodRating />
      </ProtectedRoute>
    ),
  },
];
