import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchStoreItemsThunk = createAsyncThunk<EcomItem[], void>(
  "fetch/storeItems",
  async (body, thunkApi) => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

interface storeSliceType {
  products: Array<EcomItem>;
  loading: boolean;
  error: string | undefined;
}

const initialState: storeSliceType = {
  products: [],
  loading: false,
  error: undefined,
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<EcomItem[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStoreItemsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchStoreItemsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStoreItemsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { updateProducts } = storeSlice.actions;
export default storeSlice.reducer;
