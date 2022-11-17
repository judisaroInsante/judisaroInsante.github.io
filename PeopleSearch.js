import React from "react";
import './peopleSearch.css';

function PeopleSearch({setPerson, searchedNames, setSex, setNumberChildren, setNumberBrothers, setNumberUncles, setNumberCousins}){

    const nameChanged = (event) => {
        setPerson(event.target.value);
    }

    const changeSexMale = () => {
        setSex("male");
    }

    const changeSexFemale = () => {
        setSex("female");
    }

    const changeSexEvery = () => {
        setSex("every");
    }

    const onChildren = (event) => {
        setNumberChildren(Number(event.target.value));
    }

    const onBrothers = (event) => {
        setNumberBrothers(Number(event.target.value));
        
    }

    const onUncles = (event) => {
        setNumberUncles(Number(event.target.value));
        
    }

    const onCousins = (event) => {
        setNumberCousins(Number(event.target.value));
    }

    return(
        <React.Fragment>
            <div className="spcontainer">
                    <form className="byname">
                        <p>Nombre <input onChange={nameChanged} className="inputName" type="name" name="Name"></input></p>    

                        <p>Masculino <input onClick={changeSexMale} type="checkbox" id="topping" name="topping" value="Masculino"/></p>

                        <p>Femenino <input onClick={changeSexFemale} type="checkbox" id="topping" name="topping" value="Femenino" /></p>

                        <p>Todos <input onClick={changeSexEvery} type="checkbox" id="topping" name="topping" value="Otros" /></p>

                         <p>Hijos <input onChange={onChildren} className="inputChildren" type="number" name="Hijos" min="0" max="9"></input></p> 

                         <p>Hermanos <input onChange={onBrothers} className="inputChildren" type="number" name="hermanos" min="0" max="9"></input></p> 

                         <p>Tíos <input onChange={onUncles} className="tios" type="number" name="Tios" min="0" max="9"></input></p>

                         <p>Primos <input onChange={onCousins} className="primos" type="number" name="Primos" min="0" max="9"></input></p>     
                    </form>
                    <div className="byname__result">
                        <p>{ searchedNames.map((a)=>{return a + ", "}) }</p>
                    </div>
            </div>
        </React.Fragment>
    );
}

export { PeopleSearch };