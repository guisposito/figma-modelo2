import HeadingSection from "./utils/HeadingSection";

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
                <div className="">
                    
                </div>
            </div>
        </section>
    );
}

export default News;