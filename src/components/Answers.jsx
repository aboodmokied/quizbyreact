import React from "react";
function Answers(props) {
    // console.log("show from q")
    // props.isSelected
    // let [isChecked,setChecked]=React.useState(props.isChecked);
    let css={}
    
    if(props.isSelected&&!props.showResult)css={
        border:"0",
    backgroundColor:"#D6DBF5",
    }
    else if(props.showResult&&props.isCorrect)css={
        backgroundColor:"#94D7A2",
    }
    else if(props.showResult&&!props.isCorrect&&props.isSelected)css={
        backgroundColor:"#F8BCBC",
        color:"gray",
    }
    else if(props.showResult&&!props.isCorrect&&!props.isSelected)css={
        borderColor:"gray",
        color:"gray"
    }
    return ( 
        <span onClick={()=>{if(!props.showResult)props.toggle(props.id)}} style={css}><p>{props.value}</p></span>
        // <span onClick={()=>{props.change(props.id)}} style={css}><p>{props.value}</p></span>
    );
}

export default Answers;