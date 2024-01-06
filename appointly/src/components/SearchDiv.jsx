import { useState, useMemo } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Link,
} from "@nextui-org/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const dropdownOptions = {
  Loc: [
    { key: "Athens", label: "Athens, GR" },
    { key: "Thessalonikh", label: "Thessalonikh, GR" },
  ],
  Serv: [
    { key: "Barber-shop", label: "Barber" },
    { key: "Nails-salon", label: "Nails" },
    { key: "Mechanic", label: "Mechanic" },
    { key: "Trainer", label: "Personal Trainer" },
  ],
};

export default function SearchDiv() {
  const [locationKeys, setLocationKeys] = useState(new Set(["Location"]));
  const selectedLocation = useMemo(
    () => Array.from(locationKeys).join(", ").replaceAll("_", " "),
    [locationKeys]
  );
  const [serviceKeys, setServiceKeys] = useState(new Set(["Service"]));
  const selectedService = useMemo(
    () => Array.from(serviceKeys).join(", ").replaceAll("_", " "),
    [serviceKeys]
  );
  console.log("Selected Location " + selectedLocation);
  console.log("Selected Service " + selectedService);

  const navigate = useNavigate();

  const handleSearch = async () => {
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
      const res = await fetch(
        `https://appointly-production.up.railway.app/api/v1/auth/appointly/shopsByLocationService?${queryParams}`,
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
    }
  };

  return (
    <div className="bg-div-lp shadow-md rounded-md lg:h-16 sm:h-auto lg:max-w-3xl sm:w-auto p-2 my-8 flex lg:flex-row xsm:flex-col gap-4">
      <div className="lg:basis-1/2 xsm:basis-1/3">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize h-full lg:w-unit-5xl xsm:w-full font-bold text-lg"
            >
              {selectedLocation}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={locationKeys}
            onSelectionChange={setLocationKeys}
            itemClasses={{
              base: [
                "rounded-md",
                "text-default-500",
                "font-bold",
                "transition-opacity",
                "data-[hover=true]:font-bold",
                "data-[hover=true]:bg-hover-dp",
                "dark:data-[hover=true]:bg-bg-hover-dp",
                "data-[selectable=true]:focus:bg-bg-hover-dp font-bold",
                "data-[pressed=true]:font-bold",
                "data-[focus-visible=true]:ring-default-500",
              ],
            }}
          >
            {dropdownOptions.Loc.map((option) => (
              <DropdownItem key={option.key} className="font-bold">
                {option.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="lg:basis-1/2 xsm:basis-1/3">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize h-full lg:w-unit-5xl xsm:w-full font-bold text-lg"
            >
              {selectedService}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="solid"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={serviceKeys}
            onSelectionChange={setServiceKeys}
            disabledKeys={["Trainer"]}
            itemClasses={{
              base: [
                "rounded-md",
                "text-default-500",
                "font-bold",
                "transition-opacity",
                "data-[hover=true]:font-bold",
                "data-[hover=true]:bg-hover-dp",
                "dark:data-[hover=true]:bg-bg-hover-dp",
                "data-[selectable=true]:focus:bg-bg-hover-dp font-bold",
                "data-[pressed=true]:font-bold",
                "data-[focus-visible=true]:ring-default-500",
              ],
            }}
          >
            {dropdownOptions.Serv.map((option) => (
              <DropdownItem key={option.key} className="font-bold">
                {option.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="lg:basis-1/2 xsm:basis-1/3">
        <Button
          className="capitalize h-full lg:w-unit-5xl xsm:w-full font-bold text-lg bg-primary text-white"
          startContent={<MagnifyingGlassIcon />}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
