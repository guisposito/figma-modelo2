import CardDescriptionL from "./utils/CardDescriptionL";
import CardDescriptionR from "./utils/CardDescriptionR";

const SectionDescription = () => {
    return(
        <section>
            <div className="bg-section bg-center bg-no-repeat h-[600px]">
                <div className="flex justify-between container mx-auto pt-36">
                    <div className="flex-col">
                        <CardDescriptionL title="indoor seating" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="./img/icons/icon1.png" alt="Xícara" />
                        <CardDescriptionL title="pet firendly" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="./img/icons/icon2.png" alt="Ração" />
                        <CardDescriptionL title="take away" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="./img/icons/icon3.png" alt="Copo" />
                    </div>
                    <div className="flex-col">
                        <CardDescriptionR title="Wheelchair Accessible" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="./img/icons/icon4.png" alt="Grãos" />
                        <CardDescriptionR title="Vegan Options" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="./img/icons/icon5.png" alt="Vegan" />
                        <CardDescriptionR title="cyclist friendly" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry." imgUrl="./img/icons/icon6.png" alt="Prato e colher" />
                    </div>
                </div>
            </div>
        </section>
    );

}

export default SectionDescription;