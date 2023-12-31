import axios from "axios";
import toast from "react-hot-toast";

//Create Product
export const createProduct = async (newProduct) => {
  try {
    const { data } = await axios.post(
      "/api/v1/product/admin/create-product",
      newProduct
    );

    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }
  } catch (error) {
    if (error.response && error.response.status === 409) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While creating the product"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While creating the product",
    };
  }
};

//Delete Product
export const deleteProduct = async (productId) => {
  try {
    const { data } = await axios.delete(
      `/api/v1/product/admin/delete-product/${productId}`
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return success;
    }

    toast.error(message);
    return success;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While deleting the product"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While deleting the product",
    };
  }
};

//Restore Product
export const restoreProduct = async (productId) => {
  try {
    const { data } = await axios.put(
      `/api/v1/product/admin/restore-product/${productId}`
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return success;
    }

    toast.error(message);
    return success;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While restoring the product"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While restoring the product",
    };
  }
};

//Update Product Data
export const updateProductData = async (productId, productData) => {
  try {
    const { data } = await axios.put(
      `/api/v1/product/admin/update-product/${productId}`,
      productData
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the product"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the product",
    };
  }
};

//Change/update Product thumbnail
export const updateProductThumbnail = async (productId, thumbnail) => {
  try {
    const { data } = await axios.put(
      `/api/v1/product/admin/update-product-thumbnail/${productId}`,
      thumbnail
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the product thumbnail"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the product thumbnail",
    };
  }
};

//Change/update Product image
export const updateProductImage = async (productId, image, imageIndex) => {
  try {
    const { data } = await axios.put(
      `/api/v1/product/admin/update-product-image/${productId}/${imageIndex}`,
      image
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the product image"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the product image",
    };
  }
};

//Create Category
export const createCategory = async (newCategory) => {
  try {
    const { data } = await axios.post(
      "/api/v1/category/admin/create-category",
      newCategory
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While creating the category"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While creating the category",
    };
  }
};

//Delete Category
export const deleteCategory = async (categoryId) => {
  try {
    const { data } = await axios.delete(
      `/api/v1/category/admin/delete-category/${categoryId}`
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return success;
    }

    toast.error(message);
    return success;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While Deleting the Category"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While Deleting the Category",
    };
  }
};

//Restore Category
export const restoreCategory = async (categoryId) => {
  try {
    const { data } = await axios.put(
      `/api/v1/category/admin/restore-category/${categoryId}`
    );
    const { success, message } = data;
    if (success) {
      toast.success(message);
      return success;
    }

    toast.error(message);
    return success;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While Restoring the Category"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While Restoring the Category",
    };
  }
};

//Update Category Name
export const updateCategoryName = async (categoryId, category_name) => {
  try {
    const { data } = await axios.put(
      `/api/v1/category/admin/update-category/${categoryId}`,
      {
        category_name,
      }
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the Category name"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the Category name",
    };
  }
};

//Update Category Image
export const updateCategoryImage = async (categoryId, image) => {
  try {
    const { data } = await axios.put(
      `/api/v1/category/admin/update-category-image/${categoryId}`,
      image
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the Category image"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the Category image",
    };
  }
};

//Create Brand
export const createBrand = async (newBrand) => {
  try {
    const { data } = await axios.post(
      "/api/v1/brand/admin/create-brand",
      newBrand
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return data;
  } catch (error) {
    if (error.response && error.response.status === 409) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While creating the Brand"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While creating the Brand",
    };
  }
};

//Delete Brand
export const deleteBrand = async (brandId) => {
  try {
    const { data } = await axios.delete(
      `/api/v1/brand/admin/delete-brand/${brandId}`
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return success;
    }

    toast.error(message);
    return success;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While creating the Brand"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While creating the Brand",
    };
  }
};

//Restore Brand
export const restoreBrand = async (brandId) => {
  try {
    const { data } = await axios.put(
      `/api/v1/brand/admin/restore-brand/${brandId}`
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return success;
    }

    toast.error(message);
    return success;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While Restoring the Brand"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While Restoring the Brand",
    };
  }
};

//Update Brand Name
export const updateBrandName = async (brandId, brand_name) => {
  try {
    const { data } = await axios.put(
      `/api/v1/brand/admin/update-brand/${brandId}`,
      {
        brand_name,
      }
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the Brand name"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the Brand name",
    };
  }
};

//Update Brand Image
export const updateBrandImage = async (brandId, image) => {
  try {
    const { data } = await axios.put(
      `/api/v1/brand/admin/update-brand-image/${brandId}`,
      image
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the Brand image"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the Brand image",
    };
  }
};

//Fetch All/Filtered Orders
export const getAllFilteredOrders = async (ordersQueryString) => {
  try {
    const { data } = await axios.get(
      `/api/v1/order/admin/get-all-filtered-orders?${ordersQueryString}`
    );
    const { success, message } = data;

    if (success) {
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While fetching the orders"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While fetching the orders",
    };
  }
};

//Update Order Status
export const updateOrderStatus = async (orderId, orderStatus) => {
  try {
    const { data } = await axios.put(
      `/api/v1/order/admin/update-order-status/${orderId}/${orderStatus}`
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(
        error?.response?.data?.message || "Provide Order Status To Update"
      );
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the order status"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the order status",
    };
  }
};

//Update Payment Status
export const updateOrderPaymentStatus = async (orderId, paymentStatus) => {
  try {
    const { data } = await axios.put(
      `/api/v1/order/admin/update-payment-status/${orderId}/${paymentStatus}`
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the order status"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the order status",
    };
  }
};

//get Order Details
export const getOrderDetails = async (orderId) => {
  try {
    const { data } = await axios.get(
      `/api/v1/order/admin/get-order-details/${orderId}`
    );
    const { success, message } = data;

    if (success) {
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While fetching the order details"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While fetching the order details",
    };
  }
};

//Update Promo image
export const updatePromoImage = async (image, imageIndex) => {
  try {
    const { data } = await axios.put(
      `/api/v1/promo/admin/update-promo-image/${imageIndex}`,
      image
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the promo image"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the promo image",
    };
  }
};

//Update Promo
export const updatePromo = async (updateData) => {
  try {
    const { data } = await axios.put(
      `/api/v1/promo/admin/update-promo`,
      updateData
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error(error?.response?.data?.message);
      return { success: false, message: error?.response?.data?.message };
    } else if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While updating the promo"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While updating the promo",
    };
  }
};

//Create Promo
export const createPromo = async (promoData) => {
  try {
    const { data } = await axios.post(
      `/api/v1/promo/admin/create-promo`,
      promoData
    );
    const { success, message } = data;

    if (success) {
      toast.success(message);
      return data;
    }

    toast.error(message);
    return { success, message };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      toast(error?.response?.data?.message, {
        className: "font-serif bg-blue-900 text-white",
      });
      return { success: false, message: error?.response?.data?.message };
    }

    toast.error(
      error?.response?.data?.message ||
        "Something Went Wrong While creating the promo"
    );
    return {
      success: false,
      message:
        error?.response?.data?.message ||
        "Something Went Wrong While creating the promo",
    };
  }
};
