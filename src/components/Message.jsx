import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Message = ({ placeholder = "Placeholder" }) => {
  return (
    <div className="w-full max-w-md relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <EnvelopeIcon className="w-5 h-5 text-[#74513F]" />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full py-2 pl-10 pr-3 rounded-xl border border-gray-200 bg-white
                   text-sm text-gray-700 placeholder-gray-400 shadow-sm
                   focus:outline-0 focus:ring focus:ring-[#74513F]/40 focus:border-[#74513F]"
      />
    </div>
  );
};

export default Message;
