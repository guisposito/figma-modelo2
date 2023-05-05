import Socialicons from "./utils/Socialicons";

const Footer = () => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    return (
        <footer>
            <div className="bg-black h-[120px] font-inter text-white">
                <div className="flex justify-between items-center container mx-auto">
                    <div className="">
                        <p>Copyright {anoAtual} All rights reserved</p>
                    </div>
                    <ul className="flex justify-between items-center gap-12 font-semibold">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="text-xs">
                        <ul className="flex justify-between items-center gap-7">
                            <Socialicons text="FB" url="#"/>
                            <Socialicons text="IG" url="#"/>
                            <Socialicons text="TW" url="#"/>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;