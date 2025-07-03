import React from "react";
import { EnvelopeIcon } from  "@heroicons/react/24/outline";

const TextField = ({placeholder = "Placeholder"}) =>{
    return(
        <div className="">
            <div className="">
                <EnvelopeIcon />
            </div>
            <input 
                type="text"
                placeholder={placeholder}
                className=""
            >
            </input>
        </div>
    );
};

export default TextField;