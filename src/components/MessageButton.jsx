import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function SendMessageButton() {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 w-72 h-10 bg-[#6D4C41] text-white text-sm font-medium px-6 rounded-lg hover:bg-[#5b3f36] transition duration-300"
    >
      SEND MESSAGE
      <PaperAirplaneIcon className="w-5 h-5" />
    </button>
  );
}
