import ShopPageItem from "@/components/ShopPageItem";
import { updateProducts } from "@/redux/slices/storeSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Shop() {
  const storeItems = useSelector(
    (state: RootState) => state.storeSlice.products
  );
  const dispatch = useDispatch();

  const [shopLoading, setShopLoading] = useState<boolean>(true);

  const fetchStoreItems = async () => {
    setShopLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJson:EcomItem[] = await response.json();
      dispatch(updateProducts(responseJson));
    } catch (error) {
      console.log(error);
    } finally {
      setShopLoading(false);
    }
  };

  useEffect(() => {
    fetchStoreItems();
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
