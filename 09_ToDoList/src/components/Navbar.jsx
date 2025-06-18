import React from "react";

const Navbar = () => {
    return (
        <nav className=" flex justify-between bg-gray-800 text-white py-2">
            <div className="logo">
                <span className="font-bold  text-xl mx-10">!Task</span> 

            </div>

            <ul className="flex gap-5 mx-8" >
                <li className="cursor-pointer hover:font-bold  transition-all duration-100">Home</li>
                <li className="cursor-pointer  hover:font-bold  transition-all duration-100">Tasks</li>
            </ul>
        </nav>
    )
}





export default Navbar;