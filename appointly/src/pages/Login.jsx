import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Input, Checkbox } from "@nextui-org/react";
import { EyeFilledIcon } from "../assets/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../assets/EyeSlashFilledIcon";
import { jwtDecode } from "jwt-decode";
import { useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/LoginContext";

const BASE_URL = `https://appointly-production.up.railway.app/api/v1/auth/appointly`;

export default function Login() {
  const { loggedin, changeLoggedIn } = useLogin();

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    const abortController = new AbortController();
    const url = BASE_URL + `/authenticate`;
    try {
      const res = await fetch(url, {
        signal: abortController.signal,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!res.ok) throw new Error("something went wrong");

      const data = await res.json();
      localStorage.setItem("token", data.token);
      // console.log(localStorage);
      // console.log(data.token);
      const decode = jwtDecode(data.token);
      // console.log(decode);
      // console.log(decode.email);
      // console.log(decode.firstname);
      // console.log(decode.lastname);
      changeLoggedIn(true, decode.email);
      navigate("/");
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
              Sign in
            </h1>
          </div>
          <form onSubmit={login} className="space-y-5">
            <div>
              <Input
                type="email"
                label="Email"
                value={email}
                onValueChange={setEmail}
                labelPlacement="outside"
                radius="sm"
                variant="bordered"
                isClearable
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
      <section className="mt-unit-6xl">
        <Footer />
      </section>
    </>
  );
}
