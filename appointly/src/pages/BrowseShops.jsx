import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Avatar, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";
import { Partner } from "../components/ui/Partner";
import StarRating from "../components/ui/StarRating";
import { barber_url } from "../data/shopData";

export default function BrowseShops() {
  const { state } = useLocation();
  const shopsData = state?.shopsData || [];
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

  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-3xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">{pageTitle}</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-10 lg:mx-unit-3xl sm:mx-unit-sm lg:my-unit-xl sm:my-unit-sm">
          {shopsData.map((shop, index) => (
            <div className="p-0 m-0" key={index}>
              <Card
                shadow="sm"
                radius="sm"
                className=""
                isPressable
                onPress={() => {
                  console.log(shop.id);
                  handleCardClick(shop.id);
                }}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    width={500}
                    radius="none"
                    alt="awdawdwa"
                    className="w-full object-cover"
                    src={`${barber_url}${shop.backgroundImgPath}`}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between rounded-none">
                  <div className="w-full grid lg:grid-cols-3 xsm:grid-cols-2">
                    <div className="px-0">
                      <Avatar
                        src="../../src/styles/images/shop_logo_2.png"
                        isBordered
                        className="w-24 h-24"
                      />
                    </div>
                    <div
                      className={`text-start font-bold mt-1.5 ${
                        shop.partner ? "" : "w-max"
                      }`}
                      key={index}
                    >
                      <p>{shop.name}</p>
                      <p>{shop.location}</p>
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
