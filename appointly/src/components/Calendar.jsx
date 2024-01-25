import { useEffect } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "../assets/Arrows";
import { hoursAv } from "../data/shopData";
import { useAppointment } from "../contexts/AppointmentContext";

function Calendar({ openHour, closeHour }) {
  const {
    currentDate,
    setCurrentDate,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    setFormattedDate,
    setFormattedTime,
    setDateInValid,
    appointmentDate,
    checkDates,
    setBookedTimes,
    bookedTimes,
    allTimesBooked,
    setAllTimesBooked,
  } = useAppointment();

  function handleDateClick(day) {
    setDateInValid(null);
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const originalDate = selectedDate.toLocaleDateString("en-GB");
    const forDate =
      selectedDate.getFullYear() +
      "-" +
      (selectedDate.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      day.toString().padStart(2, "0");

    setSelectedDate(originalDate);
    setFormattedDate(forDate);

    const appointments = appointmentDate[forDate];
    console.log("appointments", appointments);
    if (appointments && appointments.length > 0) {
      // Display the appointments for the selected date
      const availableTimes = [];
      for (const appointment of appointments) {
        const formattedTime = appointment.substring(0, 5);
        availableTimes.push(formattedTime);
      }
      console.log(availableTimes);
      setBookedTimes(availableTimes); // Set the entire array
      setAllTimesBooked(availableTimes.length === filteredHours.length);
    } else {
      // No appointments available
      setBookedTimes([]);
      setAllTimesBooked(false);
    }
    // Disable the back arrow if the current date is clicked
    if (day === currentDate.getDate()) {
      const backButton = document.getElementById("backButton");
      backButton.disabled = true;
    }

    if (day < currentDate.getDate()) {
      setDateInValid(true);
      alert("Please select a date that is on or after today's date.");
    }

    // console.log(forDate);
  }

  function handleTimeClick(time) {
    if (!bookedTimes.includes(time)) {
      setSelectedTime(time);
      // Format the time in "hour:minute:second" format
      const [hours, minutes] = time.split(":");
      const formattedTime = `${hours}:${minutes}:00`;

      setFormattedTime(formattedTime);
    }
  }

  function goToPreviousMonth() {
    // Disable the back arrow if the current month is being viewed
    const backButton = document.getElementById("backButton");
    if (currentDate.getMonth() === 0) {
      backButton.disabled = true;
    }

    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDate(null); // Reset selectedDate when changing months
  }

  function goToNextMonth() {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDate(null); // Reset selectedDate when changing months
  }

  const generateDayClickHandler = (day) => () => {
    handleDateClick(day);
  };

  useEffect(() => {
    checkDates();
  }, []);

  useEffect(() => {
    // Logic that depends on appointmentDate
  }, [appointmentDate]);

  function renderCalendar() {
    if (filteredHours.length === 0) {
      return <div>Loading...</div>;
    }

    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    ).getDay();
    const daysInMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    ).getDate();

    const days = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        const isCurrentDay =
          dayCounter === parseInt(selectedDate, 10) ||
          (selectedDate === null &&
            dayCounter === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear());

        const isBeforeCurrentDate = dayCounter < currentDate.getDate();

        const allTimesBookedClass = allTimesBooked
          ? "bg-gray-200 cursor-not-allowed"
          : "";

        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          days.push(
            <div
              key={`${i}-${j}`}
              className={`border bg-grid-clr border-slate-100 p-10 text-gray-300 rounded-xl ${allTimesBookedClass}`}
            />
          );
        } else {
          const dayClass = isCurrentDay
            ? "bg-violet-100"
            : "hover:bg-violet-100";
          const disableClass = isBeforeCurrentDate ? "cursor-not-allowed" : "";

          days.push(
            <div
              key={`${i}-${j}`}
              className={`border ${dayClass} ${disableClass} p-10 cursor-pointer rounded-xl text-primary ${allTimesBookedClass}`}
              onClick={generateDayClickHandler(dayCounter)}
            >
              {dayCounter}
            </div>
          );

          dayCounter++;
        }
      }
    }

    return days;
  }

  const filteredHours = hoursAv.filter((h) => {
    const currentTime = new Date(`2022-01-01 ${h.time}`);
    const openTime = new Date(`2022-01-01 ${openHour}`);
    const closeTime = new Date(`2022-01-01 ${closeHour}`);

    return currentTime >= openTime && currentTime <= closeTime;
  });

  const isTimeBooked = (time) => {
    return bookedTimes.includes(time);
  };

  return (
    <>
      <div className="max-w-full lg:grid lg:grid-cols-3 gap-5 mt-10 xsm:mx-5">
        <div className="lg:col-span-2">
          <div className="flex w-full mb-4">
            <div className="w-full">
              <h2 className="text-xl font-bold mb-4">
                {currentDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
            </div>
            <div className="flex w-full justify-end">
              <button
                id="backButton"
                className="px-2 py-1 rounded-md justify-end hover:bg-gray-200 active:bg-gray-300"
                onClick={goToPreviousMonth}
              >
                <ChevronLeftIcon className="font-bold text-black" />
              </button>
              <button
                className="px-2 py-1 rounded-lg justify-end hover:bg-gray-200 active:bg-gray-300"
                onClick={goToNextMonth}
              >
                <ChevronRightIcon className="font-bold text-black" />
              </button>
            </div>
          </div>

          <div className="flex justify-between border-b-2 pb-1 bg-primary text-white font-bold rounded-md">
            <div className="h-12 flex-auto flex items-center justify-center">
              Sun
            </div>
            <div className="h-12 flex-auto flex items-center justify-center">
              Mon
            </div>
            <div className="h-12 flex-auto flex items-center justify-center">
              Tue
            </div>
            <div className="h-12 flex-auto flex items-center justify-center">
              Wed
            </div>
            <div className="h-12 flex-auto flex items-center justify-center">
              Thu
            </div>
            <div className="h-12 flex-auto flex items-center justify-center">
              Fri
            </div>
            <div className="h-12 flex-auto flex items-center justify-center">
              Sat
            </div>
          </div>

          <div className="grid grid-cols-7 w-auto">
            {renderCalendar(appointmentDate)}
          </div>
        </div>

        <div className="lg:col-span-1 flex flex-col mx-unit-lg">
          <div className="mt-4">
            <h2 className="text-xl font-bold">Times Available</h2>
          </div>
          <div className="mt-4 flex-grow ">
            <div className="grid lg:grid-cols-2 xsm:grid-cols-2 lg:mx-auto xsm:mx-5 gap-y-4 gap-x-10 xsm:h-auto lg:h-unit-9xl overflow-y-auto">
              {filteredHours.map((h, index) => (
                <div
                  key={index}
                  className={`border rounded-md py-2 px-1 mx-2 text-center  ${
                    isTimeBooked(h.time)
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "cursor-pointer hover:bg-violet-100"
                  } border-gray-300  ${
                    selectedTime === h.time ? "bg-violet-100" : ""
                  }`}
                  onClick={() => handleTimeClick(h.time)}
                >
                  {h.time}
                </div>
              ))}
            </div>
          </div>
          <div
            className="mt-4 border-t-2 border-gray-100"
            onClick={() => {
              setSelectedTime(null);
              setFormattedTime(null);
            }}
          >
            <p className="font-semibold text-lg">
              Date: {selectedDate ? selectedDate : ""}
            </p>
            <p className="font-semibold text-lg">
              Time: {selectedTime ? selectedTime : ""}
            </p>
            {/* <p className="font-semibold">Booked Time:</p>
            {bookedTimes.map((bookedTime, index) => (
              <p key={index}>{bookedTime}</p>
            ))} */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
