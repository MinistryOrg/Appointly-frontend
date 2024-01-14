import { Card, Image } from "@nextui-org/react";
import { generalData } from "../data/generalServData";
import ServicesMenu from "./ServiceMenu";
function Service() {
  return (
    <div className="m-unit-xl" id="services">
      <div className="w-full ">
        <h1 className="font-bold text-4xl text-center">Booking made easy</h1>
      </div>
      <div className="h-auto w-fit my-unit-3xl flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md xsm:mx-unit-3xl lg:mx-unit-6xl lg:gap-unit-5xl">
        {generalData.map((card, index) => (
          <div key={index} className="justify-center my-3">
            <Card radius="lg" shadow="none" className="border-none bg-inherit">
              <Image
                alt={card.alt}
                className="object-cover"
                height={250}
                src={card.imageSrc}
                width={280}
              />
            </Card>
            <h1 className="text-center font-bold text-lg my-unit-md">
              {card.description}
            </h1>
          </div>
        ))}
      </div>
      <ServicesMenu />
    </div>
  );
}

export default Service;
