import { Card, Image } from "@nextui-org/react";
import generalData from "../data/generalServData";
function Service() {
  return (
    <div className="m-unit-xl" id="services">
      <div className="w-full ">
        <h1 className="font-bold text-4xl text-center">Booking made easy</h1>
      </div>
      <div className="h-auto my-unit-3xl flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl">
        {generalData.map((card, index) => (
          <div key={index} className="justify-center">
            <Card radius="lg" shadow="none" className="border-none">
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
    </div>
  );
}

export default Service;
