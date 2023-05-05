import HeadingSection from "./utils/HeadingSection";

const Newsletter = () => {
  return (
    <section>
      <div className="bg-black font-inter text-white h-[432px]">
        <div className="container mx-auto">
          <HeadingSection
            title="Our Newsletter"
            text="Available all day! We can not guarantee our fodds are allergen-free. Service Charge not included."
            wText="w-[450px]"
          />
          <div className="flex gap-6 justify-center mt-12">
            <input className="w-[277px] bg-transparent border placeholder:p-5" type="email" placeholder="Your E-mail Address..." />
            <a className="uppercase flex " href="#">
              <div className="flex justify-center items-center border h-12 w-44 hover:underline">
                Subscribe
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
