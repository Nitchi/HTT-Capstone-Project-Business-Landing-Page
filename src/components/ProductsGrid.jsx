import products from "../Data/Product"
import ProductModal from "./ProductModal";
import { useState } from "react";


function ProductsGrid(){
    const [open, setOpen] = useState(false);
    const [selectedProd, setSelectedProd] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        "All",
        ...new Set(products.map(product => product.category)),
        ];
    const filteredProducts =
        selectedCategory === "All"
        ? products
        : products.filter(
              (product) => product.category === selectedCategory
          );    

    const handleClick= (idx) => {
        setSelectedProd(idx);
        setOpen(true);


    }



    return(

        <section id="product">

             
            <div className="shadow-2xl mt-10 p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 rounded-sm">
                <h2 className="text-3xl md:text-4xl font-bold text-green-800 font-inter ">Our Menu</h2>

                <div className="flex gap-3 flex-wrap">
                    {categories.map(category => (

                        <button key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-5 py-2 text-sm md:text-base rounded-full transition cursor-pointer ${
                                                            selectedCategory === category
                                                                ? "bg-green-700 text-white"
                                                                : "bg-white text-green-700 border border-green-700"
                                                                }`}
                                                                >

                                        {category}  

                        </button>

                    ))}

                </div>
            </div>

            <div className="w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 py-6 mx-auto w-70 md:w-146 lg:w-222">
                

                    {filteredProducts.map((product, idx) => (

                        <div key={product.id} className="bg-white flex flex-col justify-between  rounded-lg shadow-md h-90 md:h-100 w-70  hover:shadow-lg transition  p-4">
                            <div className="h-[65%] flex justify-center">
                                <img src={product.photo} alt={product.name}
                                className="h-full object-contain cursor-pointer"
                                />
                            </div>    
                            
                            <div className="flex flex-row justify-between gap-4 h-[35%] items-center">
                                
                                    <div className="flex flex-col ">
                                        <h3 className="font-semibold text-lg cursor-pointer hover:text-green-400"
                                            // onclick="handleClick(${product.id})"> 
                                            >
                                            {product.name}
                                        </h3>
                                        <p className="text-gray-600 text-sm">{product.category}</p>
                                        
                                    </div>

                                    <div className="bg-green-100 rounded-lg px-1 flex justify center items-center ">
                                            <span className="text-xl font-bold text-green-600">₦{product.price}</span>
                                            
                                    </div>

                            </div>   

                            <button
                                onClick={() => handleClick(idx)}
                                className   ="w-full bg-green-600 text-white mt-2 py-1 rounded hover:bg-orange-400 cursor-pointer transition">
                                    View Details

                            </button>

                            
                            
                        </div>

                        


                    ))}
                    
                    

                </div>
            

            </div>


            

          {open && <ProductModal idx={selectedProd} onClose={setOpen} /> } 

        </section>


    )
}




export default ProductsGrid;


