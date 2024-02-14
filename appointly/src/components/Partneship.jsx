import { Image, Button, Link } from "@nextui-org/react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
function Partneship() {
  return (
    <div className="m-unit-xl mx-0" id="contact">
      <div className="w-full xsm:h-1/3 lg:h-auto bg-lp-bg">
        <div className="flex xsm:flex-col lg:flex-row gap-2 w-full xsm:py-unit-md lg:py-unit-xl xsm:px-unit-xl lg:px-unit-5xl">
          <div className="basis-1/2">
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
            <div className="flex flex-col space-y-5">
              <Button
                className="capitalize xsm:w-auto lg:w-1/2 h-auto py-3 px-5 font-bold text-lg bg-primary text-white"
                startContent={<BriefcaseIcon />}
                as={Link}
                href="#"
              >
                Become a member now!
              </Button>

              <h2 className="font-semibold">
                If you're already a member, log in here.
              </h2>
              <Button
                className="capitalize xsm:w-auto lg:w-1/2 h-auto py-3 px-5 font-bold text-lg bg-dark-primary text-white"
                startContent={
                  <svg
                    className="w-6 h-6 text-white transition duration-75  group-hover:text-gray-300 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                }
                as={Link}
                href="/dashboard"
              >
                Go to admin dashboard
              </Button>
            </div>
          </div>
          <div className="basis-1/2 xsm:hidden md:inline">
            <div className="w-full flex flex-row justify-center">
              <Image
                width={250}
                alt="NextUI hero Image"
                src="../../src/styles/images/memberImg.webp"
                className="justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partneship;
