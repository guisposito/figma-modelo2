const Button = (props) => {
    return(
        <a className="uppercase flex cursor-pointer " href={props.url} onClick={props.click}>
            <div className="flex justify-center items-center border h-12 w-215 hover:underline">
                {props.text}
            </div>
        </a>
    );
}

export default Button;