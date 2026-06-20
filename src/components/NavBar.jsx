import logo from "/assets/logo.jpeg";

function NavBar() {
    return (

        <nav className="flex bg-green-900 shadow-md py-2 px-6 justify-between items-center sticky top-0 z-10 ">
          <img src={logo} alt="brand logo" className=" size-12" />
          <div className="hidden md:flex space-x-6">
            <a href="#product" className="font-medium text-gray-200 hover:text-green-500 transition">Product</a>
            <a href="#product" className="font-medium text-gray-200 hover:text-green-500 transition">Our Story</a>
            <a href="#product" className="font-medium text-gray-200 hover:text-green-500 transition">Benefits</a>
            <a href="#product" className="font-medium text-gray-200 hover:text-green-500 transition">Reviews</a>
            <a href="#product" className="font-medium text-gray-200 hover:text-green-500 transition">Contact</a>


          </div>
          <button className="bg-green-700 text-gray-200 rounded-lg py-1  px-2 text-[10px] hidden md:block ">Shop Now</button>

    

        </nav>

    )
}

export default NavBar;

