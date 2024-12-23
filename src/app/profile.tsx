"use client";

import { Typography, Avatar } from "@material-tailwind/react";
import React, { useState } from "react";

function Profile() {
  // Define the active state with useState hook
  const [active, setActiveState] = useState(1); // Set default value as 1 (or change as needed)

  return (
    <div className="relative w-full">
      <div className="container mx-auto grid place-items-center h-max text-center">
        <Typography variant="h1" color="blue-gray">
          羅培瑋 Zoe Luo
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
            variant="rounded"
            src="/image/image.jpg"
            alt="spotify"
            className={`cursor-pointer ${active === 1 ? "opacity-100" : "opacity-50"} w-40 h-40`} // Set custom width and height
            onClick={() => setActiveState(1)} // Update the active state when clicked
          />
          <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
        </div>
        <Typography
          variant="lead"
          color="gray"
          className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
        >
          Welcome to my professional resume page! Below, you&apos;ll find a
          comprehensive overview of my skills, qualifications, and experience
          in the field of web development.
        </Typography>
      </div>
    </div>
  );
}

export default Profile;
