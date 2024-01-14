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
import { useShops } from "../contexts/ShopContext";

const dropdownOptions = {
  Loc: [
    { key: "Athens", label: "Athens, GR" },
    { key: "Thessalonikh", label: "Thessalonikh, GR" },
  ],
  Serv: [
    { key: "Barber Shop", label: "Barber" },
    { key: "Nail Salon", label: "Nails" },
    { key: "Mechanic", label: "Mechanic" },
    { key: "Trainer", label: "Personal Trainer" },
  ],
};

export default function SearchDiv() {
  const {
    locationKeys,
    setLocationKeys,
    serviceKeys,
    setServiceKeys,
    selectedLocation,
    selectedService,
    handleSearchShop,
  } = useShops();

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
          onClick={handleSearchShop}
        >
          Search
        </Button>
      </div>
    </div>
  );
}
