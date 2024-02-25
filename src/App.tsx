import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Suspense, lazy } from "react";
import { Toaster } from "sonner";

const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
  return (
    <>
      <Toaster position="bottom-right" />
      <Header />
      <Suspense
        fallback={
          <>
            <div className="flex w-full h-[calc(100vh-64px)] justify-center items-center">
              Loading...
            </div>
          </>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
