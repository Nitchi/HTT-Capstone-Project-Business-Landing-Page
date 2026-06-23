import FAQ from "../components/Faq";


import Hero from "../components/Hero";
import ProductsGrid from "../components/ProductsGrid";
import GetQuote from "../components/QuoteApi";



import ReviewGrid from "../components/ReviewGrid";

function Home(){
    return (
        <div className="w-full flex flex-col">

        <Hero />

        
        <ProductsGrid />


        <FAQ />

        <GetQuote />


        

        

        


        </div>
    )
}

export default Home;