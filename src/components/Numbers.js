export default function Numbers(props)
{

    const dieElements=props.dies.map((die)=>{
        return <div>
                    <p key={die.id} 
                    className={die.selected ? "selected" : "not-selected"}
                    onClick={(event)=>props.handleClick(die.id)}>
                        {die.value}
                    </p>
                </div>;
        }
    )

    return(
        <div className="number-grid">
            {dieElements}
        </div>
    );
}