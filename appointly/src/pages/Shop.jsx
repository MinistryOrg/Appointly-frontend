import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Image } from "@nextui-org/react";

export default function Shop() {
  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">Barber Shop name</h1>
        </div>
        <div className="grid md:grid-rows-2 lg:grid-flow-col xsm:grid-flow-row lg:gap-y-2 lg:gap-x-0 xsm:gap-y-4 md:gap-x-9 lg:mx-unit-5xl lg:my-unit-2xl xsm:mx-unit-sm xsm:my-unit-sm">
          <div className="lg:row-span-2 xsm:row-span-1">
            <Image
              width={810}
              alt="NextUI hero Image"
              src="../../src/styles/images/shop_prev_1.jpg"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={500}
              alt="NextUI hero Image"
              src="../../src/styles/images/shop_prev_2.png"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={500}
              alt="NextUI hero Image"
              src="../../src/styles/images/shop_prev_3.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
