import React from "react";
import './peopleSearch.css';

function RelationshipSearch({setFamiliar1, setFamiliar2, f1, f2, theRelationship}){

    function f1change(e){
        setFamiliar1(e.target.value); 
    }

    function f2change(e){
        setFamiliar2(e.target.value); 
    }

    return(
        <React.Fragment>
            <div className="spcontainer">
                    <form className="byname">
                        <p>Familar 1 <input onChange={f1change} className="inputName" type="text" name="Name"></input></p>    
                        <p>Familar 2 <input onChange={f2change} className="inputName" type="text" name="Name"></input></p>    
                    </form>
                    <div className="byname">
                        <p>{f1  + " es para dana " + f2}</p>
                    </div>
                    <div className="byname__result">
                        <p>{theRelationship}</p>
                    </div>
            </div>
        </React.Fragment>
    );
}

export { RelationshipSearch };