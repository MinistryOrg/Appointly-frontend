import { createContext, useContext, useEffect, useState } from "react";

const admin_url =
  "https://appointly-production.up.railway.app/api/v1/appointly/admin";
const user_url =
  "https://appointly-production.up.railway.app/api/v1/appointly/user";

const AdminContext = createContext();

function AdminProvider({ children }) {
  const [adminShop, setAdminShop] = useState([]);
  const [totalCost, setTotalCost] = useState();
  const [listAppointments, setListAppointments] = useState();
  const [doneEdit, setDoneEdit] = useState(false);
  const [show, setShow] = useState(false);

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
      data.then((appoint) => {
        setListAppointments(appoint);
      });
      const sum = calculateTotalCost(listAppointments);
      setTotalCost(sum);
    } catch (error) {
      if (error === 403) {
        console.log("Empty Array");
      }
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
    return servicesCount;
  }

  async function cancelAppointment(id) {
    console.log(id);
    try {
      const res = await fetch(`${admin_url}/cancelAppointment?id=${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (res.ok) {
        console.log("Appointment canceled successfully");
        const updatedAppointments = listAppointments.filter(
          (appointment) => appointment.id !== id
        );
        setListAppointments(updatedAppointments);
      } else {
        // Handle errors
        console.error(
          "Failed to cancel appointment:",
          res.status,
          res.statusText
        );
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function editAppointment(id, date, time, appointment) {
    const [hours, minutes] = time.split(":");
    const formattedTime = `${hours}:${minutes}:00`;

    const formattedDate = date.replace(/\//g, "-");

    try {
      const res = await fetch(`${admin_url}/editAppointment`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        mode: "cors",
        body: JSON.stringify({
          id: id,
          cost: appointment.cost,
          personnel: appointment.personnel,
          service: appointment.service,
          userFirstName: appointment.userFirstName,
          userLastName: appointment.userLastName,
          date: formattedDate,
          time: formattedTime,
        }),
      });
      if (!res.ok) throw new Error("something went wrong");
    } catch (error) {
      console.log(error);
    }
  }
  async function editShop(
    id,
    newCosts,
    newServices,
    newName,
    newAddr,
    newDescr,
    newTelep
  ) {
    try {
      setDoneEdit(false);
      const res = await fetch(`${admin_url}/editShop`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        mode: "cors",
        body: JSON.stringify({
          id: id,
          name: newName,
          address: newAddr,
          description: newDescr,
          telephone: newTelep,
          cost: newCosts,
          servicesOptions: newServices,
        }),
      });

      if (!res.ok) {
        setDoneEdit(false);
        throw new Error("something went wrong");
      }

      setDoneEdit(true);
    } catch (error) {
      console.log(error);
      // setDoneEdit(false);
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
        doneEdit,
        cancelAppointment,
        editAppointment,
        editShop,
        setDoneEdit,
        show,
        setShow,
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
