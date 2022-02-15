import React from "react";
import Answers from "./Answers";


function Qustion(props) {
    
    // string into objects with properties..
    let [objects,setObjects]=React.useState(()=>[]);

    function stringToObject(data){
        const objs=data.map((value,index)=>({
            id:index,
            isCorrect:value===correct,
            value:value,
            // showResult:props.showResult,
            isSelected:false,
        }))
        
        return objs;

    }
    
    const correct=props.correct_answer;
    React.useEffect(()=>{

        let incorrect=props.incorrect_answers

        let Values=incorrect;

        // add the correct answer with random index:
        let random=Math.floor(Math.random()*(Values.length+1));
        
        Values.splice(random,0,correct);

        setObjects(stringToObject(Values));
    },[props.correct_answer])// eslint-disable-line react-hooks/exhaustive-deps
    


    //make answers list:
    let [ansList,setAns]=React.useState([]);

    React.useEffect(()=>{
        
        makeComponents();
    },[props.showResult,objects,props.reset])// eslint-disable-line react-hooks/exhaustive-deps
    
    function makeComponents(){
        setAns(objects.map((obj,index)=>{
            return <Answers key={index} id={obj.id} isCorrect={obj.isCorrect} value={obj.value}  showResult={props.showResult} isSelected={obj.isSelected} toggle={toggle}/>
        }))
    }
    
    //isSelected toggleing..
    function toggle(objId){
        setObjects(prev=>prev.map(obj=>{
            
            return (obj.id===objId) ? {...obj,isSelected:!obj.isSelected} : {...obj,isSelected:false};
        }));
    }
    
    //count the mark when click check:
    React.useEffect(()=>{
        if(props.showResult){
            objects.forEach(obj=>{
                if(obj.isCorrect&&obj.isSelected){
                    props.ifTrue();
                }
            })
        }
    },[props.showResult]);// eslint-disable-line react-hooks/exhaustive-deps
    return ( 
        <div className="q">
                    <h3>{props.question}</h3>
                    <div className="ans">
                    {ansList}
                    </div>
                </div>
    );
}

export default Qustion;