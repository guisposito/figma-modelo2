const Header = () => {
    const title="The Coffe Roasters";
    const subtitle = "We Source our coffee seasonally, from farmers who care, and roast to highlight what makes them special."
    
    return (
        <header className="text-white font-inter">
            <div className="bg-hero-pattern h-[1032px] bg-cover bg-no-repeat bg-center">
                <div className="flex flex-row justify-between items-center container mx-auto pt-12">
                    <div className="">
                        <h2 className="hover:underline underline-offset-4">CAFÉ DO DOIDO</h2>
                    </div>
                    <ul className="flex justify-between gap-10 ">
                        <li className="hover:underline underline-offset-4"><a href="">HOME</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">WHY US</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">MENU</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">HAPPY CLIENTS</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">BLOGS</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">OUR LOCATIONS</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">NEWSLETTER</a></li>
                    </ul>
                </div>
                <div className="">
                    <div className=""></div>
                    <div className="">
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </div>
                    <div className="">
                        <a href=""></a>
                    </div>
                </div>
            </div>
       </header>
    );
}

export default Header; 