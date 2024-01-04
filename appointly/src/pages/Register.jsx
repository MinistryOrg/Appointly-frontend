import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("alg");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

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
      <main className="w-screen flex flex-col items-center justify-center my-unit-4xl sm:px-4">
        <div className="bg-white shadow-lg py-6 space-y-8 sm:p-6 sm:rounded-lg w-unit-8xl p-unit-lg">
          <div>
            <h1 className="text-center font-bold text-main-clr text-2xl">
              Create account
            </h1>
          </div>
          <form onSubmit={register} className="space-y-5">
            <div>
              <Input
                type="text"
                label="Full Name"
                value={firstname}
                onValueChange={setFirstname}
                labelPlacement="outside"
                radius="sm"
                variant="bordered"
                isClearable
                onClear={() => setFirstname("")}
                className="py-1"
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
              <Input
                isClearable
                type="email"
                label="Email"
                value={email}
                onValueChange={setEmail}
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
                value={password}
                onValueChange={setPassword}
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
              {/* <Input
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
              /> */}
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-btn-sign hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
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
      <section className="mt-unit-6xl">
        <Footer />
      </section>
    </>
  );
}
