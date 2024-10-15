import React from "react";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0 px-6">
        {/* Left Section - Logo and Company Name */}
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="hilal Logo"
            className="hidden md:flex md:w-40 object-cover"
          />
          <div>
            <h3 className="text-xl font-bold text-white mr-2">
              Hilal Dubai General Trading Company Limited
            </h3>
            <p className="text-sm text-gray-400 mr-2">
              © 2024 Hilal Dubai General Trading Company Limited. All Rights
              Reserved.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-stert">
          <div className="flex items-center gap-3 mt-3 ">
            <FaPhone />
            <a href="tel:123456789 964+">+964 7715325959</a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone />
            <a href="tel:123456789 964+">+964 7715325959</a>
          </div>

          <div className="flex items-center gap-3 mt-3">
            <MdEmail />
            <a href="mailto: info@hilaldubaicompany.iq">
              <p>info@hilaldubaicompany.iq</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
