import { useState } from "react"

function FAQ(){

 const [selectedFaq, setSelectedFaq] = useState(null)

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

    return(

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">

            <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

            {faqs.map((faq, index) => (
              <div
              
                key={index}
                className="p-3 mt-1 shadow rounded-2xl">
              
                <button onClick={() => {
                  setSelectedFaq(index);
                  
                } }><h3 className="font-semibold text-lg">{faq.q} </h3></button>
            
                {selectedFaq == index && <p className="text-gray-600 mt-2">{faq.a}</p>}

              </div>
                ))}

          </div>
        </section>


    )
};


export default FAQ;
