import { Card, CardFooter, Image } from "@nextui-org/react";
import { barber } from "../data/shopData";
import { useState } from "react";
import { useAppointment } from "../contexts/AppointmentContext";

export default function ServiceOption() {
  const { setService, setCost } = useAppointment();
  return (
    <div className="h-auto my-unit-3xl xsm:mx-unit-2xl lg:mx-unit-0 flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
      {barber.map((card, index) => (
        <div key={index} className="justify-center">
          <Card
            radius="lg"
            shadow="none"
            className="border-none"
            isPressable
            onPress={() => {
              setService(card.service_dis);
              setCost(card.service_cost);
            }}
          >
            <Image
              alt="service1"
              className="object-cover"
              height={250}
              src={card.service_img}
              width={280}
            />
            <CardFooter className="justify-between  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10">
              <div className="w-full">
                <h1 className="text-center font-bold text-2xl my-unit-md">
                  {card.service_dis}
                </h1>
              </div>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
