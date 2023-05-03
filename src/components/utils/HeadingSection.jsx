const HeadingSection = (props) => {
    return(
        <div className="font-inter">
            <h3 className="text-center text-[40px] font-bold pt-24 mb-6">{props.title}</h3>
            <div className="flex justify-center">
                <hr className="text-center mb-6 w-48"/>
            </div>
            <p className="text-center whitespace-pre-wrap">{props.text}</p>

        </div>
    );
}

export default HeadingSection;