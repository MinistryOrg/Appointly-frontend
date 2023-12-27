import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Card, Image } from "@nextui-org/react";

export default function ServicesMenu() {
  return (
    <>
      <NavBar />
      <main>
        <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
          <div className="w-full">
            <h1 className="text-center font-bold text-main-clr text-4xl my-4">
              Services
            </h1>
            <p className="text-center font-bold text-secondary text-lg my-4">
              Choose the service that best suits you!
            </p>
          </div>
          <div className="lg:mx-unit-7xl lg:my-unit-3xl xsm:mx-auto xsm:my-unit-sm w-max h-full grid gap-x-unit-7xl gap-y-unit-3xl xsm:grid-cols-1 lg:grid-cols-2 justify-center">
            <div>
              <Card
                radius="lg"
                shadow="none"
                isPressable
                className="border-none justify-center"
              >
                <Image
                  alt="service3"
                  className="object-cover justify-center"
                  height={300}
                  src="../../src/styles/images/barber_srv.svg"
                  width={300}
                />
              </Card>
              <h1 className="text-center font-bold text-lg my-unit-md">
                Barber shop
              </h1>
            </div>
            <div>
              <Card
                radius="lg"
                shadow="none"
                isPressable
                className="border-none justify-center"
              >
                <Image
                  alt="service3"
                  className="object-cover justify-center"
                  height={300}
                  src="../../src/styles/images/nail_srv.svg"
                  width={300}
                />
              </Card>
              <h1 className="text-center font-bold text-lg my-unit-md">
                Nails salon
              </h1>
            </div>
            <div>
              <Card
                radius="lg"
                shadow="none"
                isPressable
                className="border-none justify-center"
              >
                <Image
                  alt="service3"
                  className="object-cover justify-center"
                  height={300}
                  src="../../src/styles/images/mechanic_srv.svg"
                  width={300}
                />
              </Card>
              <h1 className="text-center font-bold text-lg my-unit-md">
                Mechanic
              </h1>
            </div>
            <div>
              <Card
                radius="lg"
                shadow="none"
                className="border-none justify-center cursor-not-allowed"
              >
                <Image
                  alt="service3"
                  className="object-cover justify-center grayscale"
                  height={300}
                  src="../../src/styles/images/trainer_srv.svg"
                  width={300}
                />
              </Card>
              <h1 className="text-center font-bold text-lg my-unit-md ">
                Personal Trainer
              </h1>
            </div>
          </div>
        </div>
      </main>
      <section className="mt-unit-2xl">
        <Footer />
      </section>
    </>
  );
}
