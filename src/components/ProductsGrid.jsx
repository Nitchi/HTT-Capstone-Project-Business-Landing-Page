import products from "../Data/Product"


function ProductsGrid(){

    console.log(products);
    

    return(

        <section id="product">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {products.map(product => (

                    <div key={product.id} className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition">
                        <img src={product.photo} alt={product.name}
                            className="w-full h-48 object-cover cursor-pointer"
                            />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg cursor-pointer hover:text-blue-600"
                                // onclick="viewProductDetails(${product.id})"> 
                                >
                                
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-sm">{product.category}</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                                
                            </div>
                            <button 
                                    className   ="w-full mt-3 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                                    View Details

                            </button>


                        </div>
                    </div>

                    


                ))}
                


            </div>
          

            

            

        </section>


    )
}




export default ProductsGrid;