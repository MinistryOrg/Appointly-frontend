import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";

export default function Register() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <NavBar />
      <main className="w-screen flex flex-col items-center justify-center my-unit-4xl sm:px-4">
        <div className="bg-white shadow-lg py-6 space-y-8 sm:p-6 sm:rounded-lg w-unit-8xl p-unit-lg">
          <div>
            <h1 className="text-center font-bold text-main-clr text-2xl">
              Create account
            </h1>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <Input
                isClearable
                type="text"
                label="Full Name"
                labelPlacement="outside"
                radius="sm"
                variant="bordered"
                onClear={() => console.log("cleared")}
                className="py-1"
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
              <Input
                isClearable
                type="email"
                label="Email"
                labelPlacement="outside"
                radius="sm"
                variant="bordered"
                className="py-1"
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
              <Input
                label="Password"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                description="Enter 12 characters and try to use Aa1?/-"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-lg py-1"
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
              <Input
                label="Confirm Password"
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? (
                      <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    ) : (
                      <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                    )}
                  </button>
                }
                type={isVisible ? "text" : "password"}
                className="max-w-lg py-1"
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-btn-sign hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
            Register
            </button>
          </form>
          <p className="text-center">
          Already have an account??&nbsp;
            <a
              href="javascript:void(0)"
              className="font-medium text-primary hover:text-indigo-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </main>
      <section className="mt-unit-6xl">
        <Footer />
      </section>
    </>
  );
}
