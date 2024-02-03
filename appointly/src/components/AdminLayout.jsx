import img from "../styles/images/blur_img.png";

function AdminLayout() {
  return (
    <>
      <main className="p-4 md:ml-64 h-auto pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-white border-1 border-gray-200 rounded-lg h-16 md:h-32">
            <div className="flex flex-row my-3">
              <div className="bg-blue-300 rounded-full p-3 m-5">
                <svg
                  class="w-[43px] h-[43px] text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 5c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1h1c.6 0 1-.4 1-1a1 1 0 1 1 2 0c0 .6.4 1 1 1a2 2 0 0 1 2 2v1c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-1.1.9-2 2-2ZM3 19v-7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6-6c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1ZM7 17a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Zm6 0c0-.6-.4-1-1-1a1 1 0 1 0 0 2c.6 0 1-.4 1-1Zm2 0a1 1 0 1 1 2 0c0 .6-.4 1-1 1a1 1 0 0 1-1-1Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-lg font-semibold flex flex-col my-5 w-full">
                <p className="mx-5">Appointments</p>
                <p className="mx-5">15</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-1 border-gray-200 rounded-lg h-16 md:h-32">
            <div className="flex flex-row my-3">
              <div className="bg-green-300 rounded-full p-3 m-5">
                <svg
                  class="w-[43px] h-[43px] text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.2"
                    d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                  />
                </svg>
              </div>
              <div className="text-lg font-semibold flex flex-col my-5 w-full">
                <p className="mx-5">Revenue</p>
                <p className=" mx-5">1000$</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-1 border-gray-200 rounded-lg h-16 md:h-32">
            <div className="flex flex-row my-3">
              <div className="bg-yellow-200 rounded-full p-3 m-5">
                <svg
                  class="w-[43px] h-[43px] text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                </svg>
              </div>
              <div className="text-lg font-semibold flex flex-col my-5 w-full">
                <p className="mx-5">Rating</p>
                <p className=" mx-5">4.5</p>
              </div>
            </div>
          </div>
          <div className="bg-white border-1 border-gray-200 rounded-lg h-16 md:h-32">
            <div className="flex flex-row my-3">
              <div className="bg-purple-300 rounded-full p-3 m-5">
                <svg
                  class="w-[43px] h-[43px] text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.2"
                    d="M4 4v15c0 .6.4 1 1 1h15M8 16l2.5-5.5 3 3L17.3 7 20 9.7"
                  />
                </svg>
              </div>
              <div className="text-lg font-semibold flex flex-col my-5 w-full">
                <p className="mx-5">Visited</p>
                <p className=" mx-5">50%</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white border-1 border-gray-200 rounded-lg h-48 md:h-72">
            <div className="w-full m-4">
              <h1 className="font-semibold text-xl">Today</h1>
            </div>
          </div>
          <div className="bg-white border-1 border-gray-200 rounded-lg h-48 md:h-72"></div>
        </div>
        <div className="border-2 border-gray-200 rounded-lg mb-4">
          <div className="relative h-96">
            <img
              src={img} // replace with the path to your blurred image
              alt="Blurred Background"
              className="absolute inset-0 w-full h-unit-7xl blur-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <p className="text-xl font-bold text-white bg-primary p-3 rounded-xl">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminLayout;
