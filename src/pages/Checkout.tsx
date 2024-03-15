import CartItem from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "@/redux/slices/cartSlice";
import { toast } from "sonner";

export default function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const completeOrder = () => {
    dispatch(emptyCart());
    toast("Order Placed!");
    navigate("/shop");
  };
  const cartData = useSelector((state: RootState) => state.persistedReducer.cartSlice.cartItems);
  return (
    <div className="w-full h-[calc(100dvh-64px)] flex justify-center items-center p-3">
      <div className="__checkout_container h-[80%] border rounded p-3 w-full max-w-[900px] bg-slate-900 flex gap-3">
        <form className="flex gap-3 flex-col flex-1">
          <h1 className="font-bold text-xl mb-2">Checkout Info</h1>
          <Input
            className="bg-slate-900 focus-visible:ring-0"
            placeholder="Full Name"
          />
          <Input
            className="bg-slate-950 focus-visible:ring-0"
            placeholder="Pincode"
          />
          <Textarea
            className="bg-slate-950 focus-visible:ring-0"
            placeholder="Full Address"
            rows={5}
          />
          <p className="text-gray-500">
            Make sure your info is correct, and if you want to know about our
            services, then contact us at{" "}
            <span className="underline">contact@ecom.com</span>
          </p>
          <p className="text-lg font-bold">
            Total:{" "}
            <span className="text-green-500">
              $
              {cartData
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </span>
          </p>
        </form>
        <div className="flex justify-between flex-col gap-2 flex-1">
          <div className="__checkout_info flex-1 border p-2 rounded h-[calc(100%-100px)] overflow-auto">
            {cartData.length > 0
              ? cartData.map((item) => {
                  return <CartItem data={item} />;
                })
              : "Your cart is empty!"}
          </div>
          {cartData.length > 0 && (
            <div className="__confirm_order">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button onClick={completeOrder} className="w-full">
                    Confirm Order
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Confirm Order?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are your sure you want to spend $
                      {cartData
                        .reduce((total, item) => total + item.price, 0)
                        .toFixed(2)}{" "}
                      on your orders?
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Confirm</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
