import { FaShoppingCart } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { cartData } from "@/utils/demo";
import CartItem from "./CartItem";

export default function Header() {
  return (
    <div className="z-20 h-16 w-full p-3 justify-between items-center flex border-b sticky top-0 bg-slate-950">
      <Link to="/">
        <h1 className="font-bold">Redux CrashCourse</h1>
      </Link>
      <div className="__buttons flex gap-4">
        <Link to="/shop">
          <Button variant="secondary">Shop</Button>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              className="flex justify-center items-center relative"
            >
              <FaShoppingCart />
              {cartData.length > 0 && (
                <p className=" flex justify-center items-center absolute top-[-9px] left-[-9px] text-xs bg-red-600 text-white w-6 h-6 aspect-square rounded-full">
                  {cartData.length}
                </p>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>My Shopping Cart</SheetTitle>
              <SheetDescription>
                {cartData.length === 0 ? (
                  "Your cart is empty"
                ) : (
                  <div className="max-h-[450px] overflow-auto flex flex-col gap-3">
                    {cartData.map((item) => {
                      return <CartItem data={item} />;
                    })}
                  </div>
                )}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
