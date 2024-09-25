import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Stepper.css"; // Import CSS file with improved slide animations
import { useNavigate } from "react-router-dom";

export const Stepper = () => {
  const navigate = useNavigate();
  const [stepperactive, setStepperactive] = useState(1);

  const handleNext = () => {
    setStepperactive((prev) => (prev < 3 ? prev + 1 : prev));
  };

  const handleBack = () => {
    setStepperactive((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="w-[100%]">
      <div
        className="w-[100%] rounded bg-[#f8f9fa]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
      >
        {stepperactive === 1 && (
          <>
            <h1 className="py-5 text-[#ff5001] text-[25px] font-bold">
              Your Personal Deatils
            </h1>
            <div className="w-[100%] h-[45vh] flex flex-col justify-center">
              <div className="w-[100%] py-1" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[49%]" align="start">
                    <div className="formContainer">
                      <input id="firstname" type="text" />
                      <label htmlFor="firstname">First Name</label>
                    </div>
                  </div>
                  <div className="w-[49%] relative my-2">
                    <div className="formContainer">
                      <input id="firstname" type="text" />
                      <label htmlFor="firstname">Last Name</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input id="firstname" type="date" />
                      <label htmlFor="firstname">Date of Birth</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-3 w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input id="firstname" type="text" />
                      <label htmlFor="firstname">Phone Number</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%]" align="center">
              <div className="w-[80%]" align="end">
                <button
                  className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                  onClick={handleNext}
                >
                  Next&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </>
        )}
        {stepperactive === 2 && (
          <>
            <h1 className="py-5 text-[#ff5001] text-[25px] font-bold">
              Your Address Deatils
            </h1>
            <div className="w-[100%] h-[45vh] flex flex-col justify-center">
              <div className="w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <textarea />
                      <label htmlFor="firstname">Address</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100%] py-1" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[49%]" align="start">
                    <div className="formContainer">
                      <input id="firstname" type="text" />
                      <label htmlFor="firstname">State</label>
                    </div>
                  </div>
                  <div className="w-[49%] relative my-2">
                    <div className="formContainer">
                      <input id="firstname" type="text" />
                      <label htmlFor="firstname">Country</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input id="firstname" type="number" />
                      <label htmlFor="firstname">Pincode</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%]" align="center">
              <div className="w-[80%] flex justify-end">
                <button
                  className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                  onClick={handleBack}
                >
                  <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                  onClick={handleNext}
                >
                  Next&nbsp;&nbsp;
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </>
        )}
        {stepperactive === 3 && (
          <>
            <h1 className="py-5 text-[#ff5001] text-[25px] font-bold">
              Your Login Details
            </h1>
            <div className="w-[100%] h-[45vh] flex flex-col justify-center">
              <div className="w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input id="firstname" type="tel" />
                      <label htmlFor="firstname">E-Mail</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100%] mt-3" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input id="firstname" type="tel" />
                      <label htmlFor="firstname">Password</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input id="firstname" type="email" />
                      <label htmlFor="firstname">Confirm Password</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%]" align="center">
              <div className="w-[80%] flex justify-end">
                <button
                  className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                  onClick={handleBack}
                >
                  <i className="fa-solid fa-arrow-left"></i>&nbsp;&nbsp;Back
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button
                  className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                  onClick={()=>{
                    navigate("/signin");
                  }}
                >
                  Sign Up&nbsp;&nbsp;
                  <i className="fa-solid fa-thumbs-up"></i>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
