import ShopPageItem from "@/components/ShopPageItem";
import {
  fetchStoreItemsThunk,
} from "@/redux/slices/storeSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Shop() {
  const storeItems = useSelector(
    (state: RootState) => state.storeSlice.products
  );
  const dispatch = useDispatch<AppDispatch>();
  const shopLoading = useSelector(
    (state: RootState) => state.storeSlice.loading
  );

  useEffect(() => {
    dispatch(fetchStoreItemsThunk());
  }, []);

  return !shopLoading ? (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 p-3">
      {storeItems.map((item) => {
        return <ShopPageItem key={item.id} data={item} />;
      })}
    </div>
  ) : (
    <div className="w-full h-[calc(100vh-64px)] flex justify-center items-center">
      Loading Shop Items...
    </div>
  );
}
