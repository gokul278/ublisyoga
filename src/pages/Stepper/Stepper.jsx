import React, { useState } from "react";
import "./Stepper.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import CryptoJS from "crypto-js";

export const Stepper = () => {
  const navigate = useNavigate();

  const decrypt = (encryptedData, iv, key) => {
    const decrypted = CryptoJS.AES.decrypt(
      {
        ciphertext: CryptoJS.enc.Hex.parse(encryptedData),
      },
      CryptoJS.enc.Hex.parse(key),
      {
        iv: CryptoJS.enc.Hex.parse(iv),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      }
    );

    // Convert decrypted data to UTF-8 string and then parse it as JSON
    const decryptedString = decrypted.toString(CryptoJS.enc.Utf8);

    // Parse the string into a JSON object
    return JSON.parse(decryptedString);
  };

  const [stepperactive, setStepperactive] = useState(1);

  // const handleNext = () => {
  //   setStepperactive((prev) => (prev < 2 ? prev + 1 : prev));
  // };

  const handleBack = () => {
    setStepperactive((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const [input, setInput] = useState({
    fname: "",
    lname: "",
    dob: "",
    age: "",
    phoneno: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleinput = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });

    setFormerror1({
      errorstatus: false,
      errormessage: "",
    });

    setFormerror2({
      errorstatus: false,
      errormessage: "",
    });
  };

  const handleinputdob = (event) => {
    const dobValue = event.target.value;

    const calculateAge = (dob) => {
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }
      return age;
    };

    const age = calculateAge(dobValue);

    setInput({
      ...input,
      [event.target.name]: dobValue,
      age: age >= 0 ? age : "",
    });
  };

  const [hiddenpasswordStatus, setHiddenpasswordStatus] = useState(false);

  const [submitloadingStatus, setSubmitloadingStatus] = useState(false);

  const [successState, setSuccessState] = useState(false);

  const [formerror1, setFormerror1] = useState({
    errorstatus: false,
    errormessage: "",
  });

  const submitform1 = () => {
    if (input.fname.length <= 0) {
      setFormerror1({
        errorstatus: true,
        errormessage: "Enter First Name",
      });

      return 0;
    }

    if (input.lname.length <= 0) {
      setFormerror1({
        errorstatus: true,
        errormessage: "Enter Last Name",
      });

      return 0;
    }

    if (input.dob.length <= 0) {
      setFormerror1({
        errorstatus: true,
        errormessage: "Enter Date of Birth",
      });

      return 0;
    }

    if (input.phoneno.length <= 0) {
      setFormerror1({
        errorstatus: true,
        errormessage: "Enter Mobile Number",
      });

      return 0;
    }

    if (input.phoneno.length != 10) {
      setFormerror1({
        errorstatus: true,
        errormessage: "Enter Valid Mobile Number",
      });

      return 0;
    }

    setStepperactive((prev) => (prev < 2 ? prev + 1 : prev));
  };

  function verifyEmail(email) {
    // Regular expression for validating an email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the pattern
    return emailPattern.test(email);
  }

  const [formerror2, setFormerror2] = useState({
    errorstatus: false,
    errormessage: "",
  });

  const submitform2 = () => {
    if (input.email.length <= 0) {
      setFormerror2({
        errorstatus: true,
        errormessage: "Enter Email",
      });

      return 0;
    }

    if (!verifyEmail(input.email)) {
      setFormerror2({
        errorstatus: true,
        errormessage: "Enter Valid Email",
      });

      return 0;
    }

    if (input.password.length <= 0) {
      setFormerror2({
        errorstatus: true,
        errormessage: "Enter Password",
      });

      return 0;
    }

    if (input.password.length < 8) {
      setFormerror2({
        errorstatus: true,
        errormessage: "Password Should be in Minimum 8 characters",
      });

      return 0;
    }

    if (input.repassword.length <= 0) {
      setFormerror2({
        errorstatus: true,
        errormessage: "Enter Confirm Password",
      });

      return 0;
    }

    if (input.repassword != input.password) {
      setFormerror2({
        errorstatus: true,
        errormessage: "Confirm Password Dosen't Match",
      });

      return 0;
    }

    setSubmitloadingStatus(true);

    Axios.post(import.meta.env.VITE_API_URL + "register", {
      fname: input.fname,
      lname: input.lname,
      dob: input.dob,
      age: input.age,
      phoneno: input.phoneno,
      email: input.email,
      password: input.password,
    }).then((res) => {
      const data = decrypt(
        res.data.encryptedData,
        res.data.iv,
        import.meta.env.VITE_ENCRYPTION_KEY
      );

      if (data.status === "success") {
        setSuccessState(true);
        setTimeout(() => {
          navigate("/signin");
        }, 1500);
      } else if (data.status === "error") {
        setSubmitloadingStatus(false);
        setFormerror2({
          errorstatus: true,
          errormessage: data.message,
        });
      }
    });
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
                      <input
                        id="firstname"
                        name="fname"
                        value={input.fname}
                        onInput={handleinput}
                        type="text"
                      />
                      <label htmlFor="firstname">First Name</label>
                    </div>
                  </div>
                  <div className="w-[49%] relative my-2">
                    <div className="formContainer">
                      <input
                        id="firstname"
                        name="lname"
                        value={input.lname}
                        onInput={handleinput}
                        type="text"
                      />
                      <label htmlFor="firstname">Last Name</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input
                        id="firstname"
                        value={input.dob}
                        onInput={handleinputdob}
                        name="dob"
                        type="date"
                      />
                      <label htmlFor="firstname">Date of Birth</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-3 w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input
                        id="firstname"
                        value={input.phoneno}
                        onInput={handleinput}
                        name="phoneno"
                        type="text"
                      />
                      <label htmlFor="firstname">Phone Number</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full -mt-2 font-semibold">
              <div className="w-[90%] lg:w-[80%] transition-all duration-300">
                {formerror1.errorstatus ? (
                  <div className="py-2 bg-[#ED5555] text-[#fff] rounded  transition-all duration-300">
                    {formerror1.errormessage}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-[100%]" align="center">
              <div className="w-[80%]" align="end">
                <button
                  className="disabled:bg-[#ff7a3c] disabled:font-[#fff] disabled:hover:cursor-not-allowed disabled:hover:text-[#fff] disabled:border-[#ff7a3c] bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                  onClick={submitform1}
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
              Your Login Details
            </h1>
            <div className="w-[100%] h-[45vh] flex flex-col justify-center">
              <div className="w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input
                        id="firstname"
                        name="email"
                        value={input.email}
                        onInput={handleinput}
                        type="tel"
                      />
                      <label htmlFor="firstname">E-Mail</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-3" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className=" w-[82%] lg:w-[88%]" align="start">
                    <div className="formContainer">
                      <input
                        name="password"
                        value={input.password}
                        onInput={handleinput}
                        id="firstname"
                        type={hiddenpasswordStatus ? "text" : "password"}
                      />
                      <label htmlFor="firstname">Password</label>
                    </div>
                  </div>
                  <div className="w-[15%] lg:w-[10%]" align="start">
                    <div className="formContainer">
                      {hiddenpasswordStatus ? (
                        <button
                          className="mt-4"
                          onClick={() => {
                            setHiddenpasswordStatus(false);
                          }}
                        >
                          <i className="fa-regular fa-eye-slash"></i>
                        </button>
                      ) : (
                        <button
                          className="mt-4"
                          onClick={() => {
                            setHiddenpasswordStatus(true);
                          }}
                        >
                          <i className="fa-regular fa-eye"></i>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 w-[100%]" align="center">
                <div className="w-[90%] lg:w-[80%] flex justify-between">
                  <div className="w-[100%]" align="start">
                    <div className="formContainer">
                      <input
                        name="repassword"
                        onInput={handleinput}
                        id="firstname"
                        type="password"
                      />
                      <label htmlFor="firstname">Confirm Password</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full -mt-2 font-semibold">
              <div className="w-[90%] lg:w-[80%] transition-all duration-300">
                {formerror2.errorstatus ? (
                  <div className="py-2 bg-[#ED5555] text-[#fff] rounded  transition-all duration-300">
                    {formerror2.errormessage}
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-[100%]" align="center">
              {successState ? (
                <div className="w-[80%] flex justify-center " align="center">
                  <div className="w-[100%] bg-green-400 text-[#ffffff] text-[16x] font-bold my-3 rounded py-2">
                    Your Account Successfully Registered
                  </div>
                </div>
              ) : (
                <div className="w-[80%] flex justify-end">
                  {submitloadingStatus ? (
                    <>
                      <svg className="loadersvg my-4" viewBox="25 25 50 50">
                        <circle
                          className="loadercircle"
                          r="20"
                          cy="50"
                          cx="50"
                        ></circle>
                      </svg>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                        onClick={handleBack}
                      >
                        <i className="fa-solid fa-arrow-left"></i>
                        &nbsp;&nbsp;Back
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                        onClick={submitform2}
                      >
                        Sign Up&nbsp;&nbsp;
                        <i className="fa-solid fa-thumbs-up"></i>
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
