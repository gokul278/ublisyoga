import React, { useEffect, useState } from "react";
import { Country, State, City } from "country-state-city";
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";
import TextareaInput from "../Inputs/TextareaInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import RadioButton from "../Inputs/RadiobuttonInput";
import RadiobuttonInput from "../Inputs/RadiobuttonInput";
import TextLabel from "../Labels/TextLabel";

const RegistrationStepper = () => {
  const [stepperactive, setStepperactive] = useState(1);

  const handleNext = () => {
    setStepperactive((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const handleBack = () => {
    setStepperactive((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const [addessschecked, setAddressChecked] = useState(false);
  const [agreementchecked, setAgreementchecked] = useState(false);
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

  const [selectedOption, setSelectedOption] = useState({
    accident: "",
    breaks: "",
    care: "",
    backpain: "",
  });

  const [conditions, setConditions] = useState([
    { label: "Varicose Veins", checked: 0 },
    { label: "Blood Clots", checked: 0 },
    { label: "High BP", checked: 0 },
    { label: "Headaches", checked: 0 },
    { label: "Knee Problems", checked: 0 },
    { label: "Sciatica", checked: 0 },
    { label: "Diabetes", checked: 0 },
    { label: "Cancer", checked: 0 },
    { label: "Low BP", checked: 0 },
    { label: "Migraines", checked: 0 },
    { label: "Allergies", checked: 0 },
    { label: "Asthma", checked: 0 },
    { label: "HIV / AIDS", checked: 0 },
    { label: "Sinus", checked: 0 },
    { label: "Depression", checked: 0 },
    { label: "Neck Problems", checked: 0 },
    { label: "Epilepsy", checked: 0 },
    { label: "Arthritis", checked: 0 },
    { label: "Heart Problems", checked: 0 },
    { label: "Anxiety", checked: 0 },
    { label: "Sleep Problems", checked: 0 },
    { label: "Sciatica", checked: 0 },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedConditions = conditions.map((condition, i) =>
      i === index
        ? { ...condition, checked: condition.checked ? 0 : 1 }
        : condition
    );
    setConditions(updatedConditions);
  };

  return (
    <div className="w-[100%] lg:w-[100%] h-[100vh]  blur-[0.2px] bg-[#000000ad] flex justify-center items-center absolute z-50">
      <div
        className="w-[95%] lg:w-[70%] h-[90vh] bg-white rounded shadow-sm"
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
              <div className="w-[90%] mt-4 mb-4" align="start">
                <TextInput
                  id="userid"
                  type="text"
                  name="id-l01"
                  placeholder="your name"
                  label="User ID"
                  required
                  // value={userId}
                  // onChange={(e) => setuserData(e.target.value)}
                />
              </div>

              <div className="w-[90%] mb-4" align="start">
                <TextInput
                  id="emailid"
                  type="email"
                  name="id-l01"
                  placeholder="your name"
                  label="Email ID"
                  required
                  // value={userId}
                  // onChange={(e) => setuserData(e.target.value)}
                />
              </div>
              <div
                className="w-[90%] h-[85px] flex justify-between"
                align="start"
              >
                <div className="w-[48%]">
                  <TextInput
                    id="fname"
                    type="text"
                    name="id-l01"
                    placeholder="your name"
                    label="First Name"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
                <div className="w-[48%]">
                  <TextInput
                    id="lname"
                    type="text"
                    name="id-l01"
                    placeholder="your name"
                    label="Last Name"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
              </div>

              <div
                className="w-[90%] h-[85px] flex justify-between"
                align="start"
              >
                <div className="w-[48%]">
                  <TextInput
                    id="phonenumber"
                    type="number"
                    name="id-l01"
                    placeholder="your name"
                    label="Phone Number"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
                <div className="w-[48%]">
                  <TextInput
                    id="whatsappno"
                    type="number"
                    name="id-l01"
                    placeholder="your name"
                    label="Whatsapp Number"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
              </div>

              <div
                className="w-[90%] h-[85px] flex justify-between"
                align="start"
              >
                <div className="w-[68%]">
                  <TextInput
                    id="dob"
                    type="date"
                    name="id-l01"
                    placeholder="your name"
                    label="Date of Birth"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
                <div className="w-[28%]">
                  <TextInput
                    id="age"
                    type="tel"
                    name="id-l01"
                    placeholder="your name"
                    label="Age"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
              </div>
              <div
                className="w-[90%] h-[85px] flex justify-between"
                align="start"
              >
                <SelectInput
                  id="gender"
                  name="gender"
                  label="Gender"
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                  ]}
                  required
                  // value={gender}
                  // onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <div className="w-[90%] mb-5" align="start">
                <TextInput
                  id="father"
                  type="text"
                  name="id-l01"
                  placeholder="your name"
                  label="Father / Husband Name"
                  required
                  // value={userId}
                  // onChange={(e) => setuserData(e.target.value)}
                />
              </div>

              <div
                className="w-[90%] h-[85px] flex justify-between"
                align="start"
              >
                <div className="w-[48%]">
                  <TextInput
                    id="qualification"
                    type="text"
                    name="id-l01"
                    placeholder="your name"
                    label="Qualification"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
                <div className="w-[48%]">
                  <TextInput
                    id="occupation"
                    type="text"
                    name="id-l01"
                    placeholder="your name"
                    label="Occupation"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
              </div>

              <div
                className="w-[90%] h-[80px] -mt-3 mb-3 flex justify-between items-center"
                align="start"
              >
                <CheckboxInput
                  checked={addessschecked}
                  id="bothaddress"
                  label="Both Temporary & Permanent Addresses are the same."
                  onChange={() => {
                    addessschecked
                      ? setAddressChecked(false)
                      : setAddressChecked(true);
                  }}
                />
              </div>
              <div
                className="w-[90%] h-[85px] flex flex-col justify-between"
                align="start"
              >
                {!addessschecked ? (
                  <div className="w-full" align="center">
                    <label className="text-[#45474b] h-[40px] text-[18px] font-semibold">
                      Temporary Address
                    </label>
                    <div className="w-[100%] mb-5">
                      <TextareaInput
                        id="tempaddress"
                        name="id-l01"
                        label="Residental Address"
                        placeholder="Write your message"
                        rows={3}
                        required
                        // value={address}
                        // onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div
                      className="w-[100%] h-[85px] flex justify-between"
                      align="start"
                    >
                      <div className="w-[48%]">
                        <div className="relative w-full">
                          <select
                            id="tempstate"
                            name="state"
                            required
                            onChange={handleStateChange}
                            className="relative w-full h-12 px-3 transition-all bg-white border-2 rounded outline-none appearance-none peer border-[#b3b4b6] text-[#4c4c4e] autofill:bg-white focus:border-[#ff5001] focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                          >
                            <option value="" disabled selected></option>
                            {states.map((state) => (
                              <option key={state.isoCode} value={state.isoCode}>
                                {state.name}
                              </option>
                            ))}
                          </select>
                          <label
                            htmlFor="tempstate"
                            className="pointer-events-none absolute top-3 left-2 z-[1] px-2 text-[14px] text-[#4c4c4e] transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-[#000000] peer-valid:-top-2 peer-valid:text-[14px] peer-focus:-top-2 peer-focus:text-[14px] peer-focus:text-[#ff5001] peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                          >
                            State
                          </label>
                        </div>
                      </div>

                      <div className="w-[48%]">
                        <div className="relative w-full">
                          <select
                            id="tempcity"
                            name="city"
                            required
                            disabled={!selectedState}
                            className="relative w-full h-12 px-3 transition-all bg-white border-2 rounded outline-none appearance-none peer border-[#b3b4b6] text-[#4c4c4e] autofill:bg-white focus:border-[#ff5001] focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                          >
                            <option value="" disabled selected></option>
                            {cities.map((city) => (
                              <option key={city.name} value={city.name}>
                                {city.name}
                              </option>
                            ))}
                          </select>
                          <label
                            htmlFor="tempcity"
                            className="pointer-events-none absolute top-3 left-2 z-[1] px-2 text-[14px] text-[#4c4c4e] transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-[#000000] peer-valid:-top-2 peer-valid:text-[14px] peer-focus:-top-2 peer-focus:text-[14px] peer-focus:text-[#ff5001] peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                          >
                            City
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] mb-5" align="start">
                      <TextInput
                        id="pincode"
                        type="tel"
                        name="id-l01"
                        placeholder="your name"
                        label="Pincode"
                        required
                        // value={userId}
                        // onChange={(e) => setuserData(e.target.value)}
                      />
                    </div>
                  </div>
                ) : null}

                <div className="w-full" align="center">
                  <label className="text-[#45474b] h-[40px] text-[18px] font-semibold">
                    Permanent Address
                  </label>
                  <div className="mb-5">
                    <TextareaInput
                      id="tempaddress"
                      name="id-l01"
                      label="Residental Address"
                      placeholder="Write your message"
                      rows={3}
                      required
                      // value={address}
                      // onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div
                    className="w-[100%] h-[85px] flex justify-between"
                    align="start"
                  >
                    <div className="w-[48%]">
                      <div className="relative w-full">
                        <select
                          id="permanentstate"
                          name="state"
                          required
                          onChange={handleStateChange}
                          className="relative w-full h-12 px-3 transition-all bg-white border-2 rounded outline-none appearance-none peer border-[#b3b4b6] text-[#4c4c4e] autofill:bg-white focus:border-[#ff5001] focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        >
                          <option value="" disabled selected></option>
                          {states.map((state) => (
                            <option key={state.isoCode} value={state.isoCode}>
                              {state.name}
                            </option>
                          ))}
                        </select>
                        <label
                          htmlFor="permanentstate"
                          className="pointer-events-none absolute top-3 left-2 z-[1] px-2 text-[14px] text-[#4c4c4e] transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-[#000000] peer-valid:-top-2 peer-valid:text-[14px] peer-focus:-top-2 peer-focus:text-[14px] peer-focus:text-[#ff5001] peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                          State
                        </label>
                      </div>
                    </div>

                    <div className="w-[48%]">
                      <div className="relative w-full">
                        <select
                          id="permanentcity"
                          name="city"
                          required
                          disabled={!selectedState}
                          className="relative w-full h-12 px-3 transition-all bg-white border-2 rounded outline-none appearance-none peer border-[#b3b4b6] text-[#4c4c4e] autofill:bg-white focus:border-[#ff5001] focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        >
                          <option value="" disabled selected></option>
                          {cities.map((city) => (
                            <option key={city.name} value={city.name}>
                              {city.name}
                            </option>
                          ))}
                        </select>
                        <label
                          htmlFor="permanentcity"
                          className="pointer-events-none absolute top-3 left-2 z-[1] px-2 text-[14px] text-[#4c4c4e] transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-[#000000] peer-valid:-top-2 peer-valid:text-[14px] peer-focus:-top-2 peer-focus:text-[14px] peer-focus:text-[#ff5001] peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                          City
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="w-[100%] mb-5" align="start">
                    <TextInput
                      id="perpincode"
                      type="tel"
                      name="id-l01"
                      placeholder="your name"
                      label="Pincode"
                      required
                      // value={userId}
                      // onChange={(e) => setuserData(e.target.value)}
                    />
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
            <div className="w-full h-[73vh] overflow-auto">
              <div
                className="w-[90%] mt-5 h-[85px] flex justify-between"
                align="start"
              >
                <div className="w-[48%]">
                  <TextInput
                    id="height"
                    type="tel"
                    name="id-l01"
                    placeholder="your name"
                    label="Height in CM"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
                <div className="w-[48%]">
                  <TextInput
                    id="weight"
                    type="tel"
                    name="id-l01"
                    placeholder="your name"
                    label="Weight in KG"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
              </div>

              <div
                className="w-[90%] -mt-1 h-[85px] flex justify-between"
                align="start"
              >
                <div className="w-[48%]">
                  <SelectInput
                    id="bloodgroup"
                    name="bloodgroup"
                    label="Blood Group"
                    options={[
                      { value: "A+", label: "A+" },
                      { value: "A-", label: "A-" },
                      { value: "B+", label: "B+" },
                      { value: "B-", label: "B-" },
                      { value: "AB+", label: "AB+" },
                      { value: "AB-", label: "AB-" },
                      { value: "O+", label: "O+" },
                      { value: "O-", label: "O-" },
                    ]}
                    required
                    // value={gender}
                    // onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <div className="w-[48%]">
                  <TextInput
                    id="bmi"
                    type="tel"
                    name="id-l01"
                    placeholder="your name"
                    label="BMI"
                    required
                    // value={userId}
                    // onChange={(e) => setuserData(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-[90%] mb-4" align="start">
                <TextInput
                  id="bp"
                  type="tel"
                  name="id-l01"
                  placeholder="your name"
                  label="BP"
                  required
                  // value={userId}
                  // onChange={(e) => setuserData(e.target.value)}
                />
              </div>

              <div className="w-[90%]" align="start">
                <div>
                  <TextLabel
                    label={"Recent injuries / Accidents / Operations"}
                  />
                </div>
                <div className="flex w-[90%] gap-x-10 mt-2">
                  <RadioButton
                    id="accidentyes"
                    value="yes"
                    name="accident"
                    selectedOption={selectedOption.accident || ""}
                    onChange={(e) => {
                      setSelectedOption({
                        ...selectedOption,
                        accident: e.target.value,
                      });
                    }}
                    label="Yes"
                  />
                  <RadioButton
                    id="accidentno"
                    value="no"
                    name="accident"
                    selectedOption={selectedOption.accident || ""}
                    onChange={(e) => {
                      setSelectedOption({
                        ...selectedOption,
                        accident: e.target.value,
                      });
                    }}
                    label="No"
                  />
                </div>
                <div className="mt-3 mb-4">
                  <TextareaInput
                    id="accidentdetail"
                    name="id-l01"
                    label="Details"
                    placeholder="Write your message"
                    rows={2}
                    disabled={selectedOption.accident === "yes" ? false : true}
                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-[90%]" align="start">
                <div>
                  <TextLabel label={"Recent breaks / Fractures / Sprains"} />
                </div>
                <div className="flex w-[90%] gap-x-10 mt-2">
                  <RadioButton
                    id="breaksyes"
                    value="yes"
                    name="breaks"
                    selectedOption={selectedOption.breaks || ""}
                    onChange={(e) => {
                      setSelectedOption({
                        ...selectedOption,
                        breaks: e.target.value,
                      });
                    }}
                    label="Yes"
                  />
                  <RadioButton
                    id="breaksno"
                    value="no"
                    name="breaks"
                    selectedOption={selectedOption.breaks || ""}
                    onChange={(e) => {
                      setSelectedOption({
                        ...selectedOption,
                        breaks: e.target.value,
                      });
                    }}
                    label="No"
                  />
                </div>
                <div className="mt-3 mb-5">
                  <TextareaInput
                    id="breaksdetail"
                    name="id-l01"
                    label="Details"
                    placeholder="Write your message"
                    rows={2}
                    disabled={selectedOption.breaks === "yes" ? false : true}
                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-[90%] mb-5">
                <div className="w-full">
                  <TextareaInput
                    id="otheractivities"
                    name="id-l01"
                    label="Other Activities"
                    placeholder="Write your message"
                    rows={2}
                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-[90%] mb-5">
                <div className="w-full">
                  <TextareaInput
                    id="anythingelse"
                    name="id-l01"
                    label="Anything else"
                    placeholder="Write your message"
                    rows={2}
                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-[90%] mb-5">
                <div className="mb-4" align="start">
                  <TextLabel label={"Preferable Timing"} />
                </div>
                <div className="w-full flex justify-between">
                  <div className="w-[48%]">
                    <TextInput
                      id="fromtiming"
                      name="id-l01"
                      type="time"
                      label="From Timing"
                      placeholder="Write your message"
                      rows={2}
                      // value={address}
                      // onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div className="w-[48%]">
                    <TextInput
                      id="totiming"
                      type="time"
                      name="id-l01"
                      label="To Timing"
                      placeholder="Write your message"
                      rows={2}
                      // value={address}
                      // onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
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
            <div className="w-full h-[73vh] overflow-auto">
              <div className="w-[90%] flex flex-wrap my-5 items-center justify-start gap-x-1 lg:gap-x-5 gap-y-5">
                {conditions.map((condition, index) => (
                  <div className="w-[145px]" key={index}>
                    <CheckboxInput
                      id={`condition-${index}`}
                      checked={condition.checked === 1}
                      label={condition.label}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  </div>
                ))}
              </div>

              <div className="w-[90%] mb-4">
                <TextareaInput
                  id="others"
                  name="id-l01"
                  label="Others"
                  placeholder="Write your message"
                  rows={2}
                  required
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="w-[90%] mb-4">
                <TextareaInput
                  id="medicationdetails"
                  name="id-l01"
                  label="Medication Details"
                  placeholder="Write your message"
                  rows={2}
                  required
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="w-[90%]" align="start">
                <div>
                  <TextLabel label={"Under Physicians Care"} />
                </div>
                <div className="flex w-[90%] gap-x-10 mt-2">
                  <RadioButton
                    id="careyes"
                    value="yes"
                    name="care"
                    selectedOption={selectedOption.care || ""}
                    onChange={(e) => {
                      setSelectedOption({
                        ...selectedOption,
                        care: e.target.value,
                      });
                    }}
                    label="Yes"
                  />
                  <RadioButton
                    id="careno"
                    value="no"
                    name="care"
                    selectedOption={selectedOption.care || ""}
                    onChange={(e) => {
                      setSelectedOption({
                        ...selectedOption,
                        care: e.target.value,
                      });
                    }}
                    label="No"
                  />
                </div>
                <div className="mt-4 mb-4">
                  <TextInput
                    id="doctorname"
                    type="text"
                    name="id-l01"
                    label="Doctor Name"
                    placeholder="Write your message"
                    rows={2}
                    disabled={selectedOption.care === "yes" ? false : true}
                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mt-3 mb-4">
                  <TextInput
                    id="hospital"
                    type="text"
                    name="id-l01"
                    label="Hospital"
                    placeholder="Write your message"
                    rows={2}
                    disabled={selectedOption.care === "yes" ? false : true}
                    // value={address}
                    // onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-[90%]" align="start">
                <div>
                  <TextLabel label={"Back Pain"} />
                </div>
                <div className="flex w-[90%] gap-x-10 mt-2">
                  <RadioButton
                    id="backpainyes"
                    value="yes"
                    name="backpain"
                    selectedOption={selectedOption.backpain || ""}
                    onChange={(e) => {
                      setSelectedOption({
                        ...selectedOption,
                        backpain: e.target.value,
                      });
                    }}
                    label="Yes"
                  />
                  <RadioButton
                    id="backpainno"
                    value="no"
                    name="backpain"
                    selectedOption={selectedOption.backpain || ""}
                    onChange={(e) => {
                      setSelectedOption({
                        ...selectedOption,
                        backpain: e.target.value,
                      });
                    }}
                    label="No"
                  />
                </div>
                <div className="mt-4 mb-4">
                  <SelectInput
                    id="pain"
                    name="gender"
                    label="Pain Scale"
                    options={[
                      { value: "upper", label: "Upper" },
                      { value: "middle", label: "Middle" },
                      { value: "lower", label: "Lower" },
                    ]}
                    disabled={selectedOption.backpain === "yes" ? false : true}
                    required
                    // value={gender}
                    // onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </div>
            </div>
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
            <div className="w-full h-[73vh] overflow-auto">
              <div className="w-[90%] my-5">
                <TextareaInput
                  id="durationproblem"
                  name="id-l01"
                  label="Duration of the Problem"
                  placeholder="Write your message"
                  rows={2}
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="w-[90%] mb-5">
                <TextareaInput
                  id="relevantpasthistory"
                  name="id-l01"
                  label="Relevant past History"
                  placeholder="Write your message"
                  rows={2}
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="w-[90%] mb-5">
                <TextareaInput
                  id="relevantfamilyhistory"
                  name="id-l01"
                  label="Relevant Family History"
                  placeholder="Write your message"
                  rows={2}
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="w-[90%] mb-5">
                <TextareaInput
                  id="anythingelsetherapy"
                  name="id-l01"
                  label="Anything else"
                  placeholder="Write your message"
                  rows={2}
                  // value={address}
                  // onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="w-[90%] mb-5">
                <div className="text-[#45474b] text-[16px] font-semibold text-justify">
                  Disclaimer (Please Read Carefully) I have given all
                  information relevant for yoga class. I Understand that the
                  information given is strictly confidential.lf at any time
                  during the session, you feel discomfort or strain, gently come
                  out of the posture.You may rest at any time during the
                  class.lt is Important in Yoga that you listen to your body and
                  respect its limits on any given day.All purchases of services
                  (classes, workshops, events, therapy) are non-refundable. Fees
                  cannot be transferred or carry forward in any manner. I should
                  consult 'My Doctor' prior to beginning any program, including
                  Yoga for my overall wellbeing. I recognize that it is my
                  responsibility to notify my 'Instructor' of any serious
                  illness or injury before the Yoga Session. I will not perform
                  any postures to the extent of strain or pain I accept that
                  neither the 'Instructor', nor the 'Hosting Facility' is Liable
                  for any Injury, or Damages, to person or property, resulting
                  from participating in these sessions.
                </div>
              </div>

              <div className="w-[90%] mb-5">
                <CheckboxInput
                  checked={agreementchecked}
                  id="agreementchecked"
                  label="Agree Terms & Conditions"
                  onChange={() => {
                    agreementchecked
                      ? setAgreementchecked(false)
                      : setAgreementchecked(true);
                  }}
                />
              </div>
            </div>
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
                Register&nbsp;&nbsp;
                <i class="fa-solid fa-check"></i>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationStepper;
