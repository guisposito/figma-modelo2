import HeadingSection from "./utils/HeadingSection";
import Button from "./utils/Button";

const SectionLooking = () => {
    return (
        <section>
            <div className="bg-section-cta bg-cover bg-center h-[432px]">
                <div className="mx-auto container text-white">
                    <HeadingSection title="Looking for a fresh coffee?" text="Come drink a coffee with us on Fleet Street, Chancery Lane or Milkwood Road!" wText="w-[350px]" />
                    <div className="flex justify-center mt-12">
                        <Button text="book a table" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionLooking;