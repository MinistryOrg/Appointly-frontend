import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import { Breadcrumbs, BreadcrumbItem, Button } from "@nextui-org/react";
import { useNavigate, useParams } from "react-router-dom";
import { useShops } from "../contexts/ShopContext";
import ServiceOption from "../components/ServiceOption";
import Personnel from "../components/Personnel";
import Calendar from "../components/Calendar";

export default function Appointment() {
  const [currentPage, setCurrentPage] = useState("service");
  const { id } = useParams();
  const { getShop, currentShop } = useShops();
  const navigate = useNavigate();
  useEffect(
    function () {
      getShop(id);
    },
    [id]
  );

  const { name } = currentShop;
  // const name = "name";

  const isBackButtonVisible = currentPage !== "service";

  const handleNext = (key) => {
    setCurrentPage(key);
    // You can also perform additional actions here based on the selected breadcrumb item
    // For example, navigate to a different route, fetch data, etc.
  };

  const goToNext = () => {
    // Add logic to navigate to the next option
    // For example, moving from 'service' to 'personnel'
    if (currentPage === "service") {
      handleNext("pers"); // Update state to move to the 'personnel' section
    } else if (currentPage === "pers") {
      handleNext("date"); // Update state to move to the 'date & time' section
    } else if (currentPage === "date") {
      navigate("/summary", { state: { shopName: name } });
    }
    // Add more conditions for other sections as needed
  };

  const goToBack = () => {
    // Add logic to navigate to the previous option
    // For example, moving back from 'personnel' to 'service'
    if (currentPage === "pers") {
      handleNext("service"); // Update state to move back to the 'service' section
    } else if (currentPage === "date") {
      handleNext("pers"); // Update state to move back to the 'personnel' section
    }
    // Add more conditions for other sections as needed
  };

  return (
    <>
      <NavBar />
      <div className="max-w-full border-1.5 h-auto mx-unit-2xl my-unit-lg rounded-md shadow-lg bg-white">
        <div className="w-full text-center font-bold my-10">
          <h1 className="text-2xl">{name}</h1>
          <h2 className="text-xl my-5">Book Appointment</h2>
        </div>

        <div className="flex justify-center my-5">
          <Breadcrumbs
            underline="none"
            onAction={(key) => handleNext(key)}
            itemClasses={{
              item: "font-bold text-md  data-[current=true]:text-indigo-800",
              separator: "font-bold",
            }}
          >
            <BreadcrumbItem key="service" isCurrent={currentPage === "service"}>
              Service
            </BreadcrumbItem>
            <BreadcrumbItem key="pers" isCurrent={currentPage === "pers"}>
              Personnel
            </BreadcrumbItem>
            <BreadcrumbItem key="date" isCurrent={currentPage === "date"}>
              Date & Time
            </BreadcrumbItem>
          </Breadcrumbs>
        </div>
        {currentPage === "service" && <ServiceOption />}
        {currentPage === "pers" && <Personnel />}
        {currentPage === "date" && <Calendar />}

        <div
          className={`w-full px-unit-2xl flex ${
            isBackButtonVisible ? "justify-between" : "flex-row-reverse"
          } p-3`}
        >
          {isBackButtonVisible && (
            <Button
              onClick={goToBack}
              className="text-white font-bold bg-btn-purple"
            >
              Back
            </Button>
          )}
          <Button
            onClick={goToNext}
            className={`text-white font-bold ${
              currentPage === "date" ? "bg-primary" : "bg-btn-purple"
            }`}
          >
            {currentPage === "date" ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
}
