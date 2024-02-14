import { Input } from "@nextui-org/react";
import { useAdmin } from "../contexts/AdminContext";
import { useState } from "react";
import Callout from "./ui/Callout";

function EditShop() {
  const { adminShop, editShop, show, setShow, doneEdit } = useAdmin();
  console.log("edit", adminShop);
  const { name, description, address, telephone, servicesOptions, cost } =
    adminShop;

  const [newName, setNewName] = useState(name ? name : "");
  const [newDescr, setNewDescr] = useState(description ? description : "");
  const [newAddr, setNewAddr] = useState(address ? address : "");
  const [newTelep, setNewTelep] = useState(telephone ? telephone : "");
  const [newServices, setNewServices] = useState([...servicesOptions]);
  const [newCosts, setNewCosts] = useState([...cost]);

  // Update service at a specific index
  const handleServiceChange = (index, value) => {
    const updatedServices = [...newServices];
    updatedServices[index] = value;
    setNewServices(updatedServices);
  };

  // Update cost at a specific index
  const handleCostChange = (index, value) => {
    const updatedCosts = [...newCosts];
    updatedCosts[index] = value;
    setNewCosts(updatedCosts);
  };
  const editedServicesArray = servicesOptions.map((originalService, index) =>
    newServices[index] !== undefined ? newServices[index] : originalService
  );

  const editedCostsArray = cost.map((originalCost, index) =>
    newCosts[index] !== undefined ? parseInt(newCosts[index]) : originalCost
  );

  const changes = [newName, newDescr, newAddr, newTelep];

  console.log("cost", editedCostsArray);
  console.log("services", editedServicesArray);
  console.log(changes);

  console.log("doneEdit", doneEdit);

  function resetInputs() {
    setNewName(name ? name : "");
    setNewDescr(description ? description : "");
    setNewAddr(address ? address : "");
    setNewTelep(telephone ? telephone : "");
    setNewServices([...servicesOptions]);
    setNewCosts([...cost]);
  }

  function handleButtonClick() {
    setShow(true);
    editShop(
      adminShop.id,
      editedCostsArray,
      editedServicesArray,
      newName,
      newAddr,
      newDescr,
      newTelep
    );
  }

  console.log(doneEdit);

  return (
    <>
      <main className="p-10 md:ml-64 h-auto pt-20">
        {show ? (
          doneEdit ? (
            <Callout
              type={"success"}
              color={"green"}
              headline={"Successfully edited!"}
              paragraph={"Changes have been made successfully"}
              show={show}
              setShow={setShow}
            />
          ) : (
            <Callout
              type={"error"}
              color={"red"}
              headline={"Failed to edit!"}
              paragraph={"Something went wrong with the edit"}
              show={show}
              setShow={setShow}
            />
          )
        ) : (
          ""
        )}
        <h1 className="text-2xl font-semibold xsm:mx-unit-lg lg:mx-unit-3xl ">
          Edit Shop
        </h1>

        <div className="bg-white border-1 border-gray-200 rounded-lg h-auto xsm:mx-unit-lg lg:mx-unit-3xl my-5">
          <h2 className="text-xl font-semibold mx-unit-2xl mt-10">
            Update shop's general infromation
          </h2>
          <div className="w-full grid xsm:grid-cols-1 lg:grid-cols-2 p-5 gap-10 font-semibold my-5 ">
            <div className="col flex xsm:flex-col lg:flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Name:</p>
              <Input
                key="left"
                value={newName}
                onValueChange={setNewName}
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex  xsm:flex-col lg:flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Description:</p>
              <Input
                key="left"
                value={newDescr}
                onValueChange={setNewDescr}
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex  xsm:flex-col lg:flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Address:</p>
              <Input
                key="left"
                value={newAddr}
                onValueChange={setNewAddr}
                variant="bordered"
                className="my-2"
                classNames={{
                  label: "font-semibold",
                  input: ["bg-white"],
                  inputWrapper: ["border-1", "h-2/3"],
                }}
              />
            </div>
            <div className="col flex  xsm:flex-col lg:flex-row w-full px-10 ">
              <p className="w-unit-4xl my-4">Telephone:</p>
              <Input
                key="left"
                value={newTelep}
                onValueChange={setNewTelep}
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

          <hr className="rounded-lg bg-gray-200 mx-10" />
          <h2 className="text-xl font-semibold mx-unit-2xl mt-10 ">
            Update shop services
          </h2>

          <div className="w-full grid xsm:grid-col-1 lg:grid-cols-2 p-5 gap-10 font-semibold my-5">
            {servicesOptions.map((_, index) => (
              <>
                <div className="col flex  xsm:flex-col lg:flex-row w-full px-10 ">
                  <p className="w-unit-4xl my-4">Service {index + 1}:</p>
                  <Input
                    key="left"
                    value={newServices[index]}
                    onValueChange={(value) => handleServiceChange(index, value)}
                    variant="bordered"
                    className="my-2"
                    classNames={{
                      label: "font-semibold",
                      input: ["bg-white"],
                      inputWrapper: ["border-1", "h-2/3"],
                    }}
                  />
                </div>
                <div className="col flex  xsm:flex-col lg:flex-row w-full px-10 ">
                  <p className="w-unit-3xl my-4">Price:</p>
                  <Input
                    type="number"
                    value={newCosts[index]}
                    onValueChange={(value) => handleCostChange(index, value)}
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
              </>
            ))}
          </div>
          <div className="w-full flex  xsm:flex-col lg:flex-row justify-end">
            <div className="p-5">
              <button
                className="w-full px-4 py-2 text-black font-medium bg-white hover:bg-gray-300 active:bg-gray-400 border-1 border-gray-300 rounded-lg duration-150"
                onClick={resetInputs}
              >
                Cancel
              </button>
            </div>
            <div className="p-5">
              <button
                className="w-full px-4 py-2 text-white font-medium bg-btn-purple hover:bg-indigo-800 active:bg-indigo-600 rounded-lg duration-150"
                onClick={() => handleButtonClick()}
              >
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
