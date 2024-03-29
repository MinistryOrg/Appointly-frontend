import img from "../assets/images/blur_img.png";
import { Spinner, Tooltip } from "@nextui-org/react";
import { useAdmin } from "../contexts/AdminContext";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useMemo } from "react";
import { DonutChart, Legend } from "@tremor/react";

function Dashboard() {
  const { email } = useAuth();
  const {
    adminShop,
    fetchShopAdmin,
    fetchAppointments,
    listAppointments,
    getServices,
    totalCost,
  } = useAdmin();

  const fetchShopAdminMemoized = useMemo(
    () => fetchShopAdmin,
    [fetchShopAdmin]
  );

  useEffect(() => {
    const delay = 500 + 500;
    const timerId = setTimeout(() => {
      const controller = new AbortController();

      fetchShopAdminMemoized(email, controller).then(() => {
        if (adminShop && adminShop.name) {
          return fetchAppointments(adminShop.name, controller);
        }
      });

      return () => {
        controller.abort();
      };
    }, delay);

    // Clear the timer if the dependencies change before the delay expires
    return () => clearTimeout(timerId);
  }, [email, adminShop, adminShop.name, fetchShopAdminMemoized]);

  const { name, rating } = adminShop;

  console.log("adminshop", adminShop);
  console.log("appointment", listAppointments);

  const todayAppointments = listAppointments
    ? listAppointments.filter((appointment) => {
        const appointmentDate = new Date(appointment.date);
        const today = new Date();
        return (
          appointmentDate.getFullYear() === today.getFullYear() &&
          appointmentDate.getMonth() === today.getMonth() &&
          appointmentDate.getDate() === today.getDate()
        );
      })
    : [];

  const servicesCount = getServices(listAppointments);

  const servicesOptions = adminShop.servicesOptions || [];

  const dataPie = servicesOptions.map((service, index) => ({
    name: service,
    sales: servicesCount[service] || 0,
  }));

  return (
    <>
      <main className="p-10 md:ml-64 h-auto pt-20">
        <h1 className="text-2xl font-semibold xsm:mx-unit-lg lg:mx-unit-3xl my-2 ">
          {name ? name : <Spinner color="default" />}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 xsm:mx-unit-lg lg:mx-unit-3xl">
          <div className="bg-white border-1 border-gray-200 rounded-lg h-auto md:h-32">
            <div className="flex flex-row my-3 mx-5">
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
                <p className="mx-5">
                  {/* {listAppointments?.length > 0 ? listAppointments.length : "0"} */}
                  {listAppointments ? (
                    listAppointments?.length > 0 ? (
                      listAppointments?.length
                    ) : (
                      "0"
                    )
                  ) : (
                    <Spinner color="default" />
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border-1 border-gray-200 rounded-lg h-auto md:h-auto">
            <div className="flex flex-row my-3 mx-5">
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
                <p className=" mx-5">
                  {/* {totalCost ? totalCost : "0"}  */}
                  {totalCost ? (
                    totalCost ? (
                      `${totalCost} €`
                    ) : (
                      "0 €"
                    )
                  ) : (
                    <Spinner color="default" />
                  )}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border-1 border-gray-200 rounded-lg h-auto md:h-auto">
            <div className="flex flex-row my-3 mx-5">
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
                <p className=" mx-5">
                  {rating ? rating : <Spinner color="default" />}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border-1 border-gray-200 rounded-lg h-auto md:h-auto">
            <div className="flex flex-row my-3 mx-5">
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
        <div className="grid xsm:grid-cols-1 lg:grid-cols-2 gap-4 mb-4 xsm:mx-unit-lg lg:mx-unit-3xl">
          <div className="bg-white border-1 border-gray-200 rounded-lg xsm:h-48 md:h-auto overflow-y-auto overflow-x-hidden">
            <div className="w-full m-4">
              <h1 className="font-semibold text-xl">Today's Appointments</h1>
            </div>
            <hr className="bg-gray-800 mx-4" />
            <div className="w-full grid grid-cols-1">
              {/* APPOINTMENT LIST GOES HERE */}

              {listAppointments ? (
                listAppointments.length > 0 ? (
                  todayAppointments.length > 0 ? (
                    todayAppointments.map((appointment, index) => (
                      <div
                        key={appointment.id}
                        className="grid grid-cols-4 justify-items-center hover:bg-gray-100 rounded-md p-1 font-semibold"
                      >
                        <div className="col">
                          <p>
                            {appointment.userFirstname}{" "}
                            {appointment.userLastname}
                          </p>
                        </div>
                        <div className="col bg-indigo-100 rounded-lg px-2">
                          <p className="">{appointment.service}</p>
                        </div>
                        <div className="col">
                          <p>{appointment.personnel}</p>
                        </div>
                        <div className="col">
                          <p>{appointment.time.slice(0, 5)}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="w-full my-5 text-center">
                      <p className="font-semibold text-lg">
                        No appointments for today.
                      </p>
                    </div>
                  )
                ) : (
                  <Spinner color="default" className="my-5" />
                )
              ) : (
                <Spinner color="default" className="my-5" />
              )}
            </div>
          </div>
          <div className="bg-white border-1 border-gray-200 rounded-lg h-auto md:h-full">
            <div className="w-full m-4">
              <h1 className="font-semibold text-xl">Your Services</h1>
            </div>
            <hr className="bg-gray-800 mx-4" />

            <div className="flex flex-row xsm:mx-unit-lg lg:mx-unit-3xl my-5">
              {servicesCount ? (
                <>
                  <DonutChart
                    data={dataPie}
                    category="sales"
                    index="name"
                    showLabel={false}
                    showAnimation
                    animationDuration={1000}
                    colors={["indigo-800", "indigo-600", "indigo-400"]}
                    className="w-40"
                  />

                  <Legend
                    categories={servicesOptions}
                    colors={["indigo-800", "indigo-600", "indigo-400"]}
                    className="w-auto mx-5"
                  />
                </>
              ) : (
                <p className="font-semibold text-center w-full">
                  No selected services yet
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="border-2 border-gray-200 rounded-lg mb-4 xsm:mx-unit-lg lg:mx-unit-3xl">
          <div className="relative h-96">
            <img
              src={img}
              alt="Blurred Background"
              className="absolute inset-0 w-full h-unit-7xl blur-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Tooltip
                showArrow={true}
                placement="bottom"
                content="Revenue Charts coming soon on Apointly!"
              >
                <p className="text-xl font-bold text-white bg-primary p-3 rounded-xl">
                  Coming Soon
                </p>
              </Tooltip>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
