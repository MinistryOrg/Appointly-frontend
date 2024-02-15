import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import {
  Image,
  Avatar,
  Button,
  Card,
  CardFooter,
  Badge,
  Spinner,
  Skeleton,
} from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useShops } from "../contexts/ShopContext";
import ShopImageGrid from "../components/ShopImageGrid";
import { PartnerStar } from "../components/ui/Partner";
import StarRating from "../components/ui/StarRating";
import { barber_url, nail_url, mech_url } from "../data/shopData";
import { LocationIcon } from "../assets/LocationIcon";
import { StoreIcon } from "../assets/StoreIcon";
import { PhoneIcon } from "../assets/PhoneIcon";
import { RatingIcon } from "../assets/RatingIcon";
import {
  getBarberImagesUrl,
  getImageURL,
  getMechImagesUrl,
  getNailImagesUrl,
} from "../utils/image-util";

export default function Shop() {
  const { id } = useParams();
  const { getShop, currentShop, isOpen, isLoading } = useShops();
  const navigate = useNavigate();
  useEffect(
    function () {
      getShop(id);
    },
    [id]
  );

  const {
    name,
    address,
    location,
    partner,
    telephone,
    rating,
    description,
    servicesOptions,
    closeHour,
    openHour,
    shopImg,
    serviceImg,
    about,
    service,
    shopLogo,
  } = currentShop;

  console.log(currentShop);

  function handleBookAppointment() {
    navigate(`/appointment/${id}`);
  }

  console.log("isLoading", isLoading);

  const serviceUrls = {
    "Barber Shop": getBarberImagesUrl,
    "Nail Salon": getNailImagesUrl,
    Mechanic: getMechImagesUrl,
    // Add more service types if needed
  };
  const getImageUrlFunction = serviceUrls[service] || getImageURL;

  console.log("serviceUrl", getBarberImagesUrl);
  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center  my-8">
          <h1 className="text-3xl font-bold">{name}</h1>
          <p className="text-gray-400 font-semibold">{description}</p>
        </div>
        {/* <ShopImageGrid shopImgs={shopImg} /> */}
        <div className="grid md:grid-rows-2 lg:grid-flow-col xsm:grid-flow-row lg:gap-y-2 lg:gap-x-5 xsm:gap-y-4 md:gap-x-9 lg:mx-unit-5xl lg:{mt-unit-2xl, mb-unit-xl} xsm:mx-unit-sm xsm:my-unit-sm h-1/2">
          {shopImg && shopImg.length === 3 ? (
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
          ) : (
            <Spinner size="lg" />
          )}
        </div>
        <div className="flex lg:flex-row md:flex-row lg:flex-nowrap md:flex-wrap xsm:flex-col w-auto lg:mx-unit-5xl lg:mb-unit-xl xsm:mx-unit-xl content-center">
          <div className="lg:basis-1/4 md:basis-1/3 xsm:basis-1/2 shrink items-center">
            <div className="xsm:flex justify-center">
              {partner ? (
                <Badge
                  content={<PartnerStar />}
                  showOutline={false}
                  size="lg"
                  className="bg-transparent"
                >
                  <Avatar
                    isBordered
                    src={getImageUrlFunction(shopLogo)}
                    className="h-44 w-44"
                  />
                </Badge>
              ) : (
                <Avatar
                  isBordered
                  src={getImageUrlFunction(shopLogo)}
                  className="h-44 w-44"
                />
              )}
            </div>
          </div>
          <div className=" w-full md:text-start xsm:text-center font-bold lg:my-8 xsm:my-2 lg:basis-unit-9xl md:basis-unit-xl xsm:basis-auto">
            <p className="text-3xl">{name}</p>
            <div className="flex flex-row xsm:justify-center md:justify-normal  w-full">
              <StoreIcon className="w-7 h-7" />
              &nbsp;
              <p className={isOpen ? "text-lime-700" : "text-red-800"}>
                {isOpen ? "Open" : "Closed. "}&nbsp;
              </p>
              <p>{isOpen ? `until ${closeHour}` : ` Opens at ${openHour}`}</p>
            </div>
            <p className="flex flex-row xsm:justify-center md:justify-start">
              <LocationIcon className="w-7 h-7" /> &nbsp;
              {address}, {location}
            </p>
            <p className="flex flex-row xsm:justify-center md:justify-start">
              <PhoneIcon className="w-7 h-7" /> &nbsp;
              {telephone}
            </p>
            <div className="flex flex-row xsm:justify-center md:justify-normal  gap-x-3w-full">
              <RatingIcon className="w-7 h-7 text-main-clr" /> &nbsp;
              <p>{rating}</p>
              <StarRating rating={rating} />
            </div>
          </div>
          <div className="basis-full flex xsm:justify-center md:justify-end">
            <div className="my-8 flex gap-y-10 justify-end">
              <div className="w-full">
                <Button
                  className="capitalize lg:w-unit-5xl xsm:w-full p-6 font-bold text-lg bg-book text-white"
                  onClick={handleBookAppointment}
                >
                  Book Apointly
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-fit xsm:w-full md:text-start xsm:text-center font-bold my-10 md:mx-unit-5xl xsm:mx-unit-0">
          <h1 className="text-2xl">Services</h1>
        </div>
        <div className="h-auto my-unit-3xl xsm:mx-unit-2xl lg:mx-unit-0 flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
          {servicesOptions && servicesOptions.length > 0 ? (
            servicesOptions.map((_, index) => (
              <div key={index} className="flex justify-center">
                <Skeleton isLoaded={!isLoading} className="rounded-lg">
                  <Card radius="lg" shadow="none" className="border-none">
                    <Image
                      alt={`service${index + 1}`}
                      className="object-cover"
                      height={250}
                      src={getImageUrlFunction(serviceImg[index])}
                      width={280}
                    />
                    <CardFooter className="justify-between  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10">
                      <div className="w-full">
                        <h1 className="text-center font-bold text-2xl my-unit-md">
                          {servicesOptions[index]}
                        </h1>
                      </div>
                    </CardFooter>
                  </Card>
                </Skeleton>
              </div>
            ))
          ) : (
            <Spinner size="lg" />
          )}
        </div>
        <div className="lg:w-fit xsm:w-full md:text-start xsm:text-center font-bold my-10 md:mx-unit-5xl xsm:mx-unit-0">
          <h1 className="text-2xl">About us</h1>
        </div>
        <div>
          <p className="lg:mx-unit-5xl xsm:mx-unit-md my-5 font-semibold">
            {about ? about : <Spinner />}
          </p>
        </div>
        <div className="lg:w-fit xsm:w-full md:text-start xsm:text-center font-bold my-10 md:mx-unit-5xl xsm:mx-unit-0">
          <h1 className="text-2xl">Where to find us</h1>
        </div>
        <div className="lg:mx-unit-5xl xsm:mx-unit-2xl my-8 flex xsm:flex-col lg:flex-row sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
          <div>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4577.842990050212!2d23.73682231937162!3d37.98011804890466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1702313232633!5m2!1sen!2sgr"
              className="border-none rounded-lg lg:w-unit-9xl lg:h-unit-8xl xsm:w-unit-6xl xsm:h-unit-7xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <table className="table-fixed font-bold border-separate border-spacing-5">
              <thead>
                <th>
                  <h1 className="text-2xl my-5">Time open</h1>
                </th>
              </thead>
              <tbody className="">
                <tr className="">
                  <td>Monday</td>
                  <td>CLOSED</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>
                    {openHour} - {closeHour}
                  </td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>
                    {openHour} - {closeHour}
                  </td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>
                    {openHour} - {closeHour}
                  </td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>
                    {openHour} - {closeHour}
                  </td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>
                    {openHour} - {closeHour}
                  </td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>CLOSED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
