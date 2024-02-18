import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { useShops } from "../contexts/ShopContext";
import { useAppointment } from "../contexts/AppointmentContext";
import StarRating from "../components/ui/StarRating";
import { Avatar, Badge, Spinner } from "@nextui-org/react";
import { PartnerStar } from "../components/ui/Partner";
import { LocationIcon } from "../assets/LocationIcon";
import { StoreIcon } from "../assets/StoreIcon";
import { PhoneIcon } from "../assets/PhoneIcon";
import { RatingIcon } from "../assets/RatingIcon";
import ServiceIcon from "../assets/ServiceIcon";
import {
  BanknotesIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import {
  getBarberImagesUrl,
  getImageURL,
  getMechImagesUrl,
  getNailImagesUrl,
} from "../utils/image-util";

function AppointmentSummary() {
  const {
    selectedService,
    selectedPersonnel,
    selectedDate,
    selectedTime,
    selectedCost,
    bookAppointment,
    isLoading,
  } = useAppointment();
  const { currentShop } = useShops();
  const {
    name,
    location,
    telephone,
    address,
    backgroundImgPath,
    rating,
    partner,
    service,
    shopLogo,
  } = currentShop;

  const serviceUrls = {
    "Barber Shop": getBarberImagesUrl,
    "Nail Salon": getNailImagesUrl,
    Mechanic: getMechImagesUrl,
    // Add more service types if needed
  };
  const getImageUrlFunction = serviceUrls[service] || getImageURL;

  console.log("serviceUrl", getImageUrlFunction);

  return (
    <>
      <NavBar />
      <main className="w-auto flex flex-col items-center justify-center bg-gray-50 sm:px-4 my-unit-lg">
        <div className="bg-white shadow-lg lg:p-2 py-1 space-y-1 sm:p-6 sm:rounded-lg mx-unit-sm">
          <div className="p-0">
            {backgroundImgPath ? (
              <img
                src={getImageUrlFunction(backgroundImgPath)}
                alt="t"
                className="w-unit-8xl rounded-lg"
              />
            ) : (
              <Spinner />
            )}
          </div>
          <div className="-translate-y-11 p-0">
            {partner ? (
              <>
                <Badge
                  content={<PartnerStar />}
                  showOutline={false}
                  size="lg"
                  className="bg-transparent"
                  placement="bottom-right"
                >
                  <Avatar
                    isBordered
                    src={getImageUrlFunction(shopLogo)}
                    className="h-44 w-44"
                  />
                </Badge>
              </>
            ) : (
              <Avatar
                isBordered
                src={getImageUrlFunction(shopLogo)}
                className="h-44 w-44"
              />
            )}

            <div className="my-2 font-bold text-lg px-3 space-y-1">
              <h1 className="flex flex-row">
                <StoreIcon className="w-7 h-7" /> &nbsp;
                {name}
              </h1>
              <h1 className="flex flex-row">
                <LocationIcon className="w-7 h-7" /> &nbsp;
                {address}, {location}
              </h1>
              <h1 className="flex flex-row">
                <PhoneIcon className="w-7 h-7" /> &nbsp;{telephone}
              </h1>
              <div className="flex flex-row xsm:justify-start md:justify-normal  gap-x-3 w-full">
                <RatingIcon className="w-7 h-7" />
                <p>{rating}</p>
                <StarRating rating={rating} />
              </div>
            </div>
            <hr className="h-1 rounded-xl bg-gray-200 my-3 mx-2 opacity-50 " />
          </div>

          <div className="font-bold text-lg px-3 -translate-y-unit-xl space-y-2">
            <h2 className="text-xl text-center my-1">Appointment Summary</h2>
            <h2 className="flex flex-row">
              <ServiceIcon className="w-7 h-7" /> &nbsp; Service:{" "}
              {selectedService}
            </h2>
            <h2 className="flex flex-row">
              <UserIcon className="w-7 h-7" /> &nbsp; Personnel:
              {selectedPersonnel}
            </h2>
            <h2 className="flex flex-row">
              <CalendarDaysIcon className="w-7 h-7" /> &nbsp; Date:
              {selectedDate}
            </h2>
            <h2 className="flex flex-row">
              <ClockIcon className="w-7 h-7" /> &nbsp; Time: {selectedTime}
            </h2>
            <h2 className="flex flex-row">
              <BanknotesIcon className="w-7 h-7" />
              &nbsp; Cost: {selectedCost} €
            </h2>
          </div>
          <div className="w-full flex flex-row justify-center">
            <button
              className="bg-btn-purple text-white px-6 py-3 rounded-md font-bold"
              onClick={bookAppointment}
            >
              {isLoading ? <Spinner color="default" /> : "Book Appointment"}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AppointmentSummary;
