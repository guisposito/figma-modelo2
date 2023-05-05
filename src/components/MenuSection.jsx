import { useState } from "react";
import HeadingSection from "./utils/HeadingSection";
import Products from "./utils/Products";
import Data from "../data/products.json";

const MenuSection = () => {
  const [filter, setFilter] = useState('Foods');
  
  const handleFilterChange = (event) => {
    event.preventDefault();
    const newFilter = event.target.innerText;
    setFilter(newFilter);
  }

  const filteredProducts = Data.filter((product)=>{
    return product.category === filter;
  })


  return (
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
        <div className="container mx-auto mt-12 h-[528px]">
          <ul className="flex items-center justify-center gap-10">
            <li className={`hover:underline ${filter === 'Foods' ? 'underline' : ''}`} onClick={handleFilterChange}>
              <a href="">Foods</a>
            </li>
            <li className={`hover:underline ${filter === 'Drinks' ? 'underline' : ''}`} onClick={handleFilterChange}>
              <a href="">Drinks</a>
            </li>
          </ul>
          <div className="container mx-auto mt-12">
            <Products products={filteredProducts} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
