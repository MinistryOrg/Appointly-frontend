import { Input } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { useAuth } from "../contexts/AuthContext";
import Callout from "./ui/Callout";

function EditProfile() {
  const [isVisible, setIsVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { changePassword, doneEdit, setDoneEdit, showChange, setShowChange } =
    useAuth();

  useEffect(() => {
    if (confirmPassword !== newPassword) {
      setIsInvalid(true);
      setErrorMsg("Passwords doesnt match!");
    } else {
      setIsInvalid(false);
      setErrorMsg("");
    }
  }, [confirmPassword, newPassword]);

  function resetInputs() {
    setOldPassword("");
    setNewPassword("");
    setConfirmPassword("");
  }

  console.log(doneEdit, showChange);

  return (
    <>
      <main className="p-10 md:ml-64 h-auto pt-20">
        {showChange ? (
          doneEdit ? (
            <Callout
              type={"success"}
              color={"green"}
              headline={"Change password successfully!"}
              paragraph={"Changes have been made successfully"}
              show={showChange}
              setShow={setShowChange}
            />
          ) : (
            <Callout
              type={"error"}
              color={"red"}
              headline={"Failed to change passowrd!"}
              paragraph={"Something went wrong!"}
              show={showChange}
              setShow={setShowChange}
            />
          )
        ) : (
          ""
        )}
        <h1 className="text-2xl font-semibold mx-unit-3xl">Edit Profile</h1>

        <h2 className="text-xl font-semibold mx-unit-3xl mt-10">
          Update password
        </h2>
        <div className="bg-white border-1 border-gray-200 rounded-lg h-auto mx-unit-3xl my-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowChange(true);
              changePassword(oldPassword, newPassword, confirmPassword);
            }}
          >
            <div className="w-full grid grid-cols-1 p-5 gap-2 font-semibold my-5">
              <div className="col flex flex-row w-full px-10 ">
                <p className="w-auto">Old password:</p>
              </div>
              <div className="col flex flex-row w-full px-10 mb-5">
                <Input
                  value={oldPassword}
                  onValueChange={setOldPassword}
                  labelPlacement="outside"
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
                    input: ["bg-white", "border-white"],
                    inputWrapper: ["border-1", "h-2/3", "w-1/2"],
                  }}
                />
              </div>
              <div className="col flex flex-row w-full px-10 ">
                <p className="w-auto">New password:</p>
              </div>
              <div className="col flex flex-row w-full px-10">
                <Input
                  value={newPassword}
                  onValueChange={setNewPassword}
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
                <p className="w-auto">Confirm new password:</p>
              </div>
              <div className="col flex flex-row w-full px-10">
                <Input
                  value={confirmPassword}
                  onValueChange={setConfirmPassword}
                  errorMessage={errorMsg}
                  isInvalid={isInvalid}
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
                <button
                  className="w-full px-4 py-2 text-black font-medium bg-white hover:bg-gray-300 active:bg-gray-400 border-1 border-gray-300 rounded-lg duration-150"
                  onClick={resetInputs}
                >
                  Cancel
                </button>
              </div>
              <div className="p-5">
                <button
                  className={`w-full px-4 py-2 text-white font-medium rounded-lg duration-150 ${
                    isInvalid
                      ? `bg-gray-400 hover:bg-gray-700 cursor-not-allowed`
                      : `bg-btn-purple hover:bg-indigo-800 active:bg-indigo-600`
                  } `}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default EditProfile;
