import React from "react";

function TextViewRecord({value,change}) {
    return(
        <div className="item" onClick={change} >
        {value}
        </div>
    )
}
export default TextViewRecord