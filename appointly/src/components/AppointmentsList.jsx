import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Select,
  SelectItem,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  getKeyValue,
  useDisclosure,
} from "@nextui-org/react";
import { useAdmin } from "../contexts/AdminContext";
import { useEffect, useMemo, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { hoursAv } from "../data/shopData";
import { subDays, format } from "date-fns";

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
  const { isOpen, onOpenChange } = useDisclosure();
  const [startDate, setStartDate] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [id, setId] = useState("");
  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  const {
    listAppointments,
    cancelAppointment,
    fetchAppointments,
    adminShop,
    editAppointment,
  } = useAdmin();
  const { name, openHour, closeHour } = adminShop;

  useEffect(() => {
    const controller = new AbortController();
    fetchAppointments(name, controller);
    return function () {
      controller.abort();
    };
  }, [listAppointments]);

  const totalPages = Math.ceil(listAppointments?.length / rowsPerPage);
  const indexOfLastRow = page * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = listAppointments?.slice(indexOfFirstRow, indexOfLastRow);

  // console.log(pages);

  function formatDate(dateString) {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  }

  const onOpenModal = (appointment) => {
    setId(appointment?.id);
    setSelectedAppointment(appointment);
    setStartDate(new Date(appointment?.date));
    setSelectedTime(appointment?.time.slice(0, 5));
    onOpenChange();
  };

  function checkOption(key, id) {
    switch (key) {
      case "Edit":
        onOpenModal(listAppointments.find((app) => app.id === id));
        break;
      case "Cancel":
        cancelAppointment(id);
        break;
      default:
        break;
    }
  }

  const filteredHours = hoursAv.filter((h) => {
    const currentTime = new Date(`2022-01-01 ${h.time}`);
    const openTime = new Date(`2022-01-01 ${openHour}`);
    const closeTime = new Date(`2022-01-01 ${closeHour}`);

    return currentTime >= openTime && currentTime <= closeTime;
  });

  const handleSelectionChange = (e) => {
    setSelectedTime(e.target.value);
  };

  // console.log(selectedTime);
  // console.log(selectedDate);

  const loadingState = listAppointments?.length === 0 ? "No appointemnts" : "";

  return (
    <>
      <main className="p-5 md:ml-64 h-screen pt-20">
        <div className="w-full mx-unit-3xl">
          <h1 className="text-2xl font-semibold">Appointments</h1>
        </div>
        <div className="bg-white border-1 border-gray-200 rounded-lg h-96 mx-unit-3xl my-5">
          <div className="w-full grid grid-cols-1 overflow-y-auto p-5">
            {listAppointments ? (
              <Table
                aria-label="Appointments Table"
                classNames={{
                  th: ["bg-primary", "text-white", "font-semibold", "text-md"],
                  td: ["font-semibold"],
                  tr: ["hover:bg-gray-50", "rounded-2xl"],
                  tbody: ["rounded-2xl"],
                }}
                isHeaderSticky
                radius="lg"
                bottomContent={
                  totalPages > 0 ? (
                    <div className="flex w-full justify-center">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={totalPages}
                        onChange={(page) => setPage(page)}
                      />
                    </div>
                  ) : null
                }
                bottomContentPlacement="outside"
              >
                <TableHeader className="bg-primary text-white">
                  {labelsAppointment?.map((label, index) => (
                    <TableColumn key={index} className="text-center">
                      {label}
                    </TableColumn>
                  ))}
                </TableHeader>
                <TableBody
                  items={currentRows}
                  loadingContent={<Spinner />}
                  loadingState={
                    listAppointments?.length === 0 ? "loading" : "idle"
                  }
                >
                  {(appointment) => (
                    <TableRow key={appointment.id} className="text-center">
                      <TableCell>{`${appointment.userFirstname} ${appointment.userLastname}`}</TableCell>
                      <TableCell>{appointment.service}</TableCell>
                      <TableCell>{appointment.personnel}</TableCell>
                      <TableCell>{formatDate(appointment.date)}</TableCell>
                      <TableCell>{appointment.time.slice(0, 5)}</TableCell>
                      <TableCell>{`${appointment.cost} €`}</TableCell>
                      <TableCell>
                        <div className="relative flex justify-center items-center gap-2">
                          <Dropdown>
                            <DropdownTrigger>
                              <Button variant="light">
                                <svg
                                  className="w-7 h-7 text-gray-800"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    d="M12 6h0m0 6h0m0 6h0"
                                  />
                                </svg>
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                              aria-label="Action event example"
                              onAction={(key) =>
                                checkOption(key, appointment.id)
                              }
                            >
                              <DropdownItem key="Edit">
                                Edit Appointment
                              </DropdownItem>
                              <DropdownItem
                                key="Cancel"
                                className="text-danger"
                                color="danger"
                              >
                                Cancel Appointment
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            ) : (
              <p className="font-semibold w-full text-center">
                No appointments yet <br />
                Your appointments are going to be shown in this table.
              </p>
            )}
          </div>
        </div>
      </main>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center">
                Edit Appointment
              </ModalHeader>
              <ModalBody className="h-auto">
                <h1 className="font-bold">Change Date</h1>
                <DatePicker
                  closeOnScroll={true}
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setSelectedDate(format(date, "yyyy/MM/dd"));
                  }}
                  minDate={subDays(new Date(), 0)}
                  popperPlacement="top-start"
                  className="p-2 border-2 border-gray-200 rounded-xl w-full hover:border-gray-500"
                />

                <h1 className="font-bold translate-y-5">Change Time</h1>
                <Select
                  label="&nbsp;"
                  className="w-full mb-unit-2xl"
                  variant="bordered"
                  placeholder="Select time"
                  fullWidth
                  labelPlacement="outside"
                  defaultSelectedKeys={[selectedTime]}
                  selectedKeys={[selectedTime]}
                  onChange={handleSelectionChange}
                >
                  {filteredHours.map((hr) => (
                    <SelectItem key={hr.time} value={hr.time}>
                      {hr.time}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    editAppointment(
                      id,
                      selectedDate,
                      selectedTime,
                      selectedAppointment
                    );

                    setTimeout(() => {
                      onClose(true);
                    }, 1000);
                  }}
                >
                  Change
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default AppointmentsList;
