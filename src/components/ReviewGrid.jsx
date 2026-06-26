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
            <div className="w-full  bg-green-900 ">

            <div className="flex flex-col md:flex-row bg-green-900 gap-4 py-10 mx-auto">

                <div className="flex flex-col w-full md:w-1/4">
                        <p className="text-orange-300 font font-semibold font-inter">Customer Love</p>
                        <p className="text-white font-bold font-inter">Real results, real People</p>
                </div>
                    
                    <div className="flex flex-col ">

                        <div className="flex flex-row items-center">

                            <IoChevronBack 
                            onClick={prevReview}
                            className="cursor-pointer text-white"
                            />

                            <div  className="flex flex-col rounded-md bg-amber-100 p-8 shadow-2xl w-full md:w-1/2">
                                <div className="flex flex-col justify-center"> 
                                    <span className="text-amber-300 text-cenetr">{review.rating}</span>
                                    <p className="text-center text-green-900 ">{review.quote}</p>
                                </div>

                                <div className="flex flex-row gap-2">

                                    <div className="grid h-10 w-10 place-items-center rounded-full bg-green-600 text-xl font-black text-white">
                                    {review.name.charAt(0)}
                                    </div>

                                    <p className="text-green-900 mb-0">{review.name}</p>
                                </div>  

                            </div>

                            <IoChevronForward
                            onClick={nextReview}
                            className="cursor-pointer text-white"
                            />

                        </div>

                         {/* Navigation Dots */}
                        <div className="flex justify-center gap-3 mt-8">

                        {reviews.map((_, index) => (

                            <button
                            key={index}
                            onClick={() => setCurrentReview(index)}
                            className={`h-3 w-3 rounded-full transition-all duration-300 ${
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



//  <section id="review">
//             <div className="w-full">

//             <div className="flex flex-col md:flex-row bg-green-900 gap-4 py-10 mx-auto">

//                 <div className="flex flex-col w-full md:w-1/4">
//                         <p className="text-orange-300 font font-semibold font-inter">Customer Love</p>
//                         <p className="text-white font-bold font-inter">Real results, real People</p>
//                 </div>
                    
//                     <div className="flex flex-col ">

//                         <div className="flex flex-row items-center">

//                             <IoChevronBack 
//                             onClick={prevReview}
//                             className="cursor-pointer text-white"
//                             />

//                             <div  className="flex flex-col rounded-md bg-amber-100 p-8 shadow-2xl w-full md:w-1/2">
//                                 <div className="flex flex-col justify-center"> 
//                                     <span className="text-amber-300 text-cenetr">{review.rating}</span>
//                                     <p className="text-center text-green-900 ">{review.quote}</p>
//                                 </div>

//                                 <div className="flex flex-row gap-2">

//                                     <div className="grid h-10 w-10 place-items-center rounded-full bg-green-600 text-xl font-black text-white">
//                                     {review.name.charAt(0)}
//                                     </div>

//                                     <p className="text-green-900 mb-0">{review.name}</p>
//                                 </div>  

//                             </div>

//                             <IoChevronForward
//                             onClick={nextReview}
//                             className="cursor-pointer text-white"
//                             />

//                         </div>

//                          {/* Navigation Dots */}
//                         <div className="flex justify-center gap-3 mt-8">

//                         {reviews.map((_, index) => (

//                             <button
//                             key={index}
//                             onClick={() => setCurrentReview(index)}
//                             className={`h-3 w-3 rounded-full transition-all duration-300 ${
//                                 currentReview === index
//                                 ? "bg-orange-400 scale-125"
//                                 : "bg-gray-300"
//                             }`}
//                             >
//                             </button>

//                         ))}

//                         </div>

//                     </div>



               

        //     </div>
        //     </div>

        // </section>
