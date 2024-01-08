import { useState } from "react";

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
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
              className="border border-slate-100 p-10 text-gray-300 rounded-md"
            />
          );
        } else {
          const isCurrentDay = dayCounter === selectedDate;
          days.push(
            <div
              key={`${i}-${j}`}
              className={`border border-slate-100 p-10 cursor-pointer text-primary ${
                isCurrentDay ? "bg-gray-200" : "hover:bg-gray-200"
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
    <div className="max-w-2xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">
        Calendar -
        {currentDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </h2>
      <button
        className="px-2 py-1 bg-gray-200 rounded-md"
        onClick={goToPreviousMonth}
      >
        P
      </button>
      <button
        className="px-2 py-1 bg-gray-200 rounded-md"
        onClick={goToNextMonth}
      >
        N
      </button>

      <div className="flex flex-wrap border-b-2 pb-1 px-2 gap-8 bg-primary text-white rounded-t-md">
        <div className="w-16 h-12 flex items-center justify-center">Sun</div>
        <div className="w-16 h-12 flex items-center justify-center">Mon</div>
        <div className="w-16 h-12 flex items-center justify-center">Tue</div>
        <div className="w-16 h-12 flex items-center justify-center">Wed</div>
        <div className="w-16 h-12 flex items-center justify-center">Thu</div>
        <div className="w-16 h-12 flex items-center justify-center">Fri</div>
        <div className="w-16 h-12 flex items-center justify-center">Sat</div>
      </div>
      <div className="grid grid-cols-7 w-auto rounded-r-xl">
        {renderCalendar()}
      </div>
      <div className="mt-4">
        <p className="font-semibold">
          Selected Date: {selectedDate ? selectedDate : "None"}
        </p>
      </div>
    </div>
  );
}

export default Calendar;
