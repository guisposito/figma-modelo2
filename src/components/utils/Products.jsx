const Products = ({products}) => {
    return(
        <div className="flex flex-wrap justify-center font-inter">
             {products.map(product => (
                <div className="w-1/2" key={product.id}>
                   <div className="flex mb-6 w-[544px] h-[72px]">
                        <div className="mr-6">
                            <a href="">
                                <img className="" src={product.img} alt={product.alt} width="72" height="72" />   
                            </a>
                        </div>
                        <div className="w-[352px]"> 
                            <a href="">
                                <h4 className="uppercase font-semibold mb-2">{product.brand} {product.name}</h4>
                            </a>
                            <p className=" text-xs">{product.description}</p>
                        </div>
                        <div className="flex font-semibold text-end">
                            <span>R$ {product.price}</span>
                        </div>
                   </div>
                </div>
            ))}
        </div>
    );
}

export default Products;