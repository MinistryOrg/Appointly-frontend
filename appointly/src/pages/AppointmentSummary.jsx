import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { useShops } from "../contexts/ShopContext";
import { useAppointment } from "../contexts/AppointmentContext";
import StarRating from "../components/ui/StarRating";
import { barber_url } from "../data/shopData";

function AppointmentSummary() {
  const {
    service,
    selectedPersonnel,
    selectedDate,
    selectedTime,
    selectedCost,
    bookAppointment,
  } = useAppointment();
  const { currentShop } = useShops();
  const { name, location, telephone, address, backgroundImgPath, rating } =
    currentShop;

  return (
    <>
      <NavBar />
      <main className="w-auto flex flex-col items-center justify-center bg-gray-50 sm:px-4 my-unit-lg">
        <div className="bg-white shadow-lg lg:p-2 py-1 space-y-1 sm:p-6 sm:rounded-lg">
          <div className="p-0">
            <img
              src={`${barber_url}${backgroundImgPath}`}
              alt="t"
              className="w-unit-8xl rounded-lg"
            />
          </div>
          <div className="-translate-y-11 p-0">
            <img
              alt="NextUI hero "
              src="../../src/styles/images/shop_logo.png"
              className="lg:w-3/12 md:w-screen sm:w-1/12 p-0 m-0 rounded-full border border-black translate-x-3"
            />
            {/* //!add grid and star circle for partner */}
            <div className="my-2 font-bold text-lg px-3">
              <h1>{name}</h1>
              <h1>
                {address}, {location}
              </h1>
              <h1>{telephone}</h1>
              <div className="flex flex-row xsm:justify-center md:justify-normal  gap-x-3 w-full">
                <p>{rating}</p>
                <StarRating rating={rating} />
              </div>
            </div>
            <hr className="h-1 rounded-xl bg-gray-200 my-3" />
          </div>

          <div className="font-bold text-lg px-3 -translate-y-unit-xl">
            <h2 className="text-xl text-center my-1">Appointment Summary</h2>
            <h2>Service: {service}</h2>
            <h2>Personnel: {selectedPersonnel}</h2>
            <h2>Date: {selectedDate}</h2>
            <h2>Time: {selectedTime}</h2>
            <h2>Cost: {selectedCost} €</h2>
          </div>
          <div className="w-full flex flex-row justify-center">
            <button
              className="bg-btn-purple text-white px-6 py-3 rounded-md font-bold"
              onClick={bookAppointment}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AppointmentSummary;
