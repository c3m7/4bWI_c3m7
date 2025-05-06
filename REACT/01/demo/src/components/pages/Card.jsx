import React from "react"

export default function Card({ avatar, name, jobtitle }) {
    return (
        <div className="max-w-400 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-12 flex flex-col items-center">
            <div className="w-96 h-100 bg-gray-200 flex items-center justify-center overflow-hidden border-8 border-gray-300">
              <img
                src="public/avatar.png"
                className="w-91.5 h-100 object-cover select-none"
              />
            </div>
            <h2 className="mt-8 text-3xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-xl text-gray-600">Architect & Engineer</p>
          </div>
        </div>
      );
}

