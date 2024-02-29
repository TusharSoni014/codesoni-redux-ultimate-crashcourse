import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface storeSliceType {
  products: Array<EcomItem>;
}

const initialState: storeSliceType = {
  products: [],
};

const storeSlice = createSlice({
  name: "storeSlice",
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<EcomItem[]>) => {
      state.products = action.payload;
    },
  },
});

export const { updateProducts } = storeSlice.actions;
export default storeSlice.reducer;
