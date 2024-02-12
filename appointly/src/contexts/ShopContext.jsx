import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const shop_url =
  "https://appointly-production.up.railway.app/api/v1/auth/appointly";

const ShopContext = createContext();

function ShopProvider({ children }) {
  const [locationKeys, setLocationKeys] = useState(new Set(["Location"]));
  const [serviceKeys, setServiceKeys] = useState(new Set(["Service"]));
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const selectedLocation = useMemo(
    () => Array.from(locationKeys).join(", ").replaceAll("_", " "),
    [locationKeys]
  );
  const selectedService = useMemo(
    () => Array.from(serviceKeys).join(", ").replaceAll("_", " "),
    [serviceKeys]
  );

  const [currentShop, setCurrentShop] = useState({});
  const navigate = useNavigate();

  async function handleSearchShop() {
    if (locationKeys.has("Location") || serviceKeys.has("Service")) {
      // Both location and service must be selected
      alert("Please select both location and service!");
      return;
    }

    const queryParams = new URLSearchParams({
      location: selectedLocation,
      service: selectedService,
    });

    try {
      setIsLoading(true);
      const res = await fetch(
        `${shop_url}/shopsByLocationService?${queryParams}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          mode: "cors",
        }
      );

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      const data = await res.json();
      console.log(data);

      // Navigate to the shops page with the fetched data or handle as required
      navigate(`/shops`, { state: { shopsData: data, selectedService } });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getShop(id) {
    try {
      const res = await fetch(`${shop_url}/searchShopById?id=${id}`);
      const data = await res.json();
      console.log("Fetch ", data);
      setCurrentShop(data);
    } catch (error) {
      console.log(error);
    }
  }

  const getShopName = () => {
    return currentShop ? currentShop.name : "";
  };

  useEffect(() => {
    // Function to check if the shop is open or closed
    const checkShopStatus = () => {
      // Check if closeHour is defined
      if (currentShop.closeHour) {
        // Get the current time
        const currentTime = new Date();

        // Extract the current hour
        const currentHour = currentTime.getHours();

        // Extract the closing hour from the API response
        const closingHour = parseInt(currentShop.closeHour.split(":")[0], 10);

        // Compare the current hour with the closing hour
        const isOpenNow = currentHour < closingHour;

        // Update the state based on the comparison
        setIsOpen(isOpenNow);
      }
    };

    // Call the function to check the shop status
    checkShopStatus();

    // You can also set up a timer to periodically update the status
    // For example, every 5 minutes:
    const intervalId = setInterval(() => {
      checkShopStatus();
    }, 5 * 60 * 1000); // 5 minutes in milliseconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [currentShop.closeHour]); // Run the effect whenever closeHour changes

  return (
    <ShopContext.Provider
      value={{
        locationKeys,
        setLocationKeys,
        serviceKeys,
        setServiceKeys,
        selectedLocation,
        selectedService,
        handleSearchShop,
        currentShop,
        setCurrentShop,
        getShop,
        getShopName,
        isOpen,
        isLoading,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

function useShops() {
  //we need to tell react which context we are going to use.
  const context = useContext(ShopContext);
  if (context === undefined)
    throw new Error("Shop Context was used outside the shop provider");
  return context;
}

export { ShopProvider, useShops };
