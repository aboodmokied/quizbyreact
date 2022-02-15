import React from "react";
import Qustion from "./Qustion";
function Quiz(props) {
    let [reset,setReset]=React.useState(()=>false);
    
    //when click again:
    function again(){
        
        setReset(prev=>!prev);
        
        
    }

    // from Api:
    let [data,setData]=React.useState([])
    React.useEffect(()=>{
        async function fromApi(){
            
            let data =await fetch("https://opentdb.com/api.php?amount=10");
            let json=await data.json();
            let arrayOfData=await json.results;
            
            setData(arrayOfData);
        }
        fromApi();
        setMark(0);
        setShow(false)
    },[reset]);

    //show result:
    let [showResult,setShow]=React.useState(false);
    
    function show(){
        
        
        setShow(true);
    }

    //mark:
    let [mark,setMark]=React.useState(0);
    function markIncrement(){
        setMark(prev=>prev+1);
    } 

    //make a list
    let [list,setList] =React.useState([]);
    React.useEffect(()=>{
        setList(data.map((obj,index)=><Qustion 
                {...obj}
                showResult={showResult}
                key={index}
                id={index}
                ifTrue={markIncrement}
                reset={reset}
                
                />));
    },[data,showResult,reset])
    
    
    
    return ( 
        <main className="quiz">
            <div className="container">
                <div className="questions">

                {list}
                
                </div>

                <div className="submit">
                    {showResult?<div><p>You scored {mark}/10 correct answers</p><button className="again" onClick={again}>Play again</button></div>:<button className="check" onClick={show}>Check answers</button>}
                </div>

            </div>
        </main>
    );
}

export default Quiz;
