import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Breadcrumbs, Navbar } from "@nextui-org/react";
import Calendar from "./components/Calendar";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";

const dataTest = {
  email: "alogo@gmail.com",
  password: "1234",
};

export function Example() {
  //   const token =
  //     "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjRAZ21haWwuY29tIiwiaWF0IjoxNzAxMjY5MjcwLCJleHAiOjE3MDI1NjUyNzB9.lk4YjmGYQvXDJpi-_hI8fDR_xPzwjRPoM7SGWSabIWU";

  //   const decoded = jwtDecode(token);
  //   console.log(decoded);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [last, setLast] = useState("");

  useEffect(function () {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const res = await fetch(
          `https://appointly-production.up.railway.app/api/v1/auth/appointly/authenticate`,
          {
            signal: abortController.signal,
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            mode: "cors",
            body: JSON.stringify(dataTest),
          }
        );

        if (!res.ok) throw new Error("something went wrong");

        const data = await res.json();

        console.log(data.token);

        const decode = jwtDecode(data.token);
        console.log(decode);
        console.log(decode.sub);
        setEmail(decode.email);
        setName(decode.firstname);
        setLast(decode.lastname);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

    return () => abortController.abort();
  }, []);

  // useEffect(() => {
  //   setName(jwtDecode(token).email);
  // }, []);

  return (
    <>
      <div>
        <p>{name}</p>
        <p>{last}</p>
        <p>{email}</p>
      </div>
    </>
  );
}

const register = {
  firstname: "eimai",
  lastname: "alogo",
  email: "alogo@gmail.com",
  password: "1234",
};

export function Register() {
  useEffect(function () {
    const abortController = new AbortController();

    async function registerData() {
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
            body: JSON.stringify(register),
          }
        );

        if (!res.ok) throw new Error("something went wrong");
      } catch (error) {
        console.log(error);
      }
    }

    registerData();
  }, []);
}

export function Shops() {
  const [shop, setShop] = useState([]);

  useEffect(function () {
    const abortController = new AbortController();
    const queryParams = new URLSearchParams({
      location: "Athens",
      service: "Nails-salon",
    });

    async function ShopData() {
      try {
        const res = await fetch(
          `https://appointly-production.up.railway.app/api/v1/auth/appointly/shopsByLocationService?${queryParams}`,
          {
            signal: abortController.signal,
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            mode: "cors",
          }
        );

        if (!res.ok) throw new Error("something went wrong");
        const data = res.json();
        console.log(data);
        data.then((shop) => {
          setShop(shop);
        });
      } catch (error) {
        console.log(error);
      }
    }

    ShopData();
    // Cleanup function for useEffect
    return () => abortController.abort();
  }, []);

  console.log(shop);
}

export function Something() {
  const [currentShop, setCurrentShop] = useState({});
  const id = 2;

  useEffect(function () {
    async function fetchShop() {
      try {
        const res = await fetch(
          `https://appointly-production.up.railway.app/api/v1/auth/appointly/searchShopById?id=${id}`
        );
        const data = await res.json();
        console.log("Fetch ", data);
        setCurrentShop(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchShop();
  }, []);

  console.log("current shop ", currentShop);
}

//  https://appointly-production.up.railway.app/api/v1/auth/appointly/shopsByLocationService?location=Athens&service=Barber-shop

export function TestCalendar() {
  return (
    <>
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">name</h1>
          <h2 className="text-xl my-5">Book Appointment</h2>
        </div>

        <Calendar />
      </div>
      <Footer />
    </>
  );
}
