import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Input, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const {
    login,
    logEmail,
    setLogEmail,
    isInvalid,
    password,
    setPassword,
    loggedIn,
    isAdmin,
  } = useAuth();

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const navigate = useNavigate();

  useEffect(
    function () {
      if (loggedIn) {
        navigate("/");
      }
    },
    [loggedIn, navigate]
  );

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
          <form onSubmit={login} className="space-y-5">
            <div>
              <Input
                type="email"
                label="Email"
                value={logEmail}
                onValueChange={setLogEmail}
                labelPlacement="outside"
                radius="sm"
                variant="bordered"
                isClearable
                isRequired
                isInvalid={isInvalid}
                classNames={{
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
            </div>
            <div className="py-1">
              <Input
                label="Password"
                value={password}
                onValueChange={setPassword}
                labelPlacement="outside"
                variant="bordered"
                radius="sm"
                description="Enter 12 characters and try to use Aa1?/-"
                isRequired
                isInvalid={isInvalid}
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
                  inputWrapper: ["border-1", "font-bold"],
                }}
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-x-3">
                <Checkbox radius="sm" color="purple">
                  Remember me
                </Checkbox>
              </div>
              <a
                href="/#"
                className="text-center text-main-clr hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-btn-sign hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Sign in
            </button>
            {isInvalid ? (
              <p className="text-center text-error font-semibold">
                Wrong email or password!
              </p>
            ) : (
              ""
            )}
          </form>
          <p className="text-center">
            Dont have an account?&nbsp;
            <a
              href="/register"
              className="font-medium text-primary hover:text-indigo-500"
            >
              Sign up
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
