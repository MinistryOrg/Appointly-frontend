import { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "../assets/Arrows";
import { hoursAv } from "../data/shopData";
import { useAppointment } from "../contexts/AppointmentContext";

function Calendar() {
  const {
    currentDate,
    setCurrentDate,
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
    formattedDate,
    setFormattedDate,
    formattedTime,
    setFormattedTime,
  } = useAppointment();

  const handleDateClick = (day) => {
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const formattedDate = selectedDate.toLocaleDateString("en-GB");

    setSelectedDate(formattedDate);
    setFormattedDate(
      selectedDate.getFullYear() +
        "-" +
        (selectedDate.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0")
    );
  };
  const handleTimeClick = (time) => {
    setSelectedTime(time);
    // Format the time in "hour:minute:second" format
    const [hours, minutes] = time.split(":");
    const formattedTime = `${hours}:${minutes}:00`;

    setFormattedTime(formattedTime);
  };

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
    setSelectedDate(null); // Reset selectedDate when changing months
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
    setSelectedDate(null); // Reset selectedDate when changing months
  };

  const generateDayClickHandler = (day) => () => {
    handleDateClick(day);
  };

  const renderCalendar = () => {
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
        if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
          days.push(
            <div
              key={`${i}-${j}`}
              className="border bg-grid-clr border-slate-100 p-10 text-gray-300 rounded-xl"
            />
          );
        } else {
          const isCurrentDay =
            dayCounter === parseInt(selectedDate, 10) ||
            (selectedDate === null &&
              dayCounter === new Date().getDate() &&
              currentDate.getMonth() === new Date().getMonth() &&
              currentDate.getFullYear() === new Date().getFullYear());

          days.push(
            <div
              key={`${i}-${j}`}
              className={`border border-slate-100 p-10 cursor-pointer rounded-xl text-primary ${
                isCurrentDay ? "bg-violet-100" : "hover:bg-violet-100"
              }`}
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
  };

  return (
    <>
      <div className="max-w-full lg:grid lg:grid-cols-3 gap-10 mx-auto mt-10 xsm:mx-5">
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

          <div className="flex flex-wrap border-b-2 pb-1 px-2 gap-8 bg-primary text-white font-bold rounded-md">
            <div className="w-16 h-12 flex items-center justify-center">
              Sun
            </div>
            <div className="w-16 h-12 flex items-center justify-center">
              Mon
            </div>
            <div className="w-16 h-12 flex items-center justify-center">
              Tue
            </div>
            <div className="w-16 h-12 flex items-center justify-center">
              Wed
            </div>
            <div className="w-16 h-12 flex items-center justify-center">
              Thu
            </div>
            <div className="w-16 h-12 flex items-center justify-center">
              Fri
            </div>
            <div className="w-16 h-12 flex items-center justify-center">
              Sat
            </div>
          </div>
          <div className="grid grid-cols-7 w-auto">{renderCalendar()}</div>
        </div>

        <div className="lg:col-span-1 flex flex-col">
          <div className="mt-4">
            <h2 className="text-xl font-bold">Times Available</h2>
          </div>
          <div className="mt-4 flex-grow">
            <div className="grid lg:grid-cols-3 xsm:grid-cols-2 lg:mx-auto xsm:mx-5 gap-4">
              {hoursAv.map((h, index) => (
                <div
                  key={index}
                  className={`border rounded-md py-2 px-1 mx-2 text-center cursor-pointer hover:bg-violet-100 ${
                    selectedTime === h.time ? "bg-violet-100" : ""
                  }`}
                  onClick={() => handleTimeClick(h.time)}
                >
                  {h.time}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 border-t-2 border-gray-100">
            <p className="font-semibold">
              Selected Date: {selectedDate ? selectedDate : "None"}
            </p>
            <p className="font-semibold">
              Selected Time: {selectedTime ? selectedTime : "None"}
            </p>
            <p className="font-semibold">
              Selected Date: {formattedDate ? formattedDate : "None"}
            </p>
            <p className="font-semibold">
              Selected Time: {formattedTime ? formattedTime : "None"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Calendar;
