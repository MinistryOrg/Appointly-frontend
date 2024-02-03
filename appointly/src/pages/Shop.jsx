import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import {
  Image,
  Avatar,
  Button,
  Card,
  CardFooter,
  Badge,
} from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useShops } from "../contexts/ShopContext";
import ShopImageGrid from "../components/ShopImageGrid";
import { PartnerStar } from "../components/ui/Partner";
import StarRating from "../components/ui/StarRating";
import { barber_url } from "../data/shopData";

export default function Shop() {
  const { id } = useParams();
  const { getShop, currentShop, isOpen } = useShops();
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
    dis,
    servicesOptions,
    closeHour,
    openHour,
    shopImg,
    serviceImg,
    about,
  } = currentShop;

  function handleBookAppointment() {
    navigate(`/appointment/${id}`);
  }

  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-8">
          <h1 className="text-3xl">{name}</h1>
          <p className="t text-gray-400">{dis}</p>
        </div>
        {/* <ShopImageGrid shopImgs={shopImg} /> */}
        <div className="grid md:grid-rows-2 lg:grid-flow-col xsm:grid-flow-row lg:gap-y-2 lg:gap-x-5 xsm:gap-y-4 md:gap-x-9 lg:mx-unit-5xl lg:{mt-unit-2xl, mb-unit-xl} xsm:mx-unit-sm xsm:my-unit-sm h-1/2">
          {shopImg && shopImg.length === 3 ? (
            <>
              <div className="lg:row-span-2 xsm:row-span-1 h-auto p-0 mb-6">
                <img
                  alt="NextUI hero "
                  src={`${barber_url}${shopImg[0]}`}
                  className="lg:w-full h-full md:w-screen sm:w-7/12 p-0 m-0 object-fill rounded-xl"
                />
              </div>
              <div className="col h-auto p-0 m-0 rounded-md">
                <img
                  alt="NextUI hero "
                  src={`${barber_url}${shopImg[1]}`}
                  className="lg:w-full md:w-screen sm:w-7/12 p-0 m-0 rounded-xl"
                />
              </div>
              <div className="col-span-1 h-auto p-0 m-0">
                <img
                  alt="NextUI hero "
                  src={`${barber_url}${shopImg[2]}`}
                  className="lg:w-full md:w-screen sm:w-7/12 p-0 m-0 object-fill rounded-md"
                />
              </div>
            </>
          ) : (
            <p>Error: Invalid shopImg data</p>
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
                    src="../../src/styles/images/shop_logo.png"
                    className="h-44 w-44"
                  />
                </Badge>
              ) : (
                <Avatar
                  isBordered
                  src="../../src/styles/images/shop_logo.png"
                  className="h-44 w-44"
                />
              )}
            </div>
          </div>
          <div className=" w-full md:text-start xsm:text-center font-bold lg:my-8 xsm:my-2 lg:basis-unit-8xl md:basis-unit-xl xsm:basis-auto">
            <p className="text-2xl">{name}</p>
            <div className="flex flex-row xsm:justify-center md:justify-normal  w-full">
              <p className={isOpen ? "text-lime-900" : "text-red-800"}>
                {isOpen ? "Open " : "Closed. "}&nbsp;
              </p>
              <p>{isOpen ? ` until ${closeHour}` : ` Opens at ${openHour}`}</p>
            </div>
            <p>
              {address}, {location}
            </p>
            <p>{telephone}</p>
            <div className="flex flex-row xsm:justify-center md:justify-normal  gap-x-3w-full">
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
              <div key={index} className="justify-center">
                <Card radius="lg" shadow="none" className="border-none">
                  <Image
                    alt={`service${index + 1}`}
                    className="object-cover"
                    height={250}
                    src={`${barber_url}${serviceImg[index]}`}
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
              </div>
            ))
          ) : (
            <p>No services available.</p>
          )}
        </div>
        <div className="lg:w-fit xsm:w-full md:text-start xsm:text-center font-bold my-10 md:mx-unit-5xl xsm:mx-unit-0">
          <h1 className="text-2xl">About us</h1>
        </div>
        <div>
          <p className="lg:mx-unit-5xl xsm:mx-unit-md my-5 font-semibold">
            {about}
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
                  <td>09:00 - 21:00</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>09:00 - 17:00 </td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>09:00 - 21:00</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>09:00 - 21:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>09:00 - 18:00</td>
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
