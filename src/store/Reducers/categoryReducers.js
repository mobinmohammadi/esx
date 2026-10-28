import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "./../../api/api";
import { useEffect } from "react";

export const category_add = createAsyncThunk(
  "category/category_add",
  async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("image", image);

      const { data } = await api.post("/category-add", formData, {
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

export const category_get = createAsyncThunk(
  "category/category_get",
  async (
    { searchValue, page, parPage },
    { rejectWithValue, fulfillWithValue },
  ) => {
    try {
      const { data } = await api.get(
        `/get-category?page=${page}&&searchValue=${searchValue}&&parPage=${parPage}`,
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

export const categoryReducer = createSlice({
  name: "category",
  initialState: {
    successMessage: "",
    errorMessage: "",
    loader: false,
    categoris: [],
    totalCategory: "",
  },

  reducers: {
    messageClear: (state, _) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(category_add.pending, (state) => {
        state.loader = true;
      })
      .addCase(category_add.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.successMessage = "category added succussfully";
        state.categoris = [...state.categoris, payload.category];
      })
      .addCase(category_add.rejected, (state, { payload }) => {
        state.loader = false;
        state.errorMessage = payload.error;
      })

      .addCase(category_get.pending, (state) => {
        state.loader = true;
      })

      .addCase(category_get.fulfilled, (state, { payload }) => {
        state.loader = false;
        state.categoris = payload.category;
        state.totalCategory = payload.totalCategory;
      });
  },
});

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;
