const Footer = () => {
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    return (
        <footer>
            <div className="bg-black h-[120px] font-inter">
                <div className="flex justify-between items-center container mx-auto">
                    <div className="">
                        <p>Copyright {anoAtual} All rights reserved</p>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;