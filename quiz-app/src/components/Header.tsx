import { Avatar, Dropdown, Label, Navbar, TextInput } from "flowbite-react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <div className="px-8 fixed z-50 w-full">
      <Navbar fluid={true} className="rounded-lg mt-2 ">
        <Navbar.Brand className="text-xl font-extrabold">
          Online Sınaq
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avatar alt="User settings" placeholderInitials="FB" />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Fuad Bayramov</span>
              <span className="block truncate text-sm font-medium">
                fuadbayramv@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <TextInput
            id="search"
            type="text"
            placeholder="Axtarış"
            required={true}
            icon={MagnifyingGlassIcon}
          />
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
