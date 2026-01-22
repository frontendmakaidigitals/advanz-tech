import React from "react";

const map = () => {
  return (
    <div className=" max-w-5xl mx-auto my-20 ">
      <h2 className="text-4xl font-inter font-semibold mb-6">Find us on map</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.5558611629613!2d55.234511499999996!3d25.1168916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6994feb5fdf1%3A0x885a3f7b670c18ef!2sAdvanz%20Tech!5e0!3m2!1sen!2sin!4v1768633999956!5m2!1sen!2sin"
        width="600"
        height="450"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-xl border border-slate-300"
      ></iframe>
    </div>
  );
};

export default map;
