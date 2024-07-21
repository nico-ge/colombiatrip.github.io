"use client";

import Link from "next/link";
import React from "react";

const Navbar = () => {
    const links = [
        {
            id: 1,
            text: "home",
            link: "/",
        },
        {
            id: 2,
            text: "timeline",
            link: "#timeline",
        }, {
            id: 3,
            text: "places",
            link: "#places",
        }, {
            id: 4,
            text: "itinerary",
            link: "#itinerary",
        }
    ];

    return (
        <div className="flex z-30 border-black border-4 bg-teal-200 justify-between items-center w-full h-20 fixed nav px-4">
            <h1 className="font-extrabold text-2xl">
                colombia.
            </h1>
            <ul className="md:flex space-x-20">
                {links.map(({ id, text, link }) => (
                    <li
                        key={id}
                        className="cursor-pointer font-semibold text-black
                        hover:uppercase hover:font-bold
                        "
                    >
                        <Link href={link}>{text}.</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;