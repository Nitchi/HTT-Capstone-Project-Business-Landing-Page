import products from "../Data/Product"
import { MdClose } from "react-icons/md";

function ProductModal({idx, onClose}) {
    

    const product = products[idx]

    return(

        <div className="fixed top-0 left-0 w-full h-screen flex flex-row justify-center items-center p-4 bg-gray-100/75 z-999">
            

           
            <div key={product.id} className=" w-3/4 h-[480px] bg-slate-100 py-2 px-4">

                 <div className="flex flex-row justify-between items-center px-4 py-4">
                <h1 className="text-3xl text-green-950">Product Details</h1>
                 <MdClose
                    className="text-black cursor-pointer"
                    onClick={() => onClose(false)}
                     />
                </div>

                <div className="flex flex-row ">

                    <div className="h-[80%] max-h-[400px] w-[50%] ">
                        <img src={product.photo} className="max-h-[400px]  object-contain" />
                    </div>
                
                <div>
                    <h3 className="font-semibold mt-1 text-2xl">{product.name} </h3>          
                    <p className="text-gray-600 text-sm mt-1 text-md">{product.category}</p>
                        <p className="text-gray-600 text-sm mt-1">Ingridients: {product.ingredients}</p>
                        <p className="text-gray-600 text-sm mt-1">Ingridients: {product.detail}</p>

                </div>
                </div>

            </div>

            
        
        </div>

    )
}

export default ProductModal