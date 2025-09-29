import React, { useState } from "react";

const GfuAndGit = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      name: "",
      number: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="w-full max-w-[560px] bg-zinc-800/80 text-white rounded-xl flex flex-col items-center justify-center py-6 m-auto my-10 px-4 sm:px-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-semibold italic uppercase bg-green-500 px-6 sm:px-10 py-2 mt-2 rounded-tl-2xl rounded-br-2xl text-center">
        Get In Touch
      </h1>

      <form className="w-full flex flex-col gap-5 mt-5 py-4 px-2 sm:px-4" onSubmit={submitForm}>
        {/* Full Name */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="sm:w-36 text-[15px] sm:text-[17px] font-medium">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Arun Verma"
            className="flex-1 border border-[#393c3d] rounded px-2 py-1 placeholder-gray-400 placeholder:text-[15px] focus:outline-none"
          />
        </div>

        {/* Contact Number */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="sm:w-36 text-[15px] sm:text-[17px] font-medium">
            Contact Number:
          </label>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            placeholder="e.g. +91 0000 989 090"
            className="flex-1 border border-[#393c3d] rounded px-2 py-1 placeholder-gray-400 [&::-webkit-inner-spin-button]:appearance-none focus:outline-none placeholder:text-[15px] [&::-webkit-outer-spin-button]:appearance-none [appearance:textfield]"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="sm:w-36 text-[15px] sm:text-[17px] font-medium">
            Email Address:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="You@example.com"
            className="flex-1 border border-[#393c3d] rounded px-2 py-1 placeholder-gray-400 placeholder:text-[15px] focus:outline-none"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2">
          <label className="sm:w-36 text-[15px] sm:text-[17px] font-medium">
            Message:
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can we help you?"
            className="flex-1 border border-[#393c3d] rounded px-2 py-1 resize-y min-h-[110px] placeholder-gray-400 focus:outline-none placeholder:text-[15px]"
          />
        </div>

        <button
          type="submit"
          className="w-full sm:w-72 m-auto rounded-full text-base sm:text-lg md:text-[16px] font-semibold py-2 mt-2.5 cursor-pointer bg-yellow-400 text-slate-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default GfuAndGit;
