import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import StarIcon from "../../src/styles/images/staricon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function BrowseShops() {
  const { state } = useLocation();
  const shopsData = state?.shopsData || [];
  const selectedService = state?.selectedService || "";
  const navigate = useNavigate();

  console.log(state);
  console.log("ShopDATA ", shopsData);
  console.log("shop id", shopsData[0].id);

  const generateTitle = (selectedService) => {
    switch (selectedService) {
      case "Barber-shop":
        return "Barber Shops";
      case "Nails-salon":
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
    console.log("shopId ", shopId);
    navigate(`/shop/${shopId}`);
    // Navigate to the individual shop with its ID
  }
  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">{pageTitle}</h1>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-1 gap-9 lg:mx-unit-5xl sm:mx-unit-sm lg:my-unit-lg sm:my-unit-sm">
          {shopsData.map((shop, index) => (
            <div className="p-0 m-0" key={index}>
              <Card
                shadow="sm"
                radius="sm"
                isPressable
                onPress={() => {
                  console.log(shop.id);
                  handleCardClick(shop.id);
                }}
              >
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="sm"
                    width={400}
                    radius="none"
                    alt="awdawdwa"
                    className="w-full object-cover"
                    src="../../src/styles/images/shop1.jpg"
                  />
                </CardBody>
                <CardFooter className="text-small justify-between rounded-none">
                  <div className="w-full grid lg:grid-cols-3 xsm:grid-cols-2">
                    <div className="px-0">
                      <Avatar
                        src="../../src/styles/images/shop_logo.png"
                        className="w-24 h-24"
                      />
                    </div>
                    <div className="text-start font-bold mt-1.5" key={index}>
                      <p>{shop.name}</p>
                      <p>{shop.location}</p>
                      <p>telephone</p>
                      <p>Rating</p>
                    </div>
                    <div>
                      {shop.partner ? (
                        <div className="bg-primary rounded-md w-auto text-center px-4 py-1 flex flex-row">
                          <img src={StarIcon} width={20} alt="" />
                          <p className="text-white font-bold text-sm text-center">
                            &nbsp;PARTNER
                          </p>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
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
