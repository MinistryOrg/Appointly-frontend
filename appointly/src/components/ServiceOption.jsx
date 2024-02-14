import { Card, CardFooter, Image, Spinner } from "@nextui-org/react";
import { useAppointment } from "../contexts/AppointmentContext";
import { useShops } from "../contexts/ShopContext";
import { barber_url, nail_url, mech_url } from "../data/shopData";
import { useState } from "react";

export default function ServiceOption() {
  const { selectedService, setSelectedService, setSelectedCost, selectedCost } =
    useAppointment();
  const { currentShop } = useShops();
  const { servicesOptions, serviceImg, cost, service } = currentShop;

  const serviceUrls = {
    "Barber Shop": barber_url,
    "Nail Salon": nail_url,
    Mechanic: mech_url,
    // Add more service types if needed
  };
  const serviceUrl = serviceUrls[service] || "";

  return (
    <div>
      <div className="h-auto my-unit-3xl xsm:mx-unit-2xl lg:mx-unit-0 flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
        {servicesOptions ? (
          servicesOptions.map((_, index) => (
            <div key={index} className="flex justify-center ">
              <Card
                radius="lg"
                shadow="none"
                className="border-none"
                isPressable
                onPress={() => {
                  setSelectedService(servicesOptions[index]);
                  setSelectedCost(cost[index]);
                }}
              >
                <Image
                  alt="service1"
                  className="object-cover"
                  height={250}
                  src={`${serviceUrl}${serviceImg[index]}`}
                  width={280}
                />
                <CardFooter className="justify-between  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10">
                  <div className="w-full">
                    <h1 className="text-center font-bold text-2xl my-unit-md">
                      {servicesOptions[index]}
                    </h1>
                    <h1 className="text-center font-bold text-2xl my-unit-md">
                      {cost[index]} €
                    </h1>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))
        ) : (
          <Spinner />
        )}
      </div>
      {selectedService && selectedCost ? (
        <div className="w-full text-center font-bold justify-center flex flex-col">
          <p>Service: {selectedService}</p>
          <p>Cost: {selectedCost} €</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
