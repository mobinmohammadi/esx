import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const add_product = createAsyncThunk(
  "products/add_product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.post("/add-product", product, {
        withCredentials: true,
      });
      console.log("data ==> ", data);

      return fulfillWithValue(data);
    } catch (error) {
      console.log("error ===> ", error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const get_products = createAsyncThunk(
  "products/get_products",
  async (
    { searchValue, page, parPage },
    { rejectWithValue, fulfillWithValue },
  ) => {
    try {
      const { data } = await api.get(
        `/get-products?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        {
          withCredentials: true,
        },
      );
      console.log("data ==> ", data);

      return fulfillWithValue(data);
    } catch (error) {
      console.log("error ===> ", error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

// End ---------------------------------

export const get_product = createAsyncThunk(
  "products/get_product",
  async (productId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/get-product/${productId}`, {
        withCredentials: true,
      });

      return fulfillWithValue(data);
    } catch (error) {
      console.log("error ===> ", error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

// End ---------------------------------

export const update_product = createAsyncThunk(
  "products/update_product",
  async (product, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.put(`/update-product`, product, {
        withCredentials: true,
      });

      return fulfillWithValue(data);
    } catch (error) {
      console.log("error ===> ", error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

// End ---------------------------------

export const update_product_image = createAsyncThunk(
  "products/update_product_image",
  async (
    { oldImage, newImg, productId },
    { rejectWithValue, fulfillWithValue },
  ) => {
    try {
      const formData = new FormData();
      formData.append("oldImage", oldImage);
      formData.append("newImg", newImg);
      formData.append("productId", productId);

      const { data } = await api.put(`/update-product-image`, formData, {
        withCredentials: true,
      });

      return fulfillWithValue(data);
    } catch (error) {
      console.log("error ===> ", error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

export const productsReducer = createSlice({
  name: "products",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    products: [],
    product: "",
    totalProducts: 0,
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(add_product.pending, (state) => {
        state.loader = true;
      })
      .addCase(add_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })
      .addCase(add_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = "Product Added succussfully";
        state.products = [...state.products, payload.product];
      })

      // End ---------------------------------

      .addCase(get_products.pending, (state) => {
        state.loader = true;
      })

      .addCase(get_products.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.products = payload.products;
        state.totalProducts = payload.totalProducts;
        console.log("payload ===> ", payload);
      })
      .addCase(get_products.rejected, (state, { payload }) => {
        state.loader = false;
        state.products = payload.products;
        state.totalProducts = payload.totalProducts;
        console.log("payload ===> ", payload);
      })

      // End ---------------------------------

      .addCase(get_product.pending, (state) => {
        state.loader = true;
      })

      .addCase(get_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.product = payload.product;
      })

      .addCase(get_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
        console.log("error ===> ", payload);
      })

      // End ---------------------------------

      .addCase(update_product.pending, (state) => {
        state.loader = true;
      })

      .addCase(update_product.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.product = payload.product;
      })

      .addCase(update_product.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
        state.errorMessage = payload.message;
      })

      
    // End ---------------------------------

     .addCase(update_product_image.pending, (state) => {
        state.loader = true;
      })

      .addCase(update_product_image.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = payload.message;
        state.product = payload.product;
      })

      .addCase(update_product_image.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
        state.errorMessage = payload.message;
      });

    // End ---------------------------------
  },
});
export const { messageClear } = productsReducer.actions;
export default productsReducer.reducer;
