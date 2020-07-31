import React from "react";

function TextView({value,change}) {
    return(
        <div className="item" onClick={change} >
        {value}
        </div>
    )
}
export default TextView