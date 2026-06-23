import reviews from "../Data/Reviews"

function ReviewGrid() {

    return(

        <section id="review">

            <div className="flex flex-col md:flex-row bg-green-900 p-10">

                 <div className="flex flex-col w-full md:w-1/4">
                        <p className="text-orange-300 font font-semibold font-inter">Customer Love</p>
                        <p className="text-white font-bold font-inter">Real results, real People</p>
                </div>
                    

                {reviews.map((review, index) => (

                    <div key={index} className="flex flex-col rounded-md bg-amber-100 px-auto shadow-2xl w-full md:w-3/4">
                        <div className="flex flex-col justify-center"> 
                            <span className="text-amber-300 text-cenetr">{review.rating}</span>
                            <p className="text-center text-green-900 ">{review.quote}</p>
                        </div>

                        <div className="flex flex-row gap-2">

                            <div className="grid h-14 w-14 place-items-center rounded-full bg-green-600 text-xl font-black text-white">
                      {review.name.charAt(0)}
                            </div>

                            <p className="text-green-900 mb-0">{review.name}</p>
                        </div>  

                </div>

                   

                 
                
                ))}
                

               

            </div>

        </section>
    )
}







export default ReviewGrid;

