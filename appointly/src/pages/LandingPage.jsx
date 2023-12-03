import { Card, Image, Button } from "@nextui-org/react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
import logo from "../../src/styles/images/apoinlty_logo.png";
import NavBar from "../components/Navbar";
import SearchDiv from "../components/SearchDiv";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <main>
        <div className="w-screen h-auto bg-landing-page bg-no-repeat pb-24">
          <div className="grid grid-rows-3 grid-flow-col gap-4 w-screen h-auto p-unit-15 py-unit-5xl">
            <div className="row-span-3 col-span-2 p-unit-lg">
              <h1 className="font-bold text-4xl">
                Find your favorite service and book your apointly now!
              </h1>
              <SearchDiv />
            </div>
            <div className="row-span-2 "></div>
          </div>
        </div>
        <hr className="my-4 mx-5 bg-divider w-auto h-1 rounded-md"/>
        <div className="m-unit-xl">
          <div className="w-full ">
            <h1 className="font-bold text-4xl text-center">Booking made easy</h1>
          </div>
          <div className="h-auto my-unit-3xl flex xsm:flex-col lg:flex-row justify-center sm:gap-unit-md lg:gap-unit-5xl">
            <div className="justify-center">
              <Card radius="lg" shadow="none" className="border-none">
                <Image
                  alt="service1"
                  className="object-cover"
                  height={250}
                  src="../../src/styles/images/service1.webp"
                  width={280}
                />
              </Card>
              <h1 className="text-center font-bold text-lg my-unit-md">
                Book with confidence.
              </h1>
            </div>
            <div className="justify-center">
              <Card radius="lg" shadow="none" className="border-none">
                <Image
                  alt="service2"
                  className="object-cover"
                  height={250}
                  src="../../src/styles/images/service2.webp"
                  width={280}
                />
              </Card>
              <h1 className="text-center font-bold text-lg my-unit-md">
                You choose the where and when.
              </h1>
            </div>
            <div className="justify-center">
              <Card radius="lg" shadow="none" className="border-none">
                <Image
                  alt="service3"
                  className="object-cover"
                  height={250}
                  src="../../src/styles/images/service3.webp"
                  width={280}
                />
              </Card>
              <h1 className="text-center font-bold text-lg my-unit-md">
                Enjoy your new style
              </h1>
            </div>
          </div>
        </div>
        <div>
          {/*
        //TODO MAKE ABOUT US SECTION !
        */}
        </div>
        <div className="m-unit-xl mx-0">
          <div className="w-screen xsm:h-1/3 lg:h-auto bg-lp-bg">
            <div className="grid xsm:grid-cols-1 lg:grid-cols-2 gap-2 w-screen xsm:py-unit-md lg:py-unit-xl xsm:px-unit-xl lg:px-unit-5xl">
              <div>
                <h1 className="font-bold text-2xl text-primary">
                  Do you wish your Service to be part of our apointly community?
                </h1>
                <p className="my-unit-xl text-lg font-bold">
                  Apointly provides you with unique services!!!
                  <br />
                  <span className="text-secondary">
                    Become a member of the community and discover the unique
                    services it offers for the growth of your store!
                  </span>
                </p>
                <Button
                  className="capitalize w-auto h-auto py-3 px-5 font-bold text-lg bg-primary text-white"
                  startContent={<BriefcaseIcon />}
                >
                  Become a member now!
                </Button>
              </div>
              <div className="place-self-end xsm:invisible lg:visible">
                <Image
                  width={250}
                  className="justify-end"
                  alt="NextUI hero Image"
                  src="../../src/styles/images/memberImg.webp"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-footerClr mx-0 w-screen h-auto">
          <div className="grid grid-cols-2 md:grid-cols-3">
            <div className="p-unit-xl m-unit-lg">
              <Image
                width={300}
                radius="none"
                className="justify-end"
                alt="NextUI hero Image"
                src={logo}
              />
            </div>
            <div className="text-white font-bold my-unit-xl">
              <h2>Usefull links</h2>
              <ul className="list-disc">
                <li>Blog</li>
                <li>About</li>
                <li>Contact</li>
                <li>Privacy policy</li>
                <li>Terms & conditions</li>
              </ul>
            </div>
          </div>
          <div className="w-full m-0">
              <p className="text-gray-600 text-center">Copyrights © 2023 -2030 MinistryOrg</p>
          </div>
        </footer>
      </main>
    </>
  );
}
