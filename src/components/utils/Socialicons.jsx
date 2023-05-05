const Socialicons = (props) => {
    return (
        <li className="bg-slate-800 w-8 h-8 flex justify-center items-center rounded-2xl hover:bg-gray-600"><a href={props.url}>{props.text}</a></li>
    );
}

export default Socialicons;