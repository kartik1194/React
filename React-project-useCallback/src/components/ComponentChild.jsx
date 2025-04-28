import React from "react";

const ComponentChild = React.memo(
  (props) => {
    
    console.log("child component loaded again");
    return (
      <div>
        <button>{props.btnName}</button>
      </div>
    );
  }



);

export default ComponentChild;
