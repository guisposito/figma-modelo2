// eslint-disable-next-line react/prop-types
const Button = ({text}) => {
    return(
        <a className="uppercase flex " href="#">
            <div className="flex justify-center items-center border h-12 w-215 hover:underline">
                {text}
            </div>
        </a>
    );
}

export default Button;