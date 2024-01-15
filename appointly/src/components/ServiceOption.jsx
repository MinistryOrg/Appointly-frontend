import { Card, CardFooter, Image } from "@nextui-org/react";
import { useAppointment } from "../contexts/AppointmentContext";
import { useShops } from "../contexts/ShopContext";

export default function ServiceOption() {
  const { setService, setCost } = useAppointment();
  const { currentShop } = useShops();
  const { servicesOptions, cost } = currentShop;
  return (
    <div className="h-auto my-unit-3xl xsm:mx-unit-2xl lg:mx-unit-0 flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
      {servicesOptions.map((srv, index) => (
        <div key={index} className="justify-center">
          <Card
            radius="lg"
            shadow="none"
            className="border-none"
            isPressable
            onPress={() => {
              setService(servicesOptions[index]);
              setCost(cost[index]);
            }}
          >
            <Image
              alt="service1"
              className="object-cover"
              height={250}
              src="../../src/styles/images/haircut_srv_1.svg"
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
      ))}
    </div>
  );
}
