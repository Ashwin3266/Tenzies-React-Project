/*    Notes    */

//React should contain only one parent element
// document.getElementById("root").append(JSON.stringify(page));
import Header from "./components/Header";
import Numbers from "./components/Numbers";
import Button from "./components/Button";
import React from "react";
import Confetti from "react-confetti";

export default function App()
{
    function resetGame()
    {
        let array=[];
        for(let i=0;i<10;i++)
        {
            let ran=Math.ceil(Math.random()*6);
            let obj={
                id:i,
                value:ran,
                selected:false
            };
            array.push(obj);
        }
        return array;
    }

    const [dies,setDies]=React.useState(() =>(resetGame()));
    const [won,setWon]=React.useState(false);

    //For Confetti
        const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    //For Confetti

    React.useEffect(()=>{
        setWon(()=>(dies.every((die)=>{
            return (die.selected && dies[0].value===die.value);
        })));
    },[dies]);

    //For Confetti
    React.useEffect(()=>{
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleWindowResize);
      
          return () => {
            window.removeEventListener('resize', handleWindowResize);
          };
    });
    //For Confetti

    function toggleSelect(id)
    {
        setDies((prev)=>{
            return prev.map((die)=>{
                return die.id=== id? {...die,selected:!die.selected} : die;
            })
        })
    }

    function changeValue()
    {
        setDies((prev)=>{
            return prev.map((die)=>{
                let ran=Math.ceil(Math.random()*6);
                return !die.selected ? {...die,value:ran} :die;
            })
        })
    }


    function handleClick(event)
    {       
            if(won)
            {
                setDies(()=>(resetGame()));
                return;
            }
            changeValue();
    }

    return(
        <div className="main">
            {won && <Confetti width={windowWidth}/>}
            <Header />
            <Numbers dies={dies} handleClick={toggleSelect} />
            <Button handleClick={handleClick} ifWon={won}/>
        </div>
    );
}