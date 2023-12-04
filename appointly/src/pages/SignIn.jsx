import { useState } from 'react';
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Input } from "@nextui-org/react";
import {EyeFilledIcon} from "../assets/EyeFilledIcon";
import {EyeSlashFilledIcon} from "../assets/EyeSlashFilledIcon";

export default function SingIn() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
      <NavBar />
      <main className="w-screen flex flex-col items-center justify-center my-unit-4xl sm:px-4">
        <div className="bg-white shadow-lg py-6 space-y-8 sm:p-6 sm:rounded-lg w-unit-8xl p-unit-lg">
          <div>
            <h1 className="text-center font-bold text-main-clr text-2xl">
              Sign in
            </h1>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              {/* <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              /> */}
              <Input
              isClearable
              type="email"
              label="Email"
              labelPlacement="outside"
              variant="bordered"
              classNames={{
                inputWrapper: [
                    "border-1",
                    "focus:border-indigo-900"
                ],
                innerWrapper: [
                    "focus:border-indigo-900"
                ],
                input: [
                    "focus:border-indigo-900"
                ]
              }}
              
            />
            </div>
            <div className='py-1'>
              <Input
                label="Password"
                labelPlacement='outside'
                variant="bordered"
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
                className="max-w-lg"
                classNames={{
                inputWrapper: [
                    "border-1",
                    "focus:border-indigo-900"
                ],
                innerWrapper: [
                    "focus:border-indigo-900"
                ],
                input: [
                    "focus:border-indigo-900"
                ]
              }}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  id="remember-me-checkbox"
                  className="checkbox-item peer hidden"
                />
                <label
                  htmlFor="remember-me-checkbox"
                  className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                ></label>
                <span>Remember me</span>
              </div>
              <a
                href="javascript:void(0)"
                className="text-center text-main-clr hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-btn-sign hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign in
            </button>
          </form>
          <p className="text-center">
            Don't have an account?&nbsp;
            <a
              href="javascript:void(0)"
              className="font-medium text-primary hover:text-indigo-500"
            >
              Sign up
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
