import React from "react";

export default function Map () {
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15971.337945204388!2d106.9403637697754!3d-6.249406799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698cf85d760ff9%3A0x843bb0d0a1d5c796!2sCitra%20Kalimalang!5e0!3m2!1sid!2sid!4v1751536355171!5m2!1sid!2sid"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>
    </div>
  );
};


