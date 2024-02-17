import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
export const AppContext = createContext();

const App = () => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    email: "",
    role: "",
    phoneNumber: "",
    profilePictureUrl: "",
  });
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const element = useRoutes(routes);
  
  // return element;
  return (
    <AppContext.Provider value={{ userData, setUserData }}>
      {element}
    </AppContext.Provider>
  );
};

export default App;
