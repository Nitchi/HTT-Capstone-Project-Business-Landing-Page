import { useState } from "react"
import { IoIosAdd } from "react-icons/io";
import { VscDash } from "react-icons/vsc";



function FAQ(){

 const [selectedFaq, setSelectedFaq] = useState(null)
 const [open, setOpen] = useState(false);
 

    const faqs = [
        {
        
          q: "Do the drinks contain preservatives?",
          a: "No. Our cold-pressed juices and healthy sips are freshly made, kept frozen and delivered frozon to preserve freshness."
        },
        {
          
          q: "Can I customize my juice?",
          a: "Absolutely. You can switch fruit mix, and decide your perfect blend."
        },
        {
          
          q: "Do you offer delivery?",
          a: "Local delivery is available. Office packs can be scheduled one day ahead."
        },
        {
          q: "Do your Zobo drink contain artifial sweetners and flavors?",
          a: "No. Our Zobo drinks are naturally sweetened and flavored with jaggery and pineapple."
        }
      ]
  const handleToggle = (index) => {
    setSelectedFaq(selectedFaq === index ? null : index);
  }; 

    return(


      
        <section id="faq" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
              <div key={index} className="p-3 mt-2 shadow rounded-2xl">
              
                 <button
              onClick={() => handleToggle(index)}
              className="w-full flex items-center justify-between"
                >
                <span className="font-semibold text-lg text-left">
                  {faq.q}
                </span>

                {selectedFaq === index ? (
                  <VscDash size={22} />
                ) : (
                  <IoIosAdd size={22} />
                )}
              </button>

              {selectedFaq === index && (
                <p className="text-gray-600 mt-3">
                  {faq.a}
                </p>
              )}  

          </div>
                ))}

          </div>
        </section>

       


    )
};


export default FAQ;


// const handleToggle = (index) => {
//     setSelectedFaq(selectedFaq === index ? null : index);
//   };

//   return (
//     <section id="faq" className="py-20 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
//           Frequently Asked Questions
//         </h2>

//         {faqs.map((faq, index) => (
//           <div key={index} className="p-4 mt-3 shadow rounded-2xl">

//             <button
//               onClick={() => handleToggle(index)}
//               className="w-full flex items-center justify-between"
//             >
//               <span className="font-semibold text-lg text-left">
//                 {faq.q}
//               </span>

//               {selectedFaq === index ? (
//                 <VscDash size={22} />
//               ) : (
//                 <IoIosAdd size={22} />
//               )}
//             </button>

//             {selectedFaq === index && (
//               <p className="text-gray-600 mt-3">
//                 {faq.a}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FAQ;

 // <section id="faq" className="py-20 px-6">
        //   <div className="max-w-4xl mx-auto">

        //     <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

        //     {faqs.map((faq, index) => (
        //       <div
              
        //         key={index}
        //         className="p-3 mt-1 shadow rounded-2xl">
              
        //         <button onClick={() => {
        //           setSelectedFaq(index)
                  
        //         } }><h3 className="font-semibold text-lg">{faq.q} </h3></button>
            
        //         {selectedFaq == index && <p className="text-gray-600 mt-2">{faq.a}</p>}

        //       </div>
        //         ))}

        //   </div>
        // </section>

        //  {open ? 
        //               <MdClose
        //               className="text-white cursor-pointer"
        //               onClick={() => setOpen(false)}
        //               />
        //              :
        //              <RxHamburgerMenu
        //               className="text-white cursor-pointer block md:hidden"
        //               onClick={() => setOpen(true)}
        //             />} 
        
        
        //            {/* mobile nav */}
                   
                 
                   
                  
        
        //           {open && (
        //             <div className=" w-full max-w-[320px] md:hidden z-100 bg-green-950 absolute right-0 top-0 mt-20 ">
        //              <div>
        