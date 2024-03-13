import React from "react";
const Actions =(props)=> {
  const bigButton = props.hadOptions ? 'big-button': 'big-button-disabled' ;
     return (
      <div>
      <button onClick={props.handlePick} disabled={!props.hadOptions} className={bigButton}>
        What do I do?
      </button>
    </div>
     )  
      };
 export default Actions