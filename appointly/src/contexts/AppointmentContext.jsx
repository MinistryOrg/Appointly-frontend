import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useShops } from "./ShopContext";
import { useAuth } from "./AuthContext";

const appoin_url =
  "https://appointly-production.up.railway.app/api/v1/appointly/user";

const date_url =
  "https://appointly-production.up.railway.app/api/v1/auth/appointly";

//

const AppointmentContext = createContext();

function AppointmentProvider({ children }) {
  // use state for service
  const [selectedService, setSelectedService] = useState("");
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

  const [isLoading, setIsLoading] = useState(false);

  const { getShopName } = useShops();
  const { loggedIn } = useAuth();
  console.log("loggedIn", loggedIn);

  const navigate = useNavigate();

  async function bookAppointment() {
    const shopName = getShopName();

    console.log("APO TO CONTEXT BROOO", shopName);
    try {
      setIsLoading(true);
      if (!loggedIn) {
        navigate("/login");
        return;
      }

      const res = await fetch(
        `${appoin_url}/makeAppointment?shopName=${shopName}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({
            service: selectedService,
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
      // Check if the booking was successful
      if (res.ok) {
        console.log("Appointment booked successfully:", data);
        // Redirect to success page
        navigate("/success");
      } else {
        // Handle the case when booking fails (e.g., display an error message)
        console.error("Error booking appointment:", data);
        // Redirect to something went wrong page
        navigate("/failed");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      // Redirect to something went wrong page
      navigate("/failed");
    } finally {
      setIsLoading(false);
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
        selectedService,
        setSelectedService,
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
        isLoading,
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
