import { Card, CardFooter, Image, Spinner } from "@nextui-org/react";
import { useAppointment } from "../contexts/AppointmentContext";
import { useShops } from "../contexts/ShopContext";
import { getImageURL } from "../utils/image-util";

function Personnel() {
  const { setSelectedPersonnel, selectedPersonnel } = useAppointment();
  const { currentShop } = useShops();
  const { personnel } = currentShop;

  return (
    <div>
      <div className="h-auto my-unit-3xl xsm:mx-unit-2xl lg:mx-unit-0 flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
        {personnel ? (
          personnel.map((card, index) => (
            <div key={index} className="flex justify-center">
              <Card
                radius="lg"
                shadow="none"
                className="border-none"
                isPressable
                onPress={() => setSelectedPersonnel(personnel[index])}
              >
                <Image
                  alt="service1"
                  className="object-cover"
                  height={250}
                  src={getImageURL("person.svg")}
                  width={280}
                />
                <CardFooter className="justify-between  overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)]  ml-1 z-10">
                  <div className="w-full">
                    <h1 className="text-center font-bold text-2xl my-unit-md">
                      {personnel[index]}
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
      {selectedPersonnel ? (
        <div className="w-full text-center font-bold justify-center flex flex-col">
          <p>Personnel: {selectedPersonnel}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Personnel;
