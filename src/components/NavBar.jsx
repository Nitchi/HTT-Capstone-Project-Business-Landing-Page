import { useState } from "react";
import logo from "/assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex bg-green-950 shadow-md  py-2 px-6 justify-between items-center sticky top-0 z-10 ">
        <img src={logo} alt="brand logo" className=" size-12" />

        <div className="hidden lg:flex space-x-6">
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Product
          </a>
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Our Story
          </a>
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Benefits
          </a>
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Reviews
          </a>
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Contact
          </a>
        </div>
        <button className="bg-green-700 text-gray-200 rounded-lg py-1  px-2 text-[10px] hidden lg:block ">
          Shop Now
        </button>

        {/* mobile nav */}
        <div className="block lg:hidden relative">
          {open ? (
            <MdClose
              className="text-white cursor-pointer"
              onClick={() => setOpen(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-white cursor-pointer"
              onClick={() => setOpen(true)}
            />
          )}

          {open && (
            <div className="bg-white  w-full  rounded-md absolute right-0 top-full ">
                <div className="flex flex-col lg:hidden right-0 w-71 bg-amber-100 flex-wrap ">
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition mb-2"
          >
            Product
          </a>
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Our Story
          </a>
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Benefits
          </a>
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Reviews
          </a>
          <a
            href="#product"
            className="font-medium text-gray-200 hover:text-green-500 transition"
          >
            Contact
          </a>
        </div>
        <button className="bg-green-700 text-gray-200 rounded-lg py-1  px-2 text-[10px] hidden lg:block ">
          Shop Now
        </button>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
