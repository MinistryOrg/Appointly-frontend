import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (confirmPasword !== password) {
      setIsInvalid(true);
      setErrorMsg("Passwords doesnt match!");
    } else {
      setIsInvalid(false);
      setErrorMsg("");
    }
  }, [confirmPasword, password]);

  async function register(e) {
    e.preventDefault();
    const abortController = new AbortController();
    try {
      const res = await fetch(
        `https://appointly-production.up.railway.app/api/v1/auth/appointly/register`,
        {
          signal: abortController.signal,
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify({
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password,
          }),
        }
      );

      if (!res.ok) throw new Error("something went wrong");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <NavBar />
      <main className="w-auto flex flex-col items-center justify-center my-unit-xl sm:px-4">
        <div className="bg-white shadow-lg py-6 space-y-8 sm:p-6 sm:rounded-lg w-unit-8xl p-unit-lg">
          <div>
            <h1 className="text-center font-bold text-main-clr text-2xl">
              Create account
            </h1>
          </div>
          <form onSubmit={register} className="space-y-5">
            <div>
              <div className="grid lg:grid-cols-4 xsm:grid-rows-1 gap-x-unit-60 w-full">
                <div className="w-full">
                  <Input
                    type="text"
                    label="First Name"
                    value={firstname}
                    onValueChange={setFirstname}
                    labelPlacement="outside"
                    radius="sm"
                    variant="bordered"
                    isClearable
                    isRequired
                    onClear={() => setFirstname("")}
                    className="py-1 xsm:w-full lg:w-unit-5xl"
                    classNames={{
                      inputWrapper: ["border-1", "font-bold"],
                    }}
                  />
                </div>
                <div className="w-full">
                  <Input
                    type="text"
                    label="Last Name"
                    value={lastname}
                    onValueChange={setLastname}
                    labelPlacement="outside"
                    radius="sm"
                    variant="bordered"
                    isClearable
                    isRequired
                    onClear={() => setLastname("")}
                    className="py-1 xsm:w-full lg:w-unit-5xl"
                    classNames={{
                      inputWrapper: ["border-1", "font-bold"],
                    }}
                  />
                </div>
              </div>
              <Input
                type="email"
                label="Email"
                value={email}
                onValueChange={setEmail}
                labelPlacement="outside"
                radius="sm"
                variant="bordered"
                className="py-1"
                isClearable
                isRequired
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
              <Input
                label="Password"
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
                className="max-w-lg py-1"
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
              <Input
                value={confirmPasword}
                onValueChange={setConfirmPassword}
                errorMessage={errorMsg}
                isInvalid={isInvalid}
                label="Confirm Password"
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
                className="max-w-lg py-1"
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
            </div>
            <button
              className={`w-full px-4 py-2 text-white font-medium rounded-lg ${
                isInvalid
                  ? `bg-gray-400 hover:bg-gray-700 cursor-not-allowed`
                  : `bg-btn-sign hover:bg-indigo-500 active:bg-indigo-600  duration-150`
              }`}
            >
              Register
            </button>
          </form>
          <p className="text-center">
            Already have an account??&nbsp;
            <a
              href="/login"
              className="font-medium text-primary hover:text-indigo-500"
            >
              Sign in
            </a>
          </p>
        </div>
      </main>
      <section className="mt-unit-xl">
        <Footer />
      </section>
    </>
  );
}
