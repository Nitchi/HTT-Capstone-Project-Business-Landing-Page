import FAQ from "../components/Faq";
import Hero from "../components/Hero";
import ProductsGrid from "../components/ProductsGrid";

function Home(){
    return (
        <div className="w-full flex flex-col">

        <Hero />

        <ProductsGrid />


        <FAQ />

        


        </div>
    )
}

export default Home;