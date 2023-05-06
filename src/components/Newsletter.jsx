import { useState } from "react";
import HeadingSection from "./utils/HeadingSection";
import Faq from "../data/FaqContent.json";
import Button from "./utils/Button";

const Newsletter = () => {
  const [showModal, setShowModal] = useState(false);
  const [ativaIndex, setAtivaIndex] = useState(null);

  const handleClick = (index) => {
    setAtivaIndex(ativaIndex === index ? null : index);
  };

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
            <input
              className="w-[277px] bg-transparent border placeholder:p-5"
              type="email"
              placeholder="Your E-mail Address..."
            />
            <a className="uppercase flex " href="#">
              <Button text="Subscribe" />
            </a>
          </div>
          <div className="flex justify-center mt-4">
            <Button click={() => setShowModal(true)} text="FAQ" />
            {showModal && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                <div className="bg-black rounded-lg p-8 w-3/6 relative">
                  <h2 className="text-center text-lg font-bold mb-4">FAQ</h2>
                  {Faq.map(
                    (faqitem, index) => (
                      <div className="" key={index}>
                        <div
                          className="flex items-center justify-between p-4 cursor-pointer"
                          onClick={() => handleClick(index)}
                        >
                          <h2 className="font-bold">{faqitem.heading}</h2>
                          <svg
                            className={`w-6 h-6 transition-transform ${
                              ativaIndex === index ? "transform rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                        {ativaIndex === index && (
                          <div className="p-4">{faqitem.content}</div>
                        )}
                      </div>
                    )
                  )}
                  <div className="flex justify-center mt-4">
                    <Button click={() => setShowModal(false)} text="Fechar" />
                  </div>
                  <button className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-white hover:text-gray-600 hover:rotate-180 transition duration-150 ease-in-out " onClick={() => setShowModal(false)}>
                      <svg  xmlns="http://www.w3.org/2000/svg"  className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
