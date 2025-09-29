import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../assets";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
    <div className="w-full h-17 bg-gradient-to-r from-[#dac615] to-[#fbbf24] flex items-center">
      <div className="w-[93%] flex justify-between m-auto">
        <Link to="/">
          <img className="w-14 h-15.5" src={images.PMC_logo} alt="logo" />
        </Link>

        <div className="w-[95%] flex justify-end items-center pr-5">
          <div className="hidden lg:flex text-zinc-800 gap-5 text-sm font-medium items-center">
            <Link to="/" className="relative group inline-flex items-center">
              Home
              <span className="absolute underline-slide -bottom-[2px] left-0 h-[2px] bg-zinc-600"></span>
            </Link>

            <div className="relative group inline-flex items-center">
              <Link to="/aboutus" className="relative group flex items-center gap-1">
                About Us
                <i className="ri-arrow-down-s-line text-lg group-hover:hidden"></i>
                <i className="ri-arrow-up-s-line text-lg hidden group-hover:inline"></i>
                <span className="absolute underline-slide -bottom-[2px] left-0 h-[2px] bg-zinc-600"></span>
              </Link>
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 z-20 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/founder">Founder Message</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Legal Advisor</Link>
                </li>
              </ul>
            </div>

            <div className="relative group inline-flex items-center">
              <Link to="/premiumAdSer" className="relative group flex items-center gap-1">
                Premium Advertising Services
                <i className="ri-arrow-down-s-line text-lg group-hover:hidden"></i>
                <i className="ri-arrow-up-s-line text-lg hidden group-hover:inline"></i>
                <span className="absolute underline-slide -bottom-[2px] left-0 h-[2px] bg-zinc-600"></span>
              </Link>
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-50 z-20 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/founder">Tv and Ad Advertising</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Radio Ad Agency</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">PVR Cinemas</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Metro Advertising</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Airport Advertising</Link>
                </li>
              </ul>
            </div>

            <Link to="/gallery" className="relative group inline-flex items-center">
              Gallery
              <span className="absolute underline-slide -bottom-[2px] left-0 h-[2px] bg-zinc-600"></span>
            </Link>
            <Link to="/celebsEndorsement" className="relative group inline-flex items-center">
              Celebrity Endorsement
              <span className="absolute underline-slide -bottom-[2px] left-0 h-[2px] bg-zinc-600"></span>
            </Link>

            <div className="relative group inline-flex items-center">
              <Link to="/packages" className="relative group flex items-center gap-1">
                Packages
                <i className="ri-arrow-down-s-line text-lg group-hover:hidden"></i>
                <i className="ri-arrow-up-s-line text-lg hidden group-hover:inline"></i>
                <span className="absolute underline-slide -bottom-[2px] left-0 h-[2px] bg-zinc-600"></span>
              </Link>
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-50 z-20 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/founder">AAJ TAK News</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Kapil Sharma Show</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Tarak Mehta ka Ulta Chasma</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Combo Packages</Link>
                </li>
              </ul>
            </div>

            <div className="relative group inline-flex items-center">
              <Link
                to="/hotSellingPackages"
                className="relative group flex items-center gap-1"
              >
                Hot Selling Packages
                <i className="ri-arrow-down-s-line text-lg group-hover:hidden"></i>
                <i className="ri-arrow-up-s-line text-lg hidden group-hover:inline"></i>
                <span className="absolute underline-slide -bottom-[2px] left-0 h-[2px] bg-zinc-600"></span>
              </Link>
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-50 z-20 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/founder">Kon Banega Crorepati</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Kapil Sharma Show</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link to="/about/legal">Tarak Mehta ka Ulta Chasma</Link>
                </li>
              </ul>
            </div>

            <Link to="/contactus" className="relative group inline-flex items-center">
              Contact Us
              <span className="absolute underline-slide -bottom-[2px] left-0 h-[2px] bg-zinc-600"></span>
            </Link>
          </div>

          {/* Work on responsive menu  */}

          <div className="lg:hidden flex items-center justify-end">
            <button
              onClick={() => setIsOpen(true)}
              className="text-white text-2xl focus:outline-none"
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>

          {/* Fullscreen Panel */}
          {isOpen && (
            <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-2xl">
              <div className="w-[480px] h-[560px] bg-yellow-500 text-white font-medium p-10 overflow-y-auto rounded-xl shadow-xl transition-all duration-300">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-3xl"
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6">
                <Link to="/">Home</Link>
                <div>
                  <button
                    onClick={() => toggleDropdown("about")}
                    className="flex items-center justify-between w-full"
                  >
                    <span>About Us</span>
                    <i
                      className={`ri-arrow-${
                        activeDropdown === "about" ? "up" : "down"
                      }-s-line`}
                    ></i>
                  </button>
                  {activeDropdown === "about" && (
                    <ul className="mt-2 ml-4 text-white">
                      <li>
                        <Link to="/about/founder">Founder Message</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">Legal Advisor</Link>
                      </li>
                    </ul>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => toggleDropdown("premium")}
                    className="flex items-center justify-between w-full"
                  >
                    <span>Premium Advertising Services</span>
                    <i
                      className={`ri-arrow-${
                        activeDropdown === "premium" ? "up" : "down"
                      }-s-line`}
                    ></i>
                  </button>
                  {activeDropdown === "premium" && (
                    <ul className="mt-2 ml-4 text-white">
                      <li>
                        <Link to="/about/founder">TV and Ad Advertising</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">Radio Ad Agency</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">PVR Cinemas</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">Metro Advertising</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">Airport Advertising</Link>
                      </li>
                    </ul>
                  )}
                </div>

                <Link to="/gallery">Gallery</Link>
                <Link to="/celebsEndorsement">Celebrity Endorsement</Link>

                <div>
                  <button
                    onClick={() => toggleDropdown("packages")}
                    className="flex items-center justify-between w-full"
                  >
                    <span>Packages</span>
                    <i
                      className={`ri-arrow-${
                        activeDropdown === "packages" ? "up" : "down"
                      }-s-line`}
                    ></i>
                  </button>
                  {activeDropdown === "packages" && (
                    <ul className="mt-2 ml-4 text-white">
                      <li>
                        <Link to="/about/founder">AAJ TAK News</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">Kapil Sharma Show</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">
                          Tarak Mehta ka Ulta Chasma
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/legal">Combo Packages</Link>
                      </li>
                    </ul>
                  )}
                </div>

                <div>
                  <button
                    onClick={() => toggleDropdown("hot")}
                    className="flex items-center justify-between w-full"
                  >
                    <span>Hot Selling Packages</span>
                    <i
                      className={`ri-arrow-${
                        activeDropdown === "hot" ? "up" : "down"
                      }-s-line`}
                    ></i>
                  </button>
                  {activeDropdown === "hot" && (
                    <ul className="mt-2 ml-4 text-white">
                      <li>
                        <Link to="/about/founder">Kon Banega Crorepati</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">Kapil Sharma Show</Link>
                      </li>
                      <li>
                        <Link to="/about/legal">
                          Tarak Mehta ka Ulta Chasma
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                <Link to="/contactus">Contact Us</Link>
              </nav>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>

    </>
  );
};

export default Navbar;