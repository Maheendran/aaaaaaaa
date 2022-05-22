import React, { useState } from "react";
const style= "header"
const Counter=()=>{
    const[count,SetCount]=useState(0)
    
    return(
  <div>
    <h1>Counter App:{count}</h1>
    <button onClick={()=> SetCount( count+1 )}>Increment</button>
    <button onClick={()=>{if(count>0){SetCount( count-1 )}}}>Decrement</button>
    <button className="header" onClick={()=> {if((count*2)===4){
   style
    }}}>Double</button>
</div> 



    );
}
export default Counter;