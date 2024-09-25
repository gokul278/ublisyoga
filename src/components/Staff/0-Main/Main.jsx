import React, { useEffect, useState } from "react";
import SideMenu from "../00-SideMenu/Sidemenu";
import { Dashboard } from "../01-Dashboard/Dashboard";
import Registration from "../02-StudentManage/Registration";

export default function Main() {
  const [navbarStatus, setNavbarstatus] = useState("closed");

  const toggleCustomerNavbar = () => {
    setNavbarstatus((prevState) =>
      prevState === "closed" ? "opened" : "closed"
    );
  };

  const [pages, setPages] = useState("dashboard");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePage = (page) => {
    setPages(page);
  };

  return (
    <>
     <div className="w-full h-screen flex">
        

        {screenWidth <= 1023 ? (
          <div
            className={`fixed flex top-0 left-0 h-full z-20 transition-all duration-300 ease-in-out ${
              navbarStatus === "opened" ? "w-[100%]" : "w-0 ml-[-80%]"
            }`}
            style={{ overflow: "hidden" }}
          >
            <div className="w-[80%]">
              <SideMenu
                toggleCustomerNavbar={toggleCustomerNavbar}
                pages={pages}
                handlePage={handlePage}
              />
            </div>
            <div
              className="w-[20%]"
              style={{ background: "rgba(0, 0, 0, 0.39)" }}
              onClick={toggleCustomerNavbar} // Close sidebar when clicking outside
            ></div>
          </div>
        ) : (
          <div className="w-[23%] h-screen">
            <SideMenu
              toggleCustomerNavbar={toggleCustomerNavbar}
              pages={pages}
              handlePage={handlePage}
            />
          </div>
        )}
  
        <div
          className="w-[77%] flex-grow h-full bg-[#f9f3eb] z-10"
          align="center"
        >
          <div className="w-[100%]">
            {pages === "dashboard" ? (
              <Dashboard toggleCustomerNavbar={toggleCustomerNavbar} />
            ) : pages === "registration" ? (
              <Registration toggleCustomerNavbar={toggleCustomerNavbar} />
            ) : null}
          </div>
        </div>
      </div>
    </>
   
  );
}
