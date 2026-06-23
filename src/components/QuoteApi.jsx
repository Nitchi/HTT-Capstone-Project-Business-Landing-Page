import { useEffect, useState } from "react";
import axios from "axios";

function QuoteApi() {
  const [quote, setQuote] = useState("Health is wealth");
  const [author, setAuthor] = useState("Healthy sips");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/quotes/random"
        );
        
        console.log(response.data);
        setQuote(response.data.quote);
        setAuthor(response.data.author);

         } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);

  return (
    // <div className="flex flex-col justify-center">
    //   <blockquote>{quote}</blockquote>
    //   <p className="font-italics ">~ {author}</p>
    // </div>

    <section className="py-8 px-3">
  <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-4 md:p-6 border border-gray-100">
    
    <div className="flex justify-center mb-4">
      <span className="text-3xl text-leaf">❝</span>
    </div>

    <h2 className="text-center text-xl md:text-2xl font-bold text-green-600 mb-3">
      Daily Inspiration
    </h2>

    <p className="text-center text-sm md:text-lg italic text-gray-700 leading-relaxed">
      "{quote}"
    </p>

    <p className="text-center mt-3 text-gray-500 font-medium">
      — {author}
    </p>

  </div>
</section>
  );
}

export default QuoteApi;
