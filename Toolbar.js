import React from "react";
import './toolbar.css';

function Toolbar({ title, text }){
    return(
        <React.Fragment>
            <div className="header">
                <p className="header__title"> {title} </p>
                <p className="header__text"> {text} </p>
            </div>
        </React.Fragment>
    );
}

export { Toolbar };