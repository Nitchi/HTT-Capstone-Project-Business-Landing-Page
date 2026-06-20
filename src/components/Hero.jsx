import { VscArrowSmallRight } from "react-icons/vsc";
import logo from "/assets/logo.jpeg";


function Hero(){
    return(

        <section id="hero" className="flex flex-col">

            <div className="flex flex-col md:flex-row mx-auto bg-amber-100 w-full py-2">
                <div className="w-full md:w-1/2 pb-2 ">
                    <h1 className="text-4xl font-bold text-green-700 ">Pure Nature,</h1>
                    <h1 className="text-4xl font-bold text-green-600  italic ">Bottled Fresh.</h1>
                    <p className="py-4">We slow-press the finest organic fruits and vegetables within hours of harvest — no heat, 
                        no additives, nothing artificial. Just living nutrition that your body actually absorbs.</p>
                    <button className="bg-green-100  p-4 rounded-2xl text-white flex items-center "><p className="mr-2">Explore our Healthy Drinks</p> <VscArrowSmallRight /></button>    
                    
                </div>

                <div className="flex overflow-y-hidden flex-row justify-end h-[265px] ">
                    <img src={logo} className="object-cover w-full"/>
                </div>

               

            </div>
        </section>

    )
}

export default Hero;

{/* <button
                  className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 md:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-label="Toggle mobile menu">
                
                  <span className="text-2xl">{menuOpen ? "×" : "☰"}</span>
          </button>

          
              {menuOpen && (
                <div className="border-t border-ink/10 bg-white px-5 py-4 md:hidden">
                  <div className="mx-auto flex max-w-7xl flex-col gap-4 font-semibold">
                    <a onClick={() => setMenuOpen(false)} href="#products">Products</a>
                    <a onClick={() => setMenuOpen(false)} href="#reviews">Reviews</a>
                    <a onClick={() => setMenuOpen(false)} href="#faq">FAQ</a>
                    <a onClick={() => setMenuOpen(false)} href="#order" className="rounded-full bg-ink px-5 py-3 text-center text-white">
                      Order now
                    </a>
                  </div>
                </div>
              )} */}  
