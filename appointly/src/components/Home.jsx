import SearchDiv from "./SearchDiv";

function Home() {
  return (
    <div
      className="w-screen h-auto bg-landing-page bg-no-repeat pb-24"
      id="home"
    >
      <div className="grid grid-rows-3 grid-flow-col gap-4 w-screen h-auto p-unit-15 xsm:py-unit-3xl md:py-unit-5xl">
        <div className="row-span-3 col-span-2 xsm:p-0 md:p-unit-lg">
          <h1 className="font-bold xsm:text-xl md:text-4xl">
            Find your favorite service and book your apointly now!
          </h1>
          <SearchDiv />
        </div>
        <div className="row-span-2 "></div>
      </div>
    </div>
  );
}

export default Home;
