"use client";
import React from "react";

const Sidebar = () => {
  return (
    <div>
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">SURGEYCARE</h1>
      </div>
      <button
        className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
        onClick={() => {}}
      ></button>
    </div>
  );
};

export default Sidebar;
