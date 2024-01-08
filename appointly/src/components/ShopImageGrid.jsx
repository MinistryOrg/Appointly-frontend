import { Image } from "@nextui-org/react";

function ShopImageGrid() {
  return (
    <div>
      <div className="grid md:grid-rows-2 lg:grid-flow-col xsm:grid-flow-row lg:gap-y-2 lg:gap-x-5 xsm:gap-y-4 md:gap-x-9 lg:mx-unit-5xl lg:{mt-unit-2xl, mb-unit-xl} xsm:mx-unit-sm xsm:my-unit-sm h-1/2">
        <div className="lg:row-span-2 xsm:row-span-1 h-auto p-0 m-0">
          <Image
            alt="NextUI hero "
            src="../../src/styles/images/shop_prev_1.png"
            className="lg:w-screen md:w-screen sm:w-7/12 p-0 m-0 object-fill"
          />
        </div>
        <div className="col h-auto p-0 m-0 rounded-md">
          <img
            alt="NextUI hero "
            src="../../src/styles/images/shop_prev_2.png"
            className="lg:w-11/12 md:w-screen sm:w-7/12 p-0 m-0 rounded-xl"
          />
        </div>
        <div className="col-span-1 h-auto p-0 m-0">
          <img
            alt="NextUI hero "
            src="../../src/styles/images/shop_prev_3.png"
            className="lg:w-11/12 md:w-screen sm:w-7/12 p-0 m-0 object-fill rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopImageGrid;
