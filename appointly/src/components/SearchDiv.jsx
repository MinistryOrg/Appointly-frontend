import { useState, useMemo } from 'react';
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button,
} from "@nextui-org/react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";


export default function SearchDiv() {
  const [selectedKeys, setSelectedKeys] = useState(new Set(["Location"]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const [selectedKeys2, setSelectedKeys2] = useState(
    new Set(["Service"])
  );
  const selectedValue2 = useMemo(
    () => Array.from(selectedKeys2).join(", ").replaceAll("_", " "),
    [selectedKeys2]
  );

  return (
    <div className="bg-div-lp shadow-md rounded-md h-16 max-w-3xl min-w-fit p-2 my-8 flex flex-row gap-4">
      <div className="basis-1/2">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize h-full w-unit-5xl font-bold text-lg"
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
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
            <DropdownItem key="Athens" className="font-bold">
              Athens, GR
            </DropdownItem>
            <DropdownItem key="Thessalonikh">Thessalonikh, GR</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="basis-1/2">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize h-full w-unit-5xl font-bold text-lg"
            >
              {selectedValue2}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="solid"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys2}
            onSelectionChange={setSelectedKeys2}
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
            <DropdownItem key="Barber">Barber</DropdownItem>
            <DropdownItem key="Nails">Nails</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="basis-1/2">
        <Button
          className="capitalize h-full w-unit-5xl font-bold text-lg bg-primary text-white"
          startContent={<MagnifyingGlassIcon />}
        >
          Search
        </Button>
      </div>
    </div>
  );
}