import React from "react";
import TextField from "../components/TextField";

export default function Home() {
    return(
        <div className="bg-white max-w-7xl mx-auto p-6 space-y-10">

      {/* Input Pencarian */}
      <section>
        <h2 className="font-bold text-gray-800 mb-2">Preview Text Field</h2>
        <TextField placeholder="Placeholder" />
      </section>
        </div>
    );
};

