import React from "react";
import './familyList.css';

function FamilyList2(){
    return(
        <React.Fragment>
            <div className="list__container2">
                <h3 className="list__titles">Familia paterna</h3>
                <ul>
                    <li className="list__grand">Rodolfo</li>
                        <ul>
                            <li className="list__parents">Kenneth René</li>
                                <ul>
                                    <li className="list__me">Juan Diego</li>
                                    <li className="list__brother">Kenneth David</li>
                                </ul>
                            <li className="list__uncle">Danna y Orlando</li>
                                <ul>
                                    <li className="list__cousin">Santiago</li>
                                </ul>
                            <li className="list__uncle">Tatiana</li>
                        </ul>
                    <li className="list__grand">Nora</li>
                </ul>
            </div>
            
        </React.Fragment>
    );
}

export { FamilyList2 };