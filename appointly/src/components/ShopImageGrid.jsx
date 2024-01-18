import { Image } from "@nextui-org/react";

function ShopImageGrid({ shopImgs }) {
  console.log(shopImgs);
  return (
    <div>
      <div className="grid md:grid-rows-2 lg:grid-flow-col xsm:grid-flow-row lg:gap-y-2 lg:gap-x-5 xsm:gap-y-4 md:gap-x-9 lg:mx-unit-5xl lg:{mt-unit-2xl, mb-unit-xl} xsm:mx-unit-sm xsm:my-unit-sm h-1/2">
        <div className="lg:row-span-2 xsm:row-span-1 h-auto p-0 mb-6">
          <img
            alt="NextUI hero "
            // src={shopImgs[0]}
            className="lg:w-full h-full md:w-screen sm:w-7/12 p-0 m-0 object-fill rounded-xl"
          />
        </div>
        <div className="col h-auto p-0 m-0 rounded-md">
          <img
            alt="NextUI hero "
            // src={shopImgs[1]}
            className="lg:w-full md:w-screen sm:w-7/12 p-0 m-0 rounded-xl"
          />
        </div>
        <div className="col-span-1 h-auto p-0 m-0">
          <img
            alt="NextUI hero "
            // src={shopImgs[2]}
            className="lg:w-full md:w-screen sm:w-7/12 p-0 m-0 object-fill rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default ShopImageGrid;
