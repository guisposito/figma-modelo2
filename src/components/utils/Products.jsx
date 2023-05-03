const Products = ({products}) => {
    return(
        <div className="">
             {products.map(product => (
                <div className="font-josefins text-ft-grey-100 w-[300px] relative " key={product.id}>
                    <a href="#">
                        <img className="rounded" src={product.img} alt={product.alt} width="300" height="383" />
                        <h4 className="mt-[20px] text-[20px]">{product.brand} {product.name}</h4>
                        <p className="mt-1 mb-[40px] font-semibold">{product.description}</p>
                        <span className="mt-1 mb-[40px] font-semibold">R$ {product.price}</span>
                    </a>
                    
                </div>
            ))}
        </div>
    );
}

export default Products;