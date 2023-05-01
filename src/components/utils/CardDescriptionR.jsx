// eslint-disable-next-line react/prop-types
const CardDescriptionR = (props) => {
    return(
        <div className="flex w-[352px] h-[72px] mb-12 font-inter">
            <div className="w-32 h-16 mr-4">
                <img src={props.imgUrl} alt={props.alt} width="64" height="64px" />
            </div>
            <div className="text-start">
                <h4 className="uppercase font-semibold">{props.title}</h4>
                <p className="pt-1">{props.text}</p>
            </div>
            
        </div>
    );
}

export default CardDescriptionR;