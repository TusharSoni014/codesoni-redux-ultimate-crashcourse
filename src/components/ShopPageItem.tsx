import { Button } from "./ui/button";

export default function ShopPageItem({ data }: { data: EcomItem }) {
  return (
    !data.images[0].includes("[") && (
      <div className="rounded flex flex-col bg-gray-800 p-3 gap-3 justify-between relative">
        <div className="flex flex-col gap-3 ">
          <img src={data.images[0]} alt="" />
          <div className="text-center text-green-700 font-bold absolute top-1 right-1 rounded-full aspect-square bg-white p-1 text-lg">
            ${data.price}
          </div>
          <p className="font-semibold">{data.title}</p>
          <small className="text-gray-500 text-xs">{data.description}</small>
        </div>
        <Button className="w-full">Add to Cart +</Button>
      </div>
    )
  );
}
