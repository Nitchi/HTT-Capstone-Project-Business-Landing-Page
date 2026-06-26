import { VscArrowSmallRight } from "react-icons/vsc";
import coverImg from "/assets/coverImg.png";
import coverImgN from "/assets/coverImgN.png";
import coverPic from "/assets/coverPic.png";


function Hero(){
    return(

        <section id="hero">

            {/* large screen hero section */}

            <div  className="hidden md:flex md:flex-col w-full py-10 pb-15  "
                            style={{
                                    backgroundImage: `url(${coverPic})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "right",
                                    backgroundRepeat: "no-repeat",
                                }}>
                

                <div className="flex flex-row w-full gap-2  py-2 px-10">
                    <div className="w-full md:w-1/2 pb-2 ">
                        <h1 className="text-4xl font-bold text-green-700 font-inter ">Pure Nature,</h1>
                        <h1 className="text-4xl font-bold text-green-600  italic font-inter ">Bottled Fresh.</h1>
                        <p className="py-4 text-black">We slow-press the finest organic fruits and<br/> vegetables within hours of harvest — no heat,<br/> 
                            no additives, nothing artificial. <br />Just living nutrition that your body actually absorbs.</p>
                        <a href="#product" className="bg-orange-400 p-4 rounded-2xl text-white inline-flex items-center "><span className="mr-2">Explore our Healthy Drinks</span> <VscArrowSmallRight /></a>    
                        
                    </div>

                    <div className=" md:hidden flex overflow-y-hidden flex-row justify-end h-67 ">
                        <img src={coverImg} className="object-cover w-full rounded-lg"/>
                    </div>

                

                </div>
            </div>

            {/* mobile hero section  */}

            <div  className="flex flex-col md:hidden w-full py-10 pb-15 ">
                                           

                <div className="flex flex-col md:flex-row w-full gap-2  py-2 px-10">
                    <div className="w-full md:w-1/2 pb-2 ">
                        <h1 className="text-4xl font-bold text-green-700 font-inter ">Pure Nature,</h1>
                        <h1 className="text-4xl font-bold text-green-600  italic font-inter ">Bottled Fresh.</h1>
                        <p className="py-4 text-black">We slow-press the finest organic fruits and<br/> vegetables within hours of harvest — no heat,<br/> 
                            no additives, nothing artificial. <br />Just living nutrition that your body actually absorbs.</p>
                        <a href="#product" className="bg-orange-400 p-4 rounded-2xl text-white inline-flex items-center "><span className="mr-2">Explore our Healthy Drinks</span> <VscArrowSmallRight /></a>    
                        
                    </div>

                    <div className="flex overflow-y-hidden flex-row justify-center ">
                        <img src={coverImg} className="object-contain w-full max-h-[550px] rounded-lg"/>
                    </div>

                

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
