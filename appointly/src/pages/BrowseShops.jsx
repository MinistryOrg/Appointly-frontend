import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  Image,
  Skeleton,
} from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Partner } from "../components/ui/Partner";
import StarRating from "../components/ui/StarRating";
import { barber_url, mech_url, nail_url } from "../data/shopData";
import { useState } from "react";
import {
  getBarberImagesUrl,
  getMechImagesUrl,
  getNailImagesUrl,
} from "../utils/image-util";

export default function BrowseShops() {
  const { state } = useLocation();
  const shopsData = state?.shopsData || [];
  const [isLoaded, setIsLoaded] = useState(shopsData ? true : false);
  const selectedService = state?.selectedService || "";
  const navigate = useNavigate();

  console.log(state);
  console.log("ShopDATA ", shopsData);
  console.log("shop id", shopsData[0].id);
  console.log(selectedService);

  const generateTitle = (selectedService) => {
    switch (selectedService) {
      case "Barber Shop":
        return "Barber Shops";
      case "Nail Salon":
        return "Nails Salons";
      case "Mechanic":
        return "Mechanic Services";
      case "Trainer":
        return "Personal Trainer";
      default:
        return "Shops"; // Default title
    }
  };

  const pageTitle = generateTitle(selectedService);

  function handleCardClick(shopId) {
    navigate(`/shop/${shopId}`);
    // Navigate to the individual shop with its ID
  }

  const { service } = shopsData[0];

  console.log("Service", service);

  const serviceUrls = {
    "Barber Shop": getBarberImagesUrl,
    "Nail Salon": getNailImagesUrl,
    Mechanic: getMechImagesUrl,
    // Add more service types if needed
  };
  const getImageUrlFunction = serviceUrls[selectedService] || "";

  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-3xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">{pageTitle}</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-10 lg:mx-unit-3xl sm:mx-unit-sm lg:my-unit-xl sm:my-unit-sm">
          {shopsData.map((shop, index) => (
            <div className="p-0 lg:m-0 xsm:mx-4 xsm:mb-5" key={index}>
              <Card
                shadow="sm"
                radius="sm"
                className="p-0"
                isPressable
                onPress={() => {
                  console.log(shop.id);
                  handleCardClick(shop.id);
                }}
              >
                <CardBody className="overflow-visible p-0">
                  <Skeleton isLoaded={isLoaded} className="rounded-lg">
                    <Image
                      shadow="sm"
                      width={500}
                      radius="lg"
                      alt="awdawdwa"
                      className="w-auto object-cover"
                      src={getImageUrlFunction(shop.backgroundImgPath)}
                    />
                  </Skeleton>
                </CardBody>
                <CardFooter className="text-small justify-between rounded-none">
                  <div className="w-full grid lg:grid-cols-3 xsm:grid-cols-2">
                    <div className="px-0 my-2 mx-2">
                      <Avatar
                        src={getImageUrlFunction(shop.shopLogo)}
                        isBordered
                        className="w-24 h-24"
                      />
                    </div>
                    <div
                      className={`text-start font-bold mt-1.5 ${
                        shop.partner ? "" : "w-max space-y-1"
                      }`}
                      key={index}
                    >
                      <p>{shop.name}</p>
                      <p>{shop.address}</p>
                      <p>{shop.telephone}</p>
                      <div className="flex flex-row gap-x-3 w-full">
                        <p className="text-lg">{shop.rating}</p>
                        <StarRating rating={shop.rating} />
                      </div>
                    </div>
                    {shop.partner ? <Partner /> : ""}
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
