import { Input } from "@nextui-org/react";
import { useState } from "react";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";

function EditProfile() {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState();

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <>
      <main className="p-10 md:ml-64 h-auto pt-20">
        <h1 className="text-2xl font-semibold mx-unit-3xl">Edit Profile</h1>

        <h2 className="text-xl font-semibold mx-unit-3xl mt-10">
          Update shop's general infromation
        </h2>
        <div className="bg-white border-1 border-gray-200 rounded-lg h-auto mx-unit-3xl my-5">
          <div className="w-full grid grid-cols-1 p-5 gap-5 font-semibold my-5">
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-auto">First Name:</p>
            </div>
            <div className="col flex flex-row w-full px-10">
              <Input
                key="left"
                placeholder="Insert Name"
                variant="bordered"
                className=""
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3", "w-1/2"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-auto">Last Name:</p>
            </div>
            <div className="col flex flex-row w-full px-10">
              <Input
                key="left"
                placeholder="Insert Name"
                variant="bordered"
                className=""
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3", "w-1/2"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-auto">Email:</p>
            </div>
            <div className="col flex flex-row w-full px-10">
              <Input
                key="left"
                type="email"
                placeholder="Email"
                variant="bordered"
                className=""
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3", "w-1/2"],
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-end">
            <div className="p-5">
              <button className="w-full px-4 py-2 text-black font-medium bg-white hover:bg-gray-300 active:bg-gray-400 border-1 border-gray-300 rounded-lg duration-150">
                Cancel
              </button>
            </div>
            <div className="p-5">
              <button className="w-full px-4 py-2 text-white font-medium bg-btn-purple hover:bg-indigo-800 active:bg-indigo-600 rounded-lg duration-150">
                Save Changes
              </button>
            </div>
          </div>
        </div>
        <hr className="h-1 rounded-lg bg-gray-200 mx-16" />

        <h2 className="text-xl font-semibold mx-unit-3xl mt-10">
          Update password
        </h2>
        <div className="bg-white border-1 border-gray-200 rounded-lg h-auto mx-unit-3xl my-5">
          <div className="w-full grid grid-cols-1 p-5 gap-2 font-semibold my-5">
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-auto">Password:</p>
            </div>
            <div className="col flex flex-row w-full px-10">
              <Input
                value={password}
                onValueChange={setPassword}
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                isRequired
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
                className=""
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3", "w-1/2"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 mt-5 ">
              <p className="w-auto">Confirm Password:</p>
            </div>
            <div className="col flex flex-row w-full px-10">
              <Input
                value={password}
                onValueChange={setPassword}
                // errorMessage={errorMsg}
                // isInvalid={isInvalid}
                variant="bordered"
                radius="sm"
                isRequired
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
                className=""
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3", "w-1/2"],
                }}
              />
            </div>
          </div>
          <div className="w-full flex flex-row justify-end">
            <div className="p-5">
              <button className="w-full px-4 py-2 text-black font-medium bg-white hover:bg-gray-300 active:bg-gray-400 border-1 border-gray-300 rounded-lg duration-150">
                Cancel
              </button>
            </div>
            <div className="p-5">
              <button className="w-full px-4 py-2 text-white font-medium bg-btn-purple hover:bg-indigo-800 active:bg-indigo-600 rounded-lg duration-150">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default EditProfile;
