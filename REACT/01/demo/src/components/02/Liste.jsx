import React from "react";

export default function Liste({ text }) {
    return (
        <div className="bg-blue-500 w-40 p-4 m-4 text-white font-bold text-center rounded-lg shadow-lg transition-all duration-50 transform hover:bg-blue-600 active:bg-blue-700 active:scale-95 select-none">
            {text}
        </div>
    );
}
