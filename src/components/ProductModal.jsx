import products from "../Data/Product"
import { MdClose } from "react-icons/md";

function ProductModal({idx, onClose}) {
    

    const product = products[idx]

    return(

        <div className="fixed top-0 left-0 w-full h-screen flex flex-row justify-center items-center p-4bg-black/60 backdrop-blur-sm z-999">
            

           
            <div key={product.id} className=" w-[95%] max-w-sm md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-100 rounded-2xl shadow-2xl py-2 px-4">

                 <div className="flex flex-row justify-between items-center px-4 py-4">
                    <h1 className="text-3xl text-green-950">Product Details</h1>
                    <MdClose
                    className="text-black cursor-pointer transition text-3xl"
                    onClick={() => onClose(false)}
                     />
                </div>

                <div className="flex flex-col md:flex-row ">

                    <div className="h-[80%] max-h-[400px] w-full md:w-1/2 flex justify-center ">
                        <img src={product.photo} className="w-full max-w-xs md:max-w-sm lg:max-w-md
                                                        h-64 md:h-80  object-contain" />
                    </div>
                
                <div className=" w-full md:w-1/2">
                    <h3 className="font-semibold mt-1 text-2xl md:text-3xl">{product.name} </h3>          
                    <p className="text-gray-600 text-sm mt-1 md:text-base">{product.category}</p>
                    <p className="text-gray-600 mt-1 text-sm md:text-base leading-relaxed">Ingridients: {product.ingredients}</p>
                    <p className="text-gray-600 text-sm md:text-base leading-7 mt-2">Details: {product.detail}</p>
                    <p className="text-2xl font-bold text-green-600 mt-4">₦{product.price}</p>

                </div>
                </div>

            </div>

            
        
        </div>

    )
}

export default ProductModal