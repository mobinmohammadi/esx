import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/api";

export const get_seller_requsts = createAsyncThunk(
  "sellers/get_seller_requsts",
  async (
    { searchValue, page, parPage },
    { rejectWithValue, fulfillWithValue },
  ) => {
    try {
      const { data } = await api.get(
        `/get-seller-requsts?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        {
          withCredentials: true,
        },
      );

      return fulfillWithValue(data);
    } catch (error) {
      console.log("error ===> ", error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);
// End ---------------------------------

export const get_sellers = createAsyncThunk(
  "sellers/get_sellers",
  async (
    { searchValue, page, parPage },
    { rejectWithValue, fulfillWithValue },
  ) => {
    try {
      const { data } = await api.get(
        `/get-sellers?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
        {
          withCredentials: true,
        },
      );

      return fulfillWithValue(data);
    } catch (error) {
      console.log("error ===> ", error.response.data);
      return rejectWithValue(error.response.data);
    }
  },
);

// End ---------------------------------

export const get_seller_details = createAsyncThunk(
  "sellers/get_seller_details",
  async (productId, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await api.get(`/get-seller-details/${productId}`, {
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

export const sellerReducer = createSlice({
  name: "sellers",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    sellers: [],
    sellerInfo: {},
    totalSellers: "",
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(get_sellers.pending, (state) => {
        state.loader = true;
      })

      .addCase(get_sellers.fulfilled, (state, { payload }) => {
        state.loader = false;

        state.sellers = payload.sellers;
        state.totalSellers = payload.totalSellers;
        console.log(payload);
      })
      // End ---------------------------------

      .addCase(get_seller_requsts.pending, (state) => {
        state.loader = true;
      })

      .addCase(get_seller_requsts.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.sellers = payload.sellers;
        state.totalSellers = payload.totalSellers;
        console.log(payload);
      })
      .addCase(get_seller_requsts.rejected, (state, { payload }) => {
        state.loader = true;
        state.errorMessage = payload.message;
      })
      // End ---------------------------------

      .addCase(get_seller_details.pending, (state) => {
        state.loader = true;
      })

      .addCase(get_seller_details.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.sellerInfo = payload.sellerInfo;
        console.log(payload);
      })
      .addCase(get_seller_details.rejected, (state, { payload }) => {
        state.loader = true;
        state.errorMessage = payload.message;
      });
    // End ---------------------------------
  },
});

export const { messageClear } = sellerReducer.actions;
export default sellerReducer.reducer;
