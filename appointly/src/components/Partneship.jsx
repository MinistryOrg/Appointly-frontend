import { Image, Button, Link } from "@nextui-org/react";
import { BriefcaseIcon } from "@heroicons/react/24/solid";
function Partneship() {
  return (
    <div className="m-unit-xl mx-0" id="contact">
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
              as={Link}
              href="admin"
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
  );
}

export default Partneship;