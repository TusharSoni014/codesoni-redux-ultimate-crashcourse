import ShopPageItem from "@/components/ShopPageItem";
import { useEffect, useState } from "react";

export default function Shop() {
  const [storeItems, setStoreItems] = useState<EcomItem[]>([]);
  const [shopLoading, setShopLoading] = useState<boolean>(true);

  const fetchStoreItems = async () => {
    setShopLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const responseJson = await response.json();
      setStoreItems(responseJson);
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
