import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShops } from "./ShopContext";

const appoin_url =
  "https://appointly-production.up.railway.app/api/v1/appointly/user";

const date_url =
  "https://appointly-production.up.railway.app/api/v1/auth/appointly";

//

const AppointmentContext = createContext();

function AppointmentProvider({ children }) {
  // use state for service
  const [service, setService] = useState("");
  const [selectedCost, setSelectedCost] = useState("");
  //use state for personnel
  const [selectedPersonnel, setSelectedPersonnel] = useState("");
  //use state for calendar
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    currentDate.toLocaleDateString("en-GB")
  );
  const [selectedTime, setSelectedTime] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);
  const [formattedTime, setFormattedTime] = useState(null);
  const [dateInValid, setDateInValid] = useState("");
  const [appointmentDate, setAppointmentDate] = useState({});

  const [bookedTimes, setBookedTimes] = useState([]);
  const [allTimesBooked, setAllTimesBooked] = useState(false);

  const { getShopName } = useShops();

  const navigate = useNavigate();

  async function bookAppointment() {
    const shopName = getShopName();

    console.log("APO TO CONTEXT BROOO", shopName);
    try {
      const res = await fetch(
        `${appoin_url}/makeAppointment?shopName=${shopName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            service: service,
            personnel: selectedPersonnel,
            cost: selectedCost,
            date: formattedDate,
            time: formattedTime,
          }),
        }
      );

      const data = res.json();

      // Handle the API response as needed
      console.log("Appointment booked:", data);
      navigate("/");
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  }

  async function checkDates() {
    const shopName = getShopName();
    try {
      const res = await fetch(`${date_url}/dates?shopName=${shopName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = res.json();
      data.then((date) => {
        setAppointmentDate(date);
        console.log(date);
      });
    } catch (error) {
      console.error("Error booking appointment:", error);
    }
  }

  return (
    <AppointmentContext.Provider
      value={{
        service,
        setService,
        selectedCost,
        setSelectedCost,
        selectedPersonnel,
        setSelectedPersonnel,
        currentDate,
        setCurrentDate,
        selectedDate,
        setSelectedDate,
        selectedTime,
        setSelectedTime,
        bookAppointment,
        formattedDate,
        setFormattedDate,
        formattedTime,
        setFormattedTime,
        dateInValid,
        setDateInValid,
        appointmentDate,
        checkDates,
        setBookedTimes,
        bookedTimes,
        allTimesBooked,
        setAllTimesBooked,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
}

function useAppointment() {
  //we need to tell react which context we are going to use.
  const context = useContext(AppointmentContext);
  if (context === undefined)
    throw new Error(
      "Appointment Context was used outside the Appointment provider"
    );
  return context;
}

export { AppointmentProvider, useAppointment };
