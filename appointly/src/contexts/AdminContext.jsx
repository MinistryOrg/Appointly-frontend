import { createContext, useContext, useEffect, useState } from "react";

const admin_url =
  "https://appointly-production.up.railway.app/api/v1/appointly/admin";

const AdminContext = createContext();

const colors = ["#5f5ef6", "#4241AC", "#8D8DCD"];

function AdminProvider({ children }) {
  const [adminShop, setAdminShop] = useState([]);
  const [totalCost, setTotalCost] = useState();
  const [listAppointments, setListAppointments] = useState();

  async function fetchShopAdmin(email, controller) {
    console.log(email);

    try {
      const res = await fetch(`${admin_url}/getShop?email=${email}`, {
        signal: controller.signal,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        mode: "cors",
      });

      if (!res.ok) throw new Error("something went wrong");
      const data = res.json();
      console.log(data);
      data.then((sh) => {
        setAdminShop(sh);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchAppointments(name, controller) {
    try {
      const res = await fetch(`${admin_url}/appointments?shopName=${name}`, {
        signal: controller.signal,
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        mode: "cors",
      });
      if (!res.ok) throw new Error("something went wrong");
      const data = res.json();
      console.log("appointment", data);
      data.then((appoint) => {
        setListAppointments(appoint);
      });
      const sum = calculateTotalCost(listAppointments);
      setTotalCost(sum);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const sum = calculateTotalCost(listAppointments);
    setTotalCost(sum);
  }, [listAppointments]);

  function calculateTotalCost(appointments) {
    if (!appointments || !appointments.length) {
      return 0; // Return 0 if appointments is undefined or empty
    }

    return appointments.reduce(
      (total, appointment) => total + appointment.cost,
      0
    );
  }

  function getServices(appointments) {
    const servicesCount = {};

    if (Array.isArray(appointments)) {
      appointments.forEach((appointment) => {
        const { service } = appointment;
        if (service) {
          if (servicesCount[service]) {
            servicesCount[service]++;
          } else {
            servicesCount[service] = 1;
          }
        }
      });
    }

    console.log("Services Count:", servicesCount);
    return servicesCount;
  }

  // Define a function to map services to colors
  function getServiceColor(service) {
    if (adminShop.servicesOptions) {
      const index = adminShop.servicesOptions.indexOf(service);
      if (index !== -1) {
        // If service is in servicesOptions, use its index to get the color
        const color = colors[index];
        if (color) {
          return color;
        }
      }
    }

    return "#FFFFFF";
  }

  async function cancelAppointment(id) {
    try {
      const res = fetch(`${admin_url}/cancelAppointment?id=${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        mode: "cors",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AdminContext.Provider
      value={{
        adminShop,
        fetchShopAdmin,
        fetchAppointments,
        listAppointments,
        getServices,
        totalCost,
        getServiceColor,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}

function useAdmin() {
  //we need to tell react which context we are going to use.
  const context = useContext(AdminContext);
  if (context === undefined)
    throw new Error("Admin Context was used outside the Admin provider");
  return context;
}

export { AdminProvider, useAdmin };
