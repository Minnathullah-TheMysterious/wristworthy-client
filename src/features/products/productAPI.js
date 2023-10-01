import axios from "axios";
import toast from "react-hot-toast";

export const fetchAllProductsByFilters = async (filter, sort, pagination) => {
  //filter = {category:['smartphones', 'laptops'], brand:['apple', 'samsung'], lowerPriceLimit: [number], higherPriceLimit: [number]}
  //sort = {_sort: 'price', _order: 'desc'}
  //pagination = {_page: 1, _limit: 10}

  console.log(filter, sort, pagination);

  const filterQueryParams = Object.entries(filter)
    .map(([key, values]) => values.map((value) => `${key}=${value}`))
    .flat()
    .join("&");

  console.log("Filter Query Params: ", filterQueryParams);

  let sortingQueryParams = "";
  for (const key in sort) {
    const sortingValue = sort[key];
    sortingQueryParams = sortingQueryParams + `${key}=${sortingValue}&`;
  }
  console.log("Sorting Query Params: ", sortingQueryParams);

  let paginationQueryParams = "";
  for (const key in pagination) {
    const paginationValue = pagination[key];
    paginationQueryParams =
      paginationQueryParams + `${key}=${paginationValue}&`;
  }
  console.log("Pagination Query Params: ", paginationQueryParams);

  const filteredProductsAPI = `/api/v1/product/get-filtered-products?${paginationQueryParams}&${filterQueryParams}&${sortingQueryParams}`;

  try {
    const { data } = await axios.get(filteredProductsAPI);
    const { success } = data;
    if (success) {
      // toast.success(message);
      return data;
    }
  } catch (error) {
    toast.error(error.message);
    console.error("Error fetching filtered products:", error);
    throw new Error({ success: false, error: error.message });
  }
};

export const fetchCategories = async () => {
  try {
    const { data } = await axios.get("/api/v1/category/get-all-categories");
    console.log(data);
    return data;
  } catch (error) {
    console.error(
      "Something Went Wrong in fetching the categories - client",
      error
    );
  }
};

export const fetchBrands = async () => {
  try {
    const { data } = await axios.get("/api/v1/brand/get-all-brands");
    console.log(data);
    return data;
  } catch (error) {
    console.error(
      "Something Went Wrong in fetching the brands - client",
      error
    );
  }
};

export const fetchSelectedProduct = async (productId) => {
  try {
    const { data } = await axios.get(
      `/api/v1/product/get-selected-product/${productId}`
    );
    const { success, message, selectedProduct } = data;
    if (success) {
      // toast.success(message);
      return selectedProduct;
    } else {
      toast.error(message);
      return data;
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    } else {
      console.error(
        "Something Went Wrong while fetching the selected product",
        error
      );
      toast.error("Something Went Wrong while fetching the selected product");
      return { success: false, message: error?.response?.data?.message };
    }
  }
};

export const updateProductStock = async (productId, productQuantity) => {
  try {
    const { data } = await axios.put(
      `/api/v1/product/user/update-product-stock/${productId}/${productQuantity}`
    );
    const { success } = data;
    if (success) {
      return data;
    } else {
      return data;
    }
  } catch (error) {
    console.error(
      error?.response?.data?.message ||
        error ||
        "Something Went Wrong while updating product stock"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        error ||
        "Something Went Wrong while updating product stock",
    };
  }
};
