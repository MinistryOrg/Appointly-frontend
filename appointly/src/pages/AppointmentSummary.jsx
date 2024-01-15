import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { useShops } from "../contexts/ShopContext";
import { useAppointment } from "../contexts/AppointmentContext";

function AppointmentSummary() {
  const {
    service,
    personnel,
    formattedDate,
    formattedTime,
    cost,
    bookAppointment,
  } = useAppointment();
  const { currentShop } = useShops();
  const { name, location, telephone, address } = currentShop;

  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">{name}</h1>
          <h2 className="text-xl my-5">Appointment Summary</h2>
        </div>
        <div className="grid grid-cols-2 mx-unit-5xl gap-7">
          <div className="col-span-1 p-8">
            <div className="font-bold text-lg space-y-5">
              <h2>Service: {service}</h2>
              <h2>Personnel: {personnel}</h2>
              <h2>Date: {formattedDate}</h2>
              <h2>Time: {formattedTime}</h2>
              <h2>Cost: {cost} €</h2>
            </div>
          </div>

          <div className="col-span-1 p-8">
            <div className="mb-8">
              <div className="grid lg:grid-cols-2 xsm:grid-rows-1">
                <div>
                  <img
                    alt="NextUI hero "
                    src="../../src/styles/images/shop_logo.png"
                    className="lg:w-9/12 md:w-screen sm:w-7/12 p-0 m-0 rounded-full border border-black"
                  />
                </div>
                <div>
                  <div className="my-4 font-bold text-xl space-y-5">
                    <h1>{name}</h1>
                    <h1>{address}</h1>
                    <h1>{location}</h1>
                    <h1>{telephone}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-8">
          <button
            className="bg-btn-purple text-white px-6 py-3 rounded-md font-bold"
            onClick={bookAppointment}
          >
            Book Appointment
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AppointmentSummary;
