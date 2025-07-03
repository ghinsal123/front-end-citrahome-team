import React from "react";
import { EnvelopeIcon } from  "@heroicons/react/24/outline";

const TextField = ({placeholder = "Placeholder"}) =>{
    return(
        <div className="w-full max-w-md relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <EnvelopeIcon className="text-blue-400 w-5 h-5"/>
            </div>
            <input 
                type="text"
                placeholder={placeholder}
                className="w-45 py-2 pl-10 pr-3 rounded-xl border 
                border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400
                focus:outline-0 focus:ring-2 focus:ring-blue-400 focus:border-blue-300 shadow-sm">
            </input>
        </div>
    );
};

export default TextField;