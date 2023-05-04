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
                <div className="container mx-auto">
                    {Data.map((blogpost) => (
                        <div className="" key={blogpost.id}>
                            <div className="" >
                                <img src={blogpost.img} alt={blogpost.alt} />
                            </div>
                            <div className="">
                                <h3>{blogpost.title}</h3>
                                <p>{blogpost.description}</p>
                            </div>
                            <a href="">- Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News;