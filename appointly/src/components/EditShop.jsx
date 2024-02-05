import { Input } from "@nextui-org/react";

function EditShop() {
  return (
    <>
      <main className="p-10 md:ml-64 h-auto pt-20">
        <h1 className="text-2xl font-semibold mx-unit-3xl">Edit Shop</h1>

        <h2 className="text-xl font-semibold mx-unit-3xl mt-10">
          Update shop's general infromation
        </h2>
        <div className="bg-white border-1 border-gray-200 rounded-lg h-auto mx-unit-3xl my-5">
          <div className="w-full grid grid-cols-2 p-5 gap-10 font-semibold my-5">
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Name:</p>
              <Input
                key="left"
                placeholder="Insert Name"
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Discription:</p>
              <Input
                key="left"
                placeholder="Discription"
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Address:</p>
              <Input
                key="left"
                placeholder="Address"
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Telephone:</p>
              <Input
                key="left"
                placeholder="Telephone"
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
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
        <h2 className="text-xl font-semibold mx-unit-3xl mt-10 ">
          Update shop services
        </h2>
        <div className="bg-white border-1 border-gray-200 rounded-lg h-auto mx-unit-3xl my-5">
          <div className="w-full grid grid-cols-2 p-5 gap-10 font-semibold my-5">
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Service:</p>
              <Input
                key="left"
                placeholder="Service 1"
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-3xl my-4">Price:</p>
              <Input
                type="number"
                placeholder="0.00"
                labelPlacement="outside"
                className="my-2 w-1/2"
                variant="bordered"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-500 text-small">€</span>
                  </div>
                }
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Service:</p>
              <Input
                key="left"
                placeholder="Service 2"
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-3xl my-4">Price:</p>
              <Input
                type="number"
                placeholder="0.00"
                labelPlacement="outside"
                className="my-2 w-1/2"
                variant="bordered"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-500 text-small">€</span>
                  </div>
                }
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Service:</p>
              <Input
                key="left"
                placeholder="Service 3"
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex flex-row w-full px-10 ">
              <p className="w-unit-3xl my-4">Price:</p>
              <Input
                type="number"
                placeholder="0.00"
                labelPlacement="outside"
                className="my-2 w-1/2"
                variant="bordered"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
                endContent={
                  <div className="pointer-events-none flex items-center">
                    <span className="text-default-500 text-small">€</span>
                  </div>
                }
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

export default EditShop;
