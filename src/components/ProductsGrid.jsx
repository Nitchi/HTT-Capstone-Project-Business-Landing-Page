import products from "../Data/Product"
import ProductModal from "./ProductModal";
import { useState } from "react";


function ProductsGrid(){
    const [open, setOpen] = useState(false);
    const [selectedProd, setSelectedProd] = useState(null);

    const handleClick= (idx) => {
        setSelectedProd(idx);
        setOpen(true);


    }



    

    return(

        <section id="product">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  md:gap-6 md:gap-y-6 p-4">

                {products.map((product, idx) => (

                    <div key={product.id} className="bg-white flex flex-col justify-between  rounded-lg shadow-md h-90 md:h-100 pb-2 hover:shadow-lg transition">
                        <div className="h-[65%]">
                            <img src={product.photo} alt={product.name}
                            className="w-full h-full object-contain cursor-pointer"
                            />
                        </div>    
                        
                        <div>
                            <div className="p-4 flex justify-between">
                                <div>
                                    <h3 className="font-semibold text-lg cursor-pointer hover:text-green-400"
                                        // onclick="viewProductDetails(${product.id})"> 
                                        >
                                        
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{product.category}</p>
                                    
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                        <span className="text-2xl font-bold text-green-400">${product.price}</span>
                                        
                                </div>

                            </div>

                            
                            <button
                            onClick={() => handleClick(idx)}
                            className   ="w-full mt-3 bg-green-600 text-white py-2 rounded hover:bg-blue-600 transition">
                                View Details

                            </button>
                        </div>   

                        
                          
                    </div>

                    


                ))}
                
                

            </div>
          

            

          {open && <ProductModal idx={selectedProd} onClose={setOpen} /> } 

        </section>


    )
}




export default ProductsGrid;