import React from "react";
import './familyList.css';

function FamilyList(){
    return(
        <React.Fragment>
            <div className="list__container">
                <h3 className="list__titles">Familia materna</h3>
                
                <ul>
                    <li className="list__grand">Roque</li>
                        <ul>
                            <li className="list__uncle">Elizabeth y Darío</li>
                                <ul>
                                    <li className="list__cousin">Daniel</li>
                                    <li className="list__cousin">Julián</li>
                                </ul>
                            <li className="list__uncle">Esperanza y Martín</li>
                                <ul>
                                    <li className="list__cousin">Cristian</li>
                                    <li className="list__cousin">Juan Sebastián</li>
                                    <li className="list__cousin">Nicolás</li>
                                </ul>
                            <li className="list__uncle">Leonor JR y Giovanni</li>
                                <ul>
                                    <li className="list__cousin">Fabián</li>
                                    <li className="list__cousin">Mariana </li>
                                </ul>
                            <li className="list__uncle">Julio y Ángela</li>
                            <li className="list__parents">María y Kenneth</li>
                                <ul>
                                    <li className="list__me">Juan Diego</li>
                                    <li className="list__brother">Kenneth David</li>
                                </ul>
                        </ul>
                    <li className="list__grand">Leonor</li>
                </ul>
        
            </div>
            
        </React.Fragment>
    );
}

export { FamilyList };