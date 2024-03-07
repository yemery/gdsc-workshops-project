import  { useState } from "react";

const useToggleMenu = (currentVal) => {
  const [isMenuOpen, setMenuOpen] = useState(currentVal);
  const toggleMenu = () => {
    console.log("clicked")
    setMenuOpen(!isMenuOpen);

  };
  return { isMenuOpen, toggleMenu};
};

export default useToggleMenu;
