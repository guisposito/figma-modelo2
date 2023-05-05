import HeadingSection from "./utils/HeadingSection";
import Data from "../data/locations.json";

const SectionLocations = () => {
    return(
        <section>
            <div className="h-[815px] bg-section-locations bg-cover font-inter  text-white">
                <HeadingSection 
                title="Our Location"
                text="Come drink a coffee with us on Fleet Street or Chancery Lane!"
                wText="w-[260px]"
                />
                <div className="flex justify-center gap-44 container mt-12 mx-auto ">
                    {Data.map((location) => (
                        <div className="flex flex-col gap-6 h-[407px] w-[256px]" key={location.id}>
                            <div className="">
                                <img src={location.img} alt={location.alt} width="245" height="239" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl mb-6">{location.name}</h3>
                                <p>{location.func}</p>
                                <p>{location.end}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SectionLocations;