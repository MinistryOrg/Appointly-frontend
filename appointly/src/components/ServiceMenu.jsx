import { Card, Image } from "@nextui-org/react";
import { serviceShopData } from "../data/generalServData";

export default function ServicesMenu() {
  return (
    <>
      <div className="w-full">
        <h1 className="text-center font-bold text-main-clr text-4xl my-4">
          Tailored Services, Just for
          <span className="text-primary-purple"> You</span>!
        </h1>
      </div>
      <div className="lg:mx-unit-4xl lg:my-unit-3xl xsm:mx-auto xsm:my-unit-sm w-fit h-full grid gap-x-unit-4xl gap-y-unit-3xl xsm:grid-cols-1 lg:grid-cols-4 justify-center">
        {serviceShopData.map((type, index) => (
          <div key={index}>
            <Card
              radius="lg"
              shadow="none"
              className="border-none justify-center bg-inherit cursor-default"
            >
              <Image
                alt={type.alt}
                className="object-cover justify-center bg-inherit"
                height={300}
                src={type.imageSrc}
                width={300}
              />
            </Card>
            <h1 className="text-center font-bold text-lg my-unit-md">
              {type.description}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
