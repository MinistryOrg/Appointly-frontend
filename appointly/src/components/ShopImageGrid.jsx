import { Image, Skeleton } from "@nextui-org/react";

function ShopImageGrid({ isLoading, getImageUrlFunction, shopImg }) {
  return (
    <>
      <div className="lg:row-span-2 xsm:row-span-1 h-auto p-0 my-0">
        <Skeleton isLoaded={!isLoading} className="rounded-lg">
          <img
            alt="NextUI hero "
            src={getImageUrlFunction(shopImg[0])}
            className="lg:w-auto h-full md:w-screen sm:w-7/12 p-0 m-0 object-fill rounded-xl"
          />
        </Skeleton>
      </div>
      <div className="col h-auto p-0 m-0 rounded-md">
        <Skeleton isLoaded={!isLoading} className="rounded-lg">
          <img
            alt="NextUI hero "
            src={getImageUrlFunction(shopImg[1])}
            className="lg:w-full md:w-screen sm:w-7/12 p-0 m-0 rounded-xl"
          />
        </Skeleton>
      </div>
      <div className="col-span-1 h-auto p-0 m-0">
        <Skeleton isLoaded={!isLoading} className="rounded-lg">
          <img
            alt="NextUI hero "
            src={getImageUrlFunction(shopImg[2])}
            className="lg:w-full md:w-screen sm:w-7/12 p-0 m-0 object-fill rounded-md"
          />
        </Skeleton>
      </div>
    </>
  );
}

export default ShopImageGrid;
