import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Space } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { cancelOrderAsync, fetchUserOrdersAsync } from "../userSlice";
import { DISCOUNTED_PRICE } from "./../../../app/constants";

const UserOrders = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state?.auth?.user?._id);
  const orders = useSelector((state) => state?.user?.orders?.orders);

  const { confirm } = Modal;

  useEffect(() => {
    dispatch(fetchUserOrdersAsync());
  }, [dispatch, userId]);

  const showCancelOrderConfirm = (orderId) => {
    confirm({
      title: "Are You Sure To Cancel The Order!",
      icon: <ExclamationCircleFilled />,
      content:
        "Order will be cancelled and refund will be processed withing next 48 hours if any",
      okType: "danger",
      onOk() {
        dispatch(cancelOrderAsync(orderId));
      },
      onCancel() {},
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10 bg-white py-4 space-y-12">
      {orders?.map((order) => (
        <div key={order?._id} className="border-b-4 border-red-700">
          <h1 className="sm:text-2xl text-sm font-bold text-gray-900 shadow-cyan-800 shadow  inline border-none py-1 px-4">
            Order Id: {order?._id}
          </h1>
          <div className="flex justify-between my-4">
            <p className="sm:text-lg text-base font-medium font-serif text-gray-900">
              Order Status:{" "}
              <span className="text-green-700">{order?.status}</span>
            </p>
            {order?.paymentStatus && (
              <p className="sm:text-lg text-base font-medium font-serif text-gray-900">
                Payment Status:{" "}
                <span className="text-green-700">{order?.paymentStatus}</span>
              </p>
            )}
            {order?.status !== "cancelled" ? (
              <Space wrap>
                <button
                  onClick={() => showCancelOrderConfirm(order?._id)}
                  className="py-1 px-2 font-medium font-serif rounded-lg bg-red-700 text-white hover:bg-red-600 active:bg-red-700"
                >
                  Cancel Order
                </button>
              </Space>
            ) : null}
          </div>

          <div className="bg-gray-200 border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {order?.products?.map((product) => (
                  <li key={product?._id} className="flex py-6">
                    <Link to={`/product-details/${product?.product_id?._id}`}>
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 hover:opacity-80 active:opacity-100">
                        <img
                          src={`/${product?.product_id?.thumbnail?.location}`}
                          alt={product?.product_id?.product_name}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </Link>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <Link
                            to={`/product-details/${product?.product_id?._id}`}
                          >
                            <h3 className="text-md text-blue-700 shadow-md px-4 py-1 hover:shadow active:shadow-md">
                              {product?.product_id?.product_name}
                            </h3>
                          </Link>
                          <p className="ml-4">
                            ${DISCOUNTED_PRICE(product?.product_id)}
                          </p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {product?.product_id?.color || "Magenta"}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          Quantity:{" "}
                          <span className="font-bold">{product?.quantity}</span>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Total Amount, Items and payment Method */}
          <div className="bg-gray-50 border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>${order?.totalAmount}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total Items</p>
              <p>{order?.totalItems}</p>
            </div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Payment Method</p>
              <p>{order?.paymentMethod}</p>
            </div>
          </div>

          {/* Shipping Address */}
          <ul className="bg-gray-200 border-t border-gray-200 px-4 py-6 sm:px-6">
            <li>
              <div className=" min-w-0 gap-x-4p-2">
                <h1 className="font-serif">Shipping Address</h1>
                <label className="flex justify-between gap-x-6 py-3">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {`${order?.shippingAddress?.firstName} ${order?.shippingAddress?.lastName}`}
                    </p>
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {order?.shippingAddress?.city}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {order?.shippingAddress?.mobileNumber}
                    </p>
                  </div>
                  <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">
                      {order?.shippingAddress?.village}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {order?.shippingAddress?.dist}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {order?.shippingAddress?.state}
                    </p>
                    <p className="text-sm leading-6 text-gray-900">
                      {order?.shippingAddress?.pinCode}
                    </p>
                  </div>
                </label>
              </div>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserOrders;
