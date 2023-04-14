export default function Button(props)
{
    return(
        <div className="button">
            <button onClick={props.handleClick}>
                {props.ifWon ? "Reset Game":"Roll"}
            </button>
        </div>
    );
}