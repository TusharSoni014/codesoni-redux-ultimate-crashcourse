import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface cartSliceType {
  cartItems: EcomItem[];
}

const initialState: cartSliceType = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<EcomItem>) => {
      const existingItem = state.cartItems.filter(
        (item) => item.id === action.payload.id
      );
      if (existingItem.length === 0) {
        state.cartItems.push(action.payload);
        toast("Added to cart!");
      } else {
        toast("Item Already Added to cart!");
      }
    },
    removeFromCart: (state, action: PayloadAction<EcomItem["id"]>) => {
      const filterCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartItems = filterCartItems;
      toast("Item removed from cart!");
    },
    emptyCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
