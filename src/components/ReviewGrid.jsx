import { useEffect, useState } from "react";
import reviews from "../Data/Reviews"
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";


function ReviewGrid() {

    const [currentReview, setCurrentReview] = useState(0);
    const review = reviews[currentReview];
    const nextReview = ()=> {
        setCurrentReview ((prev) => 
            prev === reviews.length -1 ? 0 : prev +1
        )}
    
    const prevReview = ()=> {
        setCurrentReview ((prev) => 
            prev === 0 ?  reviews.length -1 : prev -1
        )
    }

    useEffect(()=>{

        const timer = setInterval(()=>{
            nextReview(); 
            }, 5000)


             return () => clearInterval(timer);


        }, []);
    


        return(

        <section id="review">
            <div className="w-full py-8 md:py-12 px-4 md:px-8 bg-green-900 ">

            <div className="flex flex-col md:flex-row gap-6 md:gap-8   ">

                <div className="flex flex-col md:w-1/2 tex-center md:text-left">
                        <p className="text-orange-300 font font-semibold font-inter tracking-widest text-sm md:text-base">CUSTOMER LOVE</p>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-white font-inter leading-tight">Real results,  <br className="hidden md:block" />Real People</h2>
                          {/* Navigation Dots */}
                        <div className="hidden md:flex gap-3 mt-6">

                        {reviews.map((_, index) => (

                            <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-300 hover:cursor-pointer ${
                                currentReview === index
                                ? "bg-orange-300 scale-125"
                                : "bg-gray-300"
                            }`}
                            >
                            </button>

                        ))}

                        </div>


                </div>
                    
                <div className="flex flex-col w-full ">

                        <div className="flex flex-row w-full items-center justify-between">

                            <IoChevronBack 
                            onClick={prevReview}
                            className="cursor-pointer text-white text-xl md:text-3xl hover:text-orange-300 transition duration-300  "
                            />

                            <div  className="flex flex-col justify-between rounded-md  bg-amber-100 p-4 md:p-6 shadow-2xl min-h-[230px] md:min-h-[220px] w-5/6 ">
                                <div className="flex flex-col text-center"> 
                                    <span className="text-xl md:text-2xl text-orange-400 ">{review.rating}</span>
                                    <p className=" mt-4 italic text-sm md:text-lg leading-relaxed text-green-900 ">"{review.quote}"</p>
                                </div>

                                <div className="flex flex-row gap-2 md:gap-4 items-center">

                                    <div className="grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full bg-green-600 text-base md:text-lg font-black text-white">
                                    {review.name.charAt(0)}
                                    </div>

                                    <p className="font-semibold text-sm md:text-base text-green-900">{review.name}</p>
                                </div>  

                            </div>

                            <IoChevronForward
                            onClick={nextReview}
                            className="cursor-pointer text-white text-xl md:text-3xl hover:text-orange-300 transition duration-300 "
                            />

                        </div>

                         {/* Navigation Dots */}
                        <div className="flex md:hidden justify-center gap-3 mt-6">

                        {reviews.map((_, index) => (

                            <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-300 hover:cursor-pointer ${
                                currentReview === index
                                ? "bg-orange-400 scale-125"
                                : "bg-gray-300"
                            }`}
                            >
                            </button>

                        ))}

                        </div>

                    </div>



               

            </div>
            </div>

        </section>
    )
}







export default ReviewGrid;


