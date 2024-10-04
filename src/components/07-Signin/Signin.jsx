import React, { useRef, useState } from "react";
import logo from "../../assets/logo/logo.jpeg";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
  const navigate = useNavigate();

  const [inputs, SetInputs] = useState([{ username: "", password: "" }]);

  const [hiddenpasswordStatus, setHiddenpasswordStatus] = useState(false);

  const handleinput = (event) => {
    event.target.value;

    SetInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#f9f3eb]">
      <div
        className="w-[90%] lg:w-[40%] h-[auto] lg:h-[74vh] bg-[#fff] rounded"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
        align="center"
      >
        <div className=" w-[80%] lg:w-[70%]">
          <img src={logo} className="mt-2 w-[120px]" alt="logo" />
          <div class="w-[100%] mt-2" align="start">
            <div class="formContainer">
              <input
                name="username"
                value={inputs.username}
                onInput={handleinput}
                id="firstname"
                type="text"
              />
              <label htmlFor="firstname">Username</label>
            </div>
          </div>
          <div className="flex justify-between">
            <div class=" w-[82%] lg:w-[88%] mt-3" align="start">
              <div class="formContainer">
                <input
                  name="password"
                  value={inputs.password}
                  onInput={handleinput}
                  id="firstname"
                  type={hiddenpasswordStatus ? "text" : "password"}
                />
                <label htmlFor="firstname">Password</label>
              </div>
            </div>
            <div class="w-[15%] lg:w-[10%] mt-3" align="start">
              <div class="formContainer">
                {hiddenpasswordStatus ? (
                  <button
                    className="mt-4"
                    onClick={() => {
                      setHiddenpasswordStatus(false);
                    }}
                  >
                    <i class="fa-regular fa-eye-slash"></i>
                  </button>
                ) : (
                  <button
                    className="mt-4"
                    onClick={() => {
                      setHiddenpasswordStatus(true);
                    }}
                  >
                    <i class="fa-regular fa-eye"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div
            className="mt-3 cursor-pointer font-bold text-[17px] text-[#ff5001]"
            align="end"
            onClick={() => {
              navigate("/forgetpassword");
            }}
          >
            Forgot Password ?
          </div>
          <div className="w-[100%] mt-3">
            <button
              onClick={() => {
                navigate("/student");
              }}
              className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold w-[100%] py-2 rounded transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
            >
              Sign In
            </button>
          </div>
          <div className="mt-5">
            <h1
              className="text-[#000] cursor-pointer text-[18px] font-semibold"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Don't have an Account ? Sign Up
            </h1>
            <h1
              className="text-[#ff5001] cursor-pointer mt-3 mb-3 text-[20px] font-semibold"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to Site{" "}
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
