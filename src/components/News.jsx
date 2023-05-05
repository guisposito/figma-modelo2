import HeadingSection from "./utils/HeadingSection";
import Data from "../data/blogposts.json";

const News = () => {
    return(
        <section>
            <div className="bg-bg-section h-[913px]">
                <HeadingSection 
                    title="News"
                    text="Stay updated on all the latest Coffee House products, events & community news."
                    wText="w-[500px]"
                    hrColor="border-black"                
                />
                <div className="flex justify-center relative gap-8 container mx-auto mt-12 ">
                    {Data.map((blogpost) => (
                        <div className="flex flex-col w-[352px] h-[504px] bg-gray-100 rounded font-inter" key={blogpost.id}>
                            <div className=" h[288px] w-[352px]">
                                <img src={blogpost.img} alt={blogpost.alt} width="352" height="288" />
                            </div>
                            <div className="mt-5">
                                <h3 className="font-bold uppercase mb-1">{blogpost.title}</h3>
                                <p className="">{blogpost.description}</p>
                            </div>
                            <div className="absolute bottom-0">
                                <a className="text-start hover:underline" href="">- Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News;