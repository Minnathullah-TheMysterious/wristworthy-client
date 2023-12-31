import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserAddressAsync } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { FiAlertTriangle } from "react-icons/fi";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state?.user?.userInfo);

  const { confirm } = Modal;

  const handleDeleteAddress = (addressId) => {
    confirm({
      title: `Are you sure to delete this address?`,
      icon: <FiAlertTriangle className="font-bold text-red-700 text-2xl" />,
      content: "Be Careful! The address will be deleted permanently",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        try {
          dispatch(deleteUserAddressAsync(addressId));
        } catch (error) {
          console.error(error.message);
        }
      },
      onCancel() {},
    });
  };

  const handleEditAddress = () => {
    navigate("/dashboard/user/addresses");
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 bg-white py-4 space-y-12">
      <div className="space-y-2">
        <h1 className="sm:text-2xl text-base font-bold font-serif text-gray-900 shadow-cyan-800 shadow  inline border-none py-1 px-4">
          User Name: {user?.user_name}
        </h1>
        <p className="sm:text-lg text-base font-medium font-serif text-gray-900">
          Email Id:{" "}
          <span className="text-green-700 font-sans">{user?.email}</span>
        </p>
        <p className="sm:text-lg text-base font-medium font-serif text-gray-900">
          Phone Number:{" "}
          <span className="text-green-700 font-sans">{user?.phone}</span>
        </p>
      </div>

      {/* User Addresses */}
      <div className="my-6">
        <h1 className="font-serif font-bold text-2xl">Addresses</h1>
        <ul>
          {user?.addresses?.map((address) => (
            <li key={address._id} className="odd:bg-gray-200 px-6">
              <div className=" min-w-0 gap-x-4p-2">
                <label className="flex justify-between py-6">
                  <div className="min-w-0 flex flex-col">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {`${address?.firstName} ${address?.lastName}`}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {address?.city}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {address?.mobileNumber}
                    </p>
                  </div>
                  <div className="hidden sm:flex-shrink  sm:flex sm:flex-col">
                    <p className="text-sm leading-6 text-gray-900">
                      {address?.village}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {address?.dist}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {address?.state}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {address?.pinCode}
                    </p>
                  </div>
                  <div className="flex flex-shrink flex-col space-y-4">
                    <div
                      onClick={handleEditAddress}
                      className=" bg-green-800 text-white font-serif font-medium px-4 py-1 rounded-lg active:text-gray-300 hover:bg-green-700 hover:cursor-pointer"
                    >
                      Edit
                    </div>
                    <div
                      onClick={() => handleDeleteAddress(address._id)}
                      className="bg-red-800 text-white font-serif font-medium px-4 py-1 rounded-lg active:text-gray-300 hover:bg-red-700 hover:cursor-pointer"
                    >
                      Delete
                    </div>
                  </div>
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
