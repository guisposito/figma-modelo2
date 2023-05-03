import HeadingSection from "./utils/HeadingSection";
import Products from "./utils/Products";
import Data from "../data/products.json";

const MenuSection = () => {
    const handleClick = (event) => {
        event.preventDefault();
      };
    return(
        <section>
            <div className="h-[912px] bg-bg-section">
                <div className="text-black">
                    <HeadingSection 
                        title="Explore our menu" 
                        text="Available all day! We can not guarantee our foods are allergen-free. Service charge not included." 
                        hrColor="border-black" 
                        wText="w-[474px]"
                        />
                </div>
                <div className="container mx-auto mt-12">
                    <ul className="flex items-center justify-center gap-10">
                        <li className="hover:underline"  onClick={handleClick} ><a href="">FOOD</a></li>
                        <li className="hover:underline" onClick={handleClick}><a href="">DRINKS</a></li>
                    </ul>
                    <Products products={Data} />
                </div>
            </div>
        </section>
    );
}

export default MenuSection;