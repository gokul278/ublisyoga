import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";

const RegistrationStepper = () => {
  const [stepperactive, setStepperactive] = useState(1);

  const handleNext = () => {
    setStepperactive((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handleBack = () => {
    setStepperactive((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const [addessschecked, setAddressChecked] = useState(true);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");

  // Fetch states when component mounts (you can replace 'IN' with any country code)
  useEffect(() => {
    const countryStates = State.getStatesOfCountry("IN"); // 'IN' for India
    setStates(countryStates);
  }, []);

  const handleStateChange = (event) => {
    const stateCode = event.target.value;
    setSelectedState(stateCode);
    if (stateCode) {
      const stateCities = City.getCitiesOfState("IN", stateCode); // 'IN' for India
      setCities(stateCities);
    } else {
      setCities([]); // Reset cities if no state is selected
    }
  };

  return (
    <div className="w-[100%] lg:w-[100%] h-screen blur-[0.2px] bg-[#000000ad] flex justify-center items-center absolute z-10">
      <div
        className="w-[90%] lg:w-[70%] h-[90vh] bg-white rounded shadow-sm"
        align="center"
      >
        {stepperactive === 1 && (
          <>
            <div className="w-full h-[7vh] flex justify-center items-center">
              <h1 className="text-[20px] justify-center font-semibold text-[#ff5001]">
                Personal Details
              </h1>
            </div>
            <hr />
            <div className="w-full h-[73vh] overflow-y-auto">
              <div className="w-full">
                <div className="w-[90%] h-[85px]" align="start">
                  <div className="formContainer">
                    <input id="userid" name="email" type="tel" />
                    <label htmlFor="userid">User ID</label>
                  </div>
                </div>
                <div className="w-[90%]" align="start">
                  <div className="formContainer h-[85px]">
                    <input id="useremail" name="email" type="tel" />
                    <label htmlFor="useremail">Email ID</label>
                  </div>
                </div>
                <div
                  className="w-[90%] h-[85px] flex justify-between"
                  align="start"
                >
                  <div className="w-[48%]">
                    <div className="formContainer">
                      <input id="firstname" name="email" type="tel" />
                      <label htmlFor="firstname">First Name</label>
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="formContainer">
                      <input id="lastname" name="email" type="tel" />
                      <label htmlFor="lastname">Last Name</label>
                    </div>
                  </div>
                </div>

                <div
                  className="w-[90%] h-[85px] flex justify-between"
                  align="start"
                >
                  <div className="w-[48%]">
                    <div className="formContainer">
                      <input id="phoneno" name="email" type="tel" />
                      <label htmlFor="phoneno">Phone Number</label>
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="formContainer">
                      <input id="whatsapp" name="email" type="tel" />
                      <label htmlFor="whatsapp">Whatsapp Number</label>
                    </div>
                  </div>
                </div>
                <div
                  className="w-[90%] h-[85px] flex justify-between"
                  align="start"
                >
                  <div className="w-[68%]">
                    <div className="formContainer">
                      <input id="dob" name="email" type="date" />
                      <label htmlFor="dob">Date of Birth</label>
                    </div>
                  </div>
                  <div className="w-[28%]">
                    <div className="formContainer">
                      <input id="age" name="email" type="tel" />
                      <label htmlFor="age">Age</label>
                    </div>
                  </div>
                </div>
                <div
                  className="w-[90%] h-[85px] flex justify-between"
                  align="start"
                >
                  <div className="formContainer">
                    <select id="gender">
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <label htmlFor="gender">Gender</label>
                  </div>
                </div>
                <div className="w-[90%]" align="start">
                  <div className="formContainer h-[85px]">
                    <input id="firstname" name="email" type="tel" />
                    <label htmlFor="firstname">Father / Husband Name</label>
                  </div>
                </div>
                <div
                  className="w-[90%] h-[85px] flex justify-between"
                  align="start"
                >
                  <div className="w-[48%]">
                    <div className="formContainer">
                      <input id="occupation" name="email" type="text" />
                      <label htmlFor="occupation">Occupation</label>
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <div className="formContainer">
                      <input id="qualification" name="email" type="text" />
                      <label htmlFor="qualification">Qualification</label>
                    </div>
                  </div>
                </div>
                <div className="w-[90%] h-[80px] flex justify-between items-center" align="start">
                  <div className="text-[#45474b] font-semibold flex">
                    <input
                      id="addresscheck"
                      className="w-[16px] h-[16px] mt-1"
                      name="email"
                      type="checkbox"
                      onChange={() => {
                        addessschecked
                          ? setAddressChecked(false)
                          : setAddressChecked(true);
                      }}
                    />
                    &nbsp;&nbsp;&nbsp;
                    <label htmlFor="addresscheck">
                      Both Temporary & Permanent Addresses are the same.
                    </label>
                  </div>
                </div>
                <div
                  className="w-[90%] h-[85px] flex flex-col justify-between"
                  align="start"
                >
                  {addessschecked ? (
                    <div className="w-full" align="center">
                      <label className="text-[#45474b] h-[40px] text-[18px] font-semibold">
                        Temporary Address
                      </label>
                      <div className="w-[100%] h-[85px]">
                        <div className="formContainer">
                          <textarea
                            if="tempaddress"
                            className="h-[85px]"
                          ></textarea>
                          <label htmlFor="tempaddress">
                            Residential Address
                          </label>
                        </div>
                      </div>
                      <div
                        className="w-[100%] h-[85px] flex justify-between"
                        align="start"
                      >
                        <div className="w-[48%]">
                          <div className="formContainer">
                            <select id="tempstate" onChange={handleStateChange}>
                              <option value="" disabled selected>
                                Select State
                              </option>
                              {states.map((state) => (
                                <option
                                  key={state.isoCode}
                                  value={state.isoCode}
                                >
                                  {state.name}
                                </option>
                              ))}
                            </select>
                            <label htmlFor="tempstate">State</label>
                          </div>
                        </div>

                        <div className="w-[48%]">
                          <div className="formContainer">
                            <select id="tempcity" disabled={!selectedState}>
                              <option value="" disabled selected>
                                Select City
                              </option>
                              {cities.map((city) => (
                                <option key={city.name} value={city.name}>
                                  {city.name}
                                </option>
                              ))}
                            </select>
                            <label htmlFor="tempcity">City</label>
                          </div>
                        </div>
                      </div>
                      <div className="w-[100%]" align="start">
                        <div className="formContainer h-[85px]">
                          <input id="firstname" name="email" type="tel" />
                          <label htmlFor="firstname">Pincode</label>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div className="w-full" align="center">
                    <label className="text-[#45474b] h-[40px] text-[18px] font-semibold">
                      Permanent Address
                    </label>
                    <div className="w-[100%] h-[85px]">
                      <div className="formContainer">
                        <textarea
                          id="permanentaddress"
                          className="h-[85px]"
                        ></textarea>
                        <label htmlFor="permanentaddress">
                          Residential Address
                        </label>
                      </div>
                    </div>
                    <div
                      className="w-[100%] h-[85px] flex justify-between"
                      align="start"
                    >
                      <div className="w-[48%]">
                        <div className="formContainer">
                          <select
                            id="permanentstate"
                            onChange={handleStateChange}
                          >
                            <option value="" disabled selected>
                              Select State
                            </option>
                            {states.map((state) => (
                              <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="permanentstate">State</label>
                        </div>
                      </div>

                      <div className="w-[48%]">
                        <div className="formContainer">
                          <select id="permanentcity" disabled={!selectedState}>
                            <option value="" disabled selected>
                              Select City
                            </option>
                            {cities.map((city) => (
                              <option key={city.name} value={city.name}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                          <label htmlFor="permanentcity">City</label>
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] pb-5" align="start">
                      <div className="formContainer">
                        <input id="pincode" name="email" type="tel" />
                        <label htmlFor="pincode">Pincode</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="w-[90%] lg:w-[95%] h-[10vh] flex justify-end items-center">
              <button
                className="disabled:bg-[#ff7a3c] disabled:font-[#fff] disabled:hover:cursor-not-allowed disabled:hover:text-[#fff] disabled:border-[#ff7a3c] bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                onClick={handleNext}
              >
                Next&nbsp;&nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </>
        )}

        {stepperactive === 2 && (
          <>
            <div className="w-full h-[7vh] flex justify-center items-center">
              <h1 className="text-[20px] justify-center font-semibold text-[#ff5001]">
                General Health Details
              </h1>
            </div>
            <hr />
            <div className="w-full h-[73vh] overflow-auto"></div>
            <hr />
            <div className="w-[90%] lg:w-[95%] h-[10vh] flex justify-between items-center">
              <button
                className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                onClick={handleBack}
              >
                <i className="fa-solid fa-arrow-left"></i>
                &nbsp;&nbsp;Back
              </button>
              <button
                className="disabled:bg-[#ff7a3c] disabled:font-[#fff] disabled:hover:cursor-not-allowed disabled:hover:text-[#fff] disabled:border-[#ff7a3c] bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                onClick={handleNext}
              >
                Next&nbsp;&nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </>
        )}

        {stepperactive === 3 && (
          <>
            <div className="w-full h-[7vh] flex justify-center items-center">
              <h1 className="text-[20px] justify-center font-semibold text-[#ff5001]">
                Past or Present Health Problems
              </h1>
            </div>
            <hr />
            <div className="w-full h-[73vh] overflow-auto"></div>
            <hr />
            <div className="w-[90%] lg:w-[95%] h-[10vh] flex justify-between items-center">
              <button
                className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                onClick={handleBack}
              >
                <i className="fa-solid fa-arrow-left"></i>
                &nbsp;&nbsp;Back
              </button>
              <button
                className="disabled:bg-[#ff7a3c] disabled:font-[#fff] disabled:hover:cursor-not-allowed disabled:hover:text-[#fff] disabled:border-[#ff7a3c] bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                onClick={handleNext}
              >
                Next&nbsp;&nbsp;
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </>
        )}

        {stepperactive === 4 && (
          <>
            <div className="w-full h-[7vh] flex justify-center items-center">
              <h1 className="text-[20px] justify-center font-semibold text-[#ff5001]">
                Therapy
              </h1>
            </div>
            <hr />
            <div className="w-full h-[73vh] overflow-auto"></div>
            <hr />
            <div className="w-[90%] lg:w-[95%] h-[10vh] flex justify-between items-center">
              <button
                className="bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded my-4 transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                onClick={handleBack}
              >
                <i className="fa-solid fa-arrow-left"></i>
                &nbsp;&nbsp;Back
              </button>
              <button
                className="disabled:bg-[#ff7a3c] disabled:font-[#fff] disabled:hover:cursor-not-allowed disabled:hover:text-[#fff] disabled:border-[#ff7a3c] bg-[#ff5001] border-2 border-[#ff5001] text-[#fff] font-semibold px-3 py-2 rounded transition-colors duration-300 ease-in-out hover:bg-[#fff] hover:text-[#ff5001]"
                onClick={handleNext}
              >
                Save&nbsp;&nbsp;
                <i className="fa-solid fa-floppy-disk"></i>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationStepper;
