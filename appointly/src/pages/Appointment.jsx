import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Breadcrumbs, BreadcrumbItem, Card, CardFooter, Image } from "@nextui-org/react";

export default function Appointment() {
  const [currentPage, setCurrentPage] = useState("service");
  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">Barber Shop name</h1>
          <h2 className="text-xl my-5">Book Appointment</h2>
        </div>

        <div className="flex justify-center my-5">
          <Breadcrumbs
            underline="none"
            onAction={(key) => setCurrentPage(key)}
            itemClasses={{
              item: "font-bold text-md  data-[current=true]:text-indigo-800",
              separator: "font-bold",
            }}
          >
            <BreadcrumbItem key="service" isCurrent={currentPage === "service"}>
              Service
            </BreadcrumbItem>
            <BreadcrumbItem key="pers" isCurrent={currentPage === "pers"}>
              Personnel
            </BreadcrumbItem>
            <BreadcrumbItem key="date" isCurrent={currentPage === "date"}>
              Date & Time
            </BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <Service/>
      </div>
      <Footer />
    </>
  );
}

function Service() {
  return (
    <div className="h-auto my-unit-3xl xsm:mx-unit-2xl lg:mx-unit-0 flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
      <div className="justify-center">
        <Card isPressable radius="lg" shadow="none" className="border-none" onPress={()=>console.log("jnadwjaw")}>
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
                Haircut
              </h1>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="justify-center">
        <Card isPressable radius="lg" shadow="none" className="border-none" onPress={()=>console.log("jnadwjaw")}>
          <Image
            alt="service2"
            className="object-cover"
            height={250}
            src="../../src/styles/images/beard_srv_2.svg"
            width={280}
          />
          <CardFooter className="justify-between   overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1  w-[calc(100%_-_8px)]  ml-1 z-10">
            <div className="w-full">
              <h1 className="text-center font-bold text-2xl my-unit-md">
                Beard Trim
              </h1>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="justify-center">
        <Card isPressable radius="lg" shadow="none" className="border-none" onPress={()=>console.log("jnadwjaw")}>
          <Image
            alt="service3"
            className="object-cover"
            height={250}
            src="../../src/styles/images/shave_srv_3.svg"
            width={280}
          />
          <CardFooter className="justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1  w-[calc(100%_-_8px)]  ml-1 z-10">
            <div className="w-full">
              <h1 className="text-center font-bold text-2xl my-unit-md">
                Shave
              </h1>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
