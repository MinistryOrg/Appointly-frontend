import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Image, Avatar, Button, Card, CardFooter } from "@nextui-org/react";
import StarIcon from "../../src/styles/images/staricon.svg";

export default function Shop() {
  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">Barber Shop name</h1>
        </div>
        <div className="grid md:grid-rows-2 lg:grid-flow-col xsm:grid-flow-row lg:gap-y-2 lg:gap-x-5 xsm:gap-y-4 md:gap-x-9 lg:mx-unit-5xl lg:{mt-unit-2xl, mb-unit-xl} xsm:mx-unit-sm xsm:my-unit-sm h-1/2">
          <div className="lg:row-span-2 xsm:row-span-1 h-auto p-0 m-0">
            <Image
              alt="NextUI hero Image"
              src="../../src/styles/images/shop_prev_1.png"
              className="lg:w-screen md:w-screen sm:w-7/12 p-0 m-0 object-fill"
            />
          </div>
          <div className="col h-auto p-0 m-0 rounded-md">
            <img
              alt="NextUI hero Image"
              src="../../src/styles/images/shop_prev_2.png"
              className="lg:w-11/12 md:w-screen sm:w-7/12 p-0 m-0 rounded-xl"
            />
          </div>
          <div className="col-span-1 h-auto p-0 m-0">
            <img
              alt="NextUI hero Image"
              src="../../src/styles/images/shop_prev_3.png"
              className="lg:w-11/12 md:w-screen sm:w-7/12 p-0 m-0 object-fill rounded-md"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row lg:flex-nowrap md:flex-wrap xsm:flex-col w-auto lg:mx-unit-6xl lg:mb-unit-xl xsm:mx-unit-xl content-center">
          <div className="lg:basis-1/4 md:basis-1/3 xsm:basis-1/2 shrink items-center">
            <div className="xsm:flex justify-center">
              <Avatar
                isBordered
                src="../../src/styles/images/shop_logo.png"
                className="h-44 w-44"
              />
            </div>
          </div>
          <div className="md:text-start xsm:text-center font-bold lg:my-8 xsm:my-2 lg:basis-unit-6xl md:basis-unit-xl xsm:basis-auto">
            <p>Name</p>
            <p>Location</p>
            <p>telephone</p>
            <p>Rating</p>
          </div>
          <div className="basis-full">
            <div className="w-full my-9 flex justify-end">
              <Button className="capitalize lg:w-unit-5xl xsm:w-full font-bold text-lg bg-btn-sign text-white">
                Book Apointly
              </Button>
            </div>
          </div>
        </div>
        <div className="lg:w-fit xsm:w-full md:text-start xsm:text-center font-bold my-10 md:mx-unit-5xl xsm:mx-unit-0">
          <h1 className="text-2xl">Services</h1>
        </div>
        <div className="h-auto my-unit-3xl xsm:mx-unit-2xl lg:mx-unit-0 flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
          <div className="justify-center">
            <Card radius="lg" shadow="none" className="border-none">
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
            <Card radius="lg" shadow="none" className="border-none">
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
            <Card radius="lg" shadow="none" className="border-none">
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
        <div className="lg:w-fit xsm:w-full md:text-start xsm:text-center font-bold my-10 md:mx-unit-5xl xsm:mx-unit-0">
          <h1 className="text-2xl">About us</h1>
        </div>
        <div>
          <p className="lg:mx-unit-5xl xsm:mx-unit-md my-5">
            Lorem ipsum dolor sit amet consectetur. Non arcu malesuada nunc
            aliquam amet neque sollicitudin bibendum. Cursus blandit parturient
            neque felis sed feugiat aenean egestas. Pellentesque velit odio ut
            sed eget aliquam. Consequat bibendum ut hendrerit montes. Cursus
            aliquet non id amet dui nisi. Nunc dictum commodo augue volutpat
            egestas. Quam viverra et convallis amet vestibulum euismod arcu. At
            fermentum netus neque eget. Nulla consectetur odio sed pellentesque
            aliquam. Semper tellus at at et id. Mattis velit nascetur at vitae
            quis eget. Amet a leo ornare at quam. Fringilla.
          </p>
        </div>
        <div className="lg:w-fit xsm:w-full md:text-start xsm:text-center font-bold my-10 md:mx-unit-5xl xsm:mx-unit-0">
          <h1 className="text-2xl">Where to find us</h1>
        </div>
        <div className="lg:mx-unit-5xl xsm:mx-unit-2xl my-8 flex xsm:flex-col lg:flex-row sm:gap-unit-md lg:gap-unit-5xl xsm:gap-y-unit-xl">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4577.842990050212!2d23.73682231937162!3d37.98011804890466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sgr!4v1702313232633!5m2!1sen!2sgr"
              className="border-none lg:w-unit-9xl lg:h-unit-8xl xsm:w-unit-6xl xsm:h-unit-7xl"
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <table className="table-fixed font-bold border-separate border-spacing-5">
              <thead>
                <th>
                  <h1 className="text-2xl my-5">Time open</h1>
                </th>
              </thead>
              <tbody className="">
                <tr className="">
                  <td>Monday</td>
                  <td>CLOSED</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>09:00 - 21:00</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>09:00 - 17:00 </td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>09:00 - 21:00</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>09:00 - 21:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>09:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>CLOSED</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
