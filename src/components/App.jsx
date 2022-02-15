import React from "react"
import Start from "./Start"
import Quiz from "./Quiz";
export default function App(){
    
    

    //hide start page when click start..
    let [hideStart,setHide]=React.useState(true);
    function toggleStartPage(){
        setHide(last=>!last);
    }

    
    
    return(
        <div>

        {!hideStart&&<Start hide={toggleStartPage}/>}
        {hideStart&&<Quiz again={toggleStartPage}/>}

        </div>
        
        );
}