import React from "react";
import './peopleSearch.css';

function FamiliarSearch({setMe, setMyFamiliar, finalMe, searchedFamiliars, setSex2}){

    const typing = (event) => {
        setMe(event.target.value);
    }

    function onGrands(){
        setMyFamiliar("Abuelos");
    }

    function onParents(){
        setMyFamiliar("Padres");
    }

    function onBrothers(){
        setMyFamiliar("Hermanos");
    }

    function onUncles(){
        setMyFamiliar("Tios");
    }

    function onCousins(){
        setMyFamiliar("Primos");
    }

    function onSobrinos(){
        setMyFamiliar("Sobrinos");
    }

    function onYernos(){
        setMyFamiliar("Yernos");
    }

    function onSuegros(){
        setMyFamiliar("Suegros");
    }

    function onCuñados(){
        setMyFamiliar("Cuñados");
    }

    function onHijos(){
        setMyFamiliar("Hijos");
    } 

    function onAnt(){
        setMyFamiliar("Ant");
    }

    function onPre(){
        setMyFamiliar("Pre");
    }

    const changeSexMale = () => {
        setSex2("male");
    }

    const changeSexFemale = () => {
        setSex2("female");
    }

    const changeSexEvery = () => {
        setSex2("every");
    }
    return(
        <React.Fragment>
            <div className="spcontainer">
                    <form className="byname">
                        <p>Nombre <input onChange={typing} className="inputName" type="text" name="Name"></input></p>    
                        <p>{finalMe?finalMe:"Escribe"}</p>

                        <p>Masculino <input onClick={changeSexMale} type="checkbox" id="topping" name="topping" value="Masculino"/></p>
                        <p>Femenino <input onClick={changeSexFemale}  type="checkbox" id="topping" name="topping" value="Femenino" /></p>
                        <p>Todos <input onClick={changeSexEvery} type="checkbox" id="topping" name="topping" value="Todos" /></p>
                    </form>
                    
                    <div className="byname" id="btngrup">
                        <button onClick={onGrands}>Abuelos/as</button>
                        <button onClick={onParents}>Padres/as</button>
                        <button onClick={onHijos}>Hijos</button>
                        <button onClick={onBrothers}>Hermanos/as</button>
                        <button onClick={onUncles}> Tíos/as</button>
                        <button onClick={onCousins}>Primos/as</button>
                        <button onClick={onSobrinos}>Sobrinos/as</button>
                        <button onClick={onYernos}>Yernos/nueras</button>
                        <button onClick={onSuegros}>Suegros/as</button>
                        <button onClick={onCuñados}>Cuñados/as</button>
                        <button onClick={onAnt}>Ante/as</button>
                        <button onClick={onPre}>Prede/as</button>
                    </div>
                    <div className="byname__result">
                        <p>{searchedFamiliars + ", "}</p>
                    </div>
            </div>
        </React.Fragment>
    );
}

export { FamiliarSearch };