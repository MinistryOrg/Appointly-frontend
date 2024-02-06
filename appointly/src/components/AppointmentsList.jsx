import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useAdmin } from "../contexts/AdminContext";

function AppointmentsList() {
  const labelsAppointment = [
    "Name",
    "Service",
    "Personnel",
    "Date",
    "Time",
    "Cost",
    "Manage",
  ];

  const { listAppointments } = useAdmin();
  console.log("list", listAppointments);

  function formatDate(dateString) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  return (
    <>
      <main className="p-5 md:ml-64 h-screen pt-20">
        <div className="w-full mx-unit-3xl">
          <h1 className="text-2xl font-semibold">Appointments</h1>
        </div>
        <div className="bg-white border-1 border-gray-200 rounded-lg h-96 mx-unit-3xl my-5">
          <div className="w-full grid grid-cols-1 overflow-y-auto">
            {/*header */}
            <div className="grid grid-cols-7  font-semibold justify-items-center gap-x-unit-3xl bg-primary  rounded-t-lg">
              {labelsAppointment.map((label, index) => (
                <div key={index} className="col my-2 w-full text-center  ">
                  <p className="text-white">{label}</p>
                </div>
              ))}
            </div>
            {/*body */}
            {listAppointments.length > 0 ? (
              listAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="grid grid-cols-7 border-b-1 border-gray-100 font-semibold justify-items-center gap-x-unit-3xl"
                >
                  <div className="col my-2 w-full text-center  ">
                    <p className="">
                      {appointment.userFirstname} {appointment.userLastname}
                    </p>
                  </div>
                  <div className="col my-2 w-full text-center  ">
                    <p className="">{appointment.service}</p>
                  </div>
                  <div className="col my-2 w-full text-center  ">
                    <p className="">{appointment.personnel}</p>
                  </div>
                  <div className="col my-2 w-full text-center  ">
                    <p className="">{formatDate(appointment.date)}</p>
                  </div>
                  <div className="col my-2 w-full text-center  ">
                    <p className="">{appointment.time.slice(0, 5)}</p>
                  </div>
                  <div className="col my-2 w-full text-center  ">
                    <p className="">{appointment.cost} €</p>
                  </div>
                  <div className="col my-2 w-full text-center flex items-center justify-center">
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="light">
                          <svg
                            class="w-7 h-7 text-gray-800"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-width="2"
                              d="M12 6h0m0 6h0m0 6h0"
                            />
                          </svg>
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu
                        aria-label="Action event example"
                        onAction={(key) => alert(key)}
                      >
                        <DropdownItem
                          key="delete"
                          className="text-danger"
                          color="danger"
                        >
                          Cancel Appointment
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              ))
            ) : (
              <div className="w-full my-5 text-center">
                <p className="font-semibold text-lg">
                  No appointments for today.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default AppointmentsList;
