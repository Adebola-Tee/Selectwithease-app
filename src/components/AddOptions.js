import React from "react";

 const AddOptions =  (props)=> (
  
        <div>
          <form onSubmit={props.AddOption} className="addoption">
            <input id="anOption" type="text" name="option" className="addoption__input"/>
            <button className="button">Add Options</button>
          </form>
        </div>
   
 )

 export default AddOptions;