import { Card, Image } from "@nextui-org/react";
import { generalData } from "../data/generalServData";
import ServicesMenu from "./ServiceMenu";
import { getImageURL } from "../utils/image-util";
function Service() {
  return (
    <div className="m-unit-xl h-auto w-auto" id="services">
      <div className="w-full ">
        <h1 className="font-bold text-4xl text-center">Booking made easy</h1>
      </div>
      {/* <div className="h-auto w-fit my-unit-3xl  grid gap-x-unit-4xl gap-y-unit-3xl xsm:grid-cols-1 lg:grid-cols-3 justify-center sm:gap-unit-md xsm:mx-unit-4xl lg:mx-unit-6xl lg:gap-unit-5xl"> */}
      <div className="lg:mx-unit-6xl lg:my-unit-3xl xsm:mx-auto xsm:my-unit-sm h-full grid gap-x-unit-5xl gap-y-unit-3xl xsm:grid-cols-1 lg:grid-cols-3 justify-center w-fit">
        {generalData.map((card, index) => (
          <div key={index} className=" justify-center my-3">
            <Card radius="lg" shadow="none" className="border-none bg-inherit">
              <Image
                alt={card.alt}
                className="object-cover"
                height={250}
                src={getImageURL(card.imageSrc)}
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
