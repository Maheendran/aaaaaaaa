import React, { useState } from "react";
const style= "header"
const Counter=()=>{
    const[count,SetCount]=useState(0)
    
    return(
  <div>
    
  <h1 style={count%2 ? {color:"red"}:{color:"green"}}> Counter App:{count}</h1>
    <button onClick={()=> SetCount( count+1 )}>Increment</button>
    <button onClick={()=>{if(count>0){SetCount( count-1 )}}}>Decrement</button>
    <button onClick={()=>{SetCount(count*2)}}>double</button>
</div> 



    );
}
export default Counter;