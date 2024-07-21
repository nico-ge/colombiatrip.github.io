import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnType?: "primary" | "secondary" | "error"
}

export default function Button({ btnType, children, ...props }: ButtonProps) {

    return (
        <button className="bg-black rounded-md">
            <span className={`block -translate-x-2 -translate-y-2 rounded-md border-2 
                border-black p-4 text-2xl uppercase font-bold
                hover:-translate-y-3 hover:-translate-x-3
                active:-translate-y-0 active:translate-x-0
                transition-all ${getColor(btnType)}`}>
                {children}
            </span>
        </button>
    )
}

function getColor(btnType?: string) {
    switch (btnType) {
        case "error":
            return "bg-red-400"
        case "secondary":
            return "bg-yellow-200"
        default:
            return "bg-teal-200"
    }
}

function getActiveColor(btnType?: string) {
    switch (btnType) {
        case "error":
            return "bg-red-100"
        case "secondary":
            return "bg-yellow-100"
        default:
            return "bg-blue-100"
    }
}