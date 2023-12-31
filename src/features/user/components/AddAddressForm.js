import React, { useReducer, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useDispatch } from "react-redux";
import { addUserAddressAsync } from "../userSlice";

const AddAddressForm = ({ setIsAddAddressEnabled }) => {
  const dispatchAsync = useDispatch();
  const [mobileNumber, setMobileNumber] = useState("");
  const [altMobileNumber, setAltMobileNumber] = useState("");

  const initialState = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    country: "india",
    state: "",
    city: "",
    dist: "",
    village: "",
    mandal: "",
    street: "",
    pinCode: 506367,
  };

  const userAddressReducer = (state, action) => {
    switch (action.type) {
      case "UPDATE_FIELD":
        return { ...state, [action.field]: action.value };
      case "UPDATE_FORM":
        return initialState;
      default:
        return state;
    }
  };

  const [userAddressData, dispatch] = useReducer(
    userAddressReducer,
    initialState
  );

  const handleFieldChange = (field, value) => {
    dispatch({ type: "UPDATE_FIELD", field, value });
  };

  const addressData = { ...userAddressData, mobileNumber, altMobileNumber };

  const handleAddAddressClick = async (e) => {
    e.preventDefault();
    try {
      dispatchAsync(addUserAddressAsync(addressData)).then(() =>
        setIsAddAddressEnabled(false)
      );
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleResetFormClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_FORM" });
    setMobileNumber("");
    setAltMobileNumber("");
  };

  return (
    <>
      <div className="border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold leading-7 text-gray-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm leading-6 text-gray-600">
          Use a permanent address where you can receive mail.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("firstName", e.target.value)}
                value={userAddressData.firstName}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("lastName", e.target.value)}
                value={userAddressData.lastName}
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) =>
                  handleFieldChange("emailAddress", e.target.value)
                }
                value={userAddressData.emailAddress}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="mob-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Mobile Number
            </label>
            <div className="mt-2">
              <PhoneInput
                id="mob-number"
                name="mob-number"
                type="tel"
                autoComplete="phone"
                required
                onChange={setMobileNumber}
                value={mobileNumber}
                defaultCountry="IN"
                className="w-full rounded-md border-0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="alt-number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Alternate Number
            </label>
            <div className="mt-2">
              <PhoneInput
                id="alt-number"
                name="alt-number"
                type="tel"
                autoComplete="phone"
                required
                onChange={setAltMobileNumber}
                value={altMobileNumber}
                defaultCountry="IN"
                className="w-full rounded-md border-0 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Country
            </label>
            <div className="mt-2">
              <select
                onChange={(e) => handleFieldChange("country", e.target.value)}
                value={userAddressData.country}
                id="country"
                name="country"
                autoComplete="country-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option value={"india"}>India</option>
                <option value={"nepal"}>Nepal</option>
              </select>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Street address
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("street", e.target.value)}
                value={userAddressData.street}
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="city"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              City
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("city", e.target.value)}
                value={userAddressData.city}
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="region"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              State / Province
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("state", e.target.value)}
                value={userAddressData.state}
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              ZIP / Postal code
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("pinCode", e.target.value)}
                value={userAddressData.pinCode}
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2 sm:col-start-1">
            <label
              htmlFor="dist"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              District
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("dist", e.target.value)}
                value={userAddressData.dist}
                type="text"
                name="dist"
                id="dist"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="town"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Town / Mandal
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("mandal", e.target.value)}
                value={userAddressData.mandal}
                type="text"
                name="town"
                id="town"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="village"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Village
            </label>
            <div className="mt-2">
              <input
                onChange={(e) => handleFieldChange("village", e.target.value)}
                value={userAddressData.village}
                type="text"
                name="village"
                id="village"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end mt-6 space-x-6">
          <button
            className="bg-sky-800 py-2 px-4 rounded-lg text-white font-serif hover:bg-sky-700 active:bg-sky-800"
            onClick={(e) => handleAddAddressClick(e)}
          >
            Add Address
          </button>
          <button
            className="hover:bg-sky-800 hover:text-white py-2 px-4 rounded-lg text-black font-serif border-sky-800 "
            onClick={(e) => handleResetFormClick(e)}
          >
            Reset Form
          </button>
        </div>
      </div>
    </>
  );
};

export default AddAddressForm;
