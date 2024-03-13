import React from "react";

  const Options = (props)=>(
    <div>
    <div className="widget-header">
    <h3 className="widget-header__title">Options</h3>
    <button onClick={props.removeAll} className="button button-link">Remove All</button>
    </div>
      
      {props.options.map((arr, index) => {
        return (
          <div key={index} className="option">
        <p className="option__text">{index + 1}. {arr.toUpperCase()} </p>  
            <button onClick={() => props.removeOneOption(index)} className="button button-link">Remove</button>
          </div>
        );
      })}
      {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}

    </div>
  );

  export default Options