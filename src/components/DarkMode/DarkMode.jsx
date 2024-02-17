import React from "react";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ?
        localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark")
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light")
        }
    }, [theme])

    const changeTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light");
        }
    }

  return (
    <>
      <div className="relative">
        <img
          src="/image/darkmode.png"
          alt=""
          onClick={changeTheme}
          className={`w-40  absolute right-0 z-10 rounded-full pl-10 cursor-pointer drop-shadow-sm transition-all duration-300 ${theme !== "dark" ? "opacity-0" : "opacity-100"}`}
        />
        <img
          src="/image/darkmode.png"
          alt=""
          onClick={changeTheme}
          className="w-40  rounded-full pl-10 cursor-pointer drop-shadow-sm transition-all duration-300"
        />
      </div>
    </>
  );
};

export default DarkMode;
