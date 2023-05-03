import Button from "./utils/Button";

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
                    <ul className="flex justify-between gap-10">
                        <li className="hover:underline underline-offset-4"><a href="">HOME</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">WHY US</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">MENU</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">HAPPY CLIENTS</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">BLOGS</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">OUR LOCATIONS</a></li>
                        <li className="hover:underline underline-offset-4"><a href="">NEWSLETTER</a></li>
                    </ul>
                </div>
                <div className="w-[962px] h-[483px] mx-auto mt-52">
                    <div className="flex justify-center">
                        <img src="/img/Logo.png" alt="Logo" width="120" height="122" />
                    </div>
                    <div className="flex flex-col justify-center items-center mt-6 gap-6">
                        <h1 className="font-bold text-8xl">{title}</h1>
                        <p className="text-center w-8/12 text-3xl">{subtitle}</p>
                    </div>
                    <div className="mt-12 flex justify-center">
                        <Button text="view our menu" />
                    </div>
                </div>
            </div>
       </header>
    );
}

export default Header; 