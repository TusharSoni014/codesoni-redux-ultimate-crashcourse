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

export default function Header() {
  return (
    <div className="h-16 w-full p-3 justify-between items-center flex border-b sticky top-0 bg-slate-950">
      <Link to="/">
        <h1 className="font-bold">Redux CrashCourse</h1>
      </Link>
      <div className="__buttons flex gap-2">
        <Link to="/shop">
          <Button variant="secondary">Shop</Button>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" className="flex justify-center items-center">
              <FaShoppingCart />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>My Shopping Cart</SheetTitle>
              <SheetDescription>Your cart is empty</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
