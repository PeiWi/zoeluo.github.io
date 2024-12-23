import React from "react";
import { Navbar as MTNavbar } from "@material-tailwind/react";

export function Navbar() {
  return (
    <MTNavbar
      fullWidth
      blurred={false}
      shadow={false}
      color="white"
      className="sticky top-0 z-50 border-0 h-16" // Set a fixed height for the navbar
    >
      {/* Empty Navbar */}
    </MTNavbar>
  );
}

export default Navbar;
