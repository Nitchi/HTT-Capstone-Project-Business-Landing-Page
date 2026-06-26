import { useState } from "react";
import logo from "/assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

function NavBar() {
  const [open, setOpen] = useState(false);
  const navref =[
    {
      name:"Product",
      url: "#product"
    },
    
    // {
    //   name:"Story",
    //   url: "#story"
    // },
    
    
    {
      name:"Review",
      url: "#review"
    },

    {
      name:"FAQ",
      url: "#faq"
    },


    {
      name:"Contact",
      url: "#contact"
    },

   
  ]
  return (
    <>
      <div className="relative  sticky top-0 z-10">
        <nav className="flex bg-green-950 shadow-md h-20 py-2 px-6 justify-between items-center  ">
          <div className="h-20 overflow-hidden flex items-center justify-center">
            <img src={logo} alt="brand logo" className=" h-8 w-12 md:h-12 md:w-18" />
          </div>  

          <div className="md:flex md:flex-row justify-between hidden ">
            <div className=" md:flex space-x-6 mx-6">
              <a
                href="#product"
                className="font-medium text-gray-200 hover:text-green-500 transition"
              >
                Product
              </a>
              {/* <a
                href="#ourStory"
                className="font-medium text-gray-200 hover:text-green-500 transition"
              >
                Our Story
              </a> */}
              
              <a
                href="#review"
                className="font-medium text-gray-200 hover:text-green-500 transition"
              >
                Reviews
              </a>

              <a
                href="#faq"
                className="font-medium text-gray-200 hover:text-green-500 transition"
              >
                FAQ
              </a>

              <a
                href="#contact"
                className="font-medium text-gray-200 hover:text-green-500 transition"
              >
                Contact
              </a>
            </div>
            <a 
               href="https://storefront.payxy.africa/2a11dVLH6unFUNXkG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-700 text-gray-200 rounded-lg py-1  px-2 text-[10px] md:text-[15px] ">
              Shop Now
            </a>
            

          </div>

         {open ? 
              <MdClose
              className="text-white cursor-pointer"
              onClick={() => setOpen(false)}
              />
             :
             <RxHamburgerMenu
              className="text-white cursor-pointer block md:hidden"
              onClick={() => setOpen(true)}
            />} 


           {/* mobile nav */}
           
         
           
          

          {open && (
            <div className=" w-full max-w-[320px] md:hidden z-100 bg-green-950 absolute right-0 top-0 mt-20 ">
             <div>

              

             </div>
          <div className="flex flex-col px-4 ">
            
          { navref.map(ref => 
             <a
            href={ref.url}
            className="font-medium text-white hover:text-green-500 hover:bg-green-500/20 transition mb-2"
          >
            {ref.name}
          </a>
          )
          
          }

          <a
          href="https://storefront.payxy.africa/2a11dVLH6unFUNXkG"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-white hover:text-green-500 hover:bg-green-500/20 transition mb-2"
          >
          Shop Now  
          </a>
          
          </div>
          
       
        <button className="bg-green-700 text-gray-200 rounded-lg py-1  px-2 text-[10px] hidden lg:block ">
          Shop Now
        </button>
            </div>
          )}
        
  

          
        </nav>

        
       

      </div>
    </>
  );
}

export default NavBar;
