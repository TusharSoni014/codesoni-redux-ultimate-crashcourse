import { Button } from "./ui/button";

export default function ShopPageItem({ data }: { data: EcomItem }) {
  return (
    <div className="rounded flex flex-col bg-gray-800 p-3 gap-3 justify-between relative">
      <div className="flex flex-col gap-3 ">
        <div className="__img_container bg-white rounded overflow-hidden flex justify-center items-center h-[250px]">
          <img
            className="max-h-[250px] aspect-square object-contain"
            src={data.image}
            alt=""
          />
        </div>
        <div className="text-center text-green-700 font-bold absolute top-1 right-1 p-1 text-lg flex justify-center items-center bg-slate-300 rounded">
          ${data.price}
        </div>
        <p className="font-semibold">{data.title}</p>
        <small className="text-gray-500 text-xs">{data.description}</small>
      </div>
      <Button className="w-full">Add to Cart +</Button>
    </div>
  );
}
