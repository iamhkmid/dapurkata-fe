import Services from "./Services";

const DropdownControl = ({ name, active }) => {
  switch (name) {
    case "SERVICES":
      return <Services active={active} />;
    default:
      return null;
  }
};

export default DropdownControl;
