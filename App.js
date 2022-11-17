import './App.css';
import React from 'react';
import { Toolbar } from './components/toolbar/Toolbar.js';
import { FamilyList } from './components/familyList/FamilyList.js';
import { FamilyList2 } from './components/familyList/FamilyList2.js';
import { PeopleSearch } from './components/peopleSearch/PeopleSearch.js';
import { FamiliarSearch } from './components/peopleSearch/FamiliarSearch';
import { RelationshipSearch } from './components/peopleSearch/RelationshipSearch';


const names = {
  ROQUE: "Roque",
  LEONOR: "Leonor",
  
  MARIA: "María",
  KENNETH: "Kenneth René",
  KENNETHDAVID: "Kenneth David",
  JUANDIEGO: "Juan Diego",

  LEONORJR: "LeonorJR",
  GIOVANNI: "Giovanni",
  FABIAN: "Fabián",
  MARIANA: "Mariana",

  ELIZABETH: "Elizabeth",
  DARIO: "Darío",
  JULIAN: "Julián",
  DANIEL: "Daniel",

  ESPERANZA: "Esperanza",
  MARTIN: "Martín",
  CRISTIAN: "Cristian",
  JENNY: "Jenny",
  SALOME: "Salomé",
  JUANSEBASTIAN: "Juan Sebastián",
  NICOLAS: "Nicolás",

  JULIO: "Julio",
  ANGELA: "Ángela",

  NORA: "Nora",
  RODOLFO: "Rodolfo",

  DANA: "Dana",
  ORLANDO: "Orlando",
  SANTIAGO: "Santiago",
  TATIANA: "Tatiana",

  NN: "Anónimo",
}

const sexs = {
  SEXMALE: "Male",
  SEXFEMALE: "Female"
}

let myFamily = [];
myFamily.push({name: names.LEONOR, father:names.NN, mother: names.NN, couple: names.ROQUE, sex:sexs.SEXFEMALE});
myFamily.push({name: names.ROQUE, father:names.NN, mother: names.NN, couple: names.LEONOR, sex:sexs.SEXMALE});

myFamily.push({name: names.ELIZABETH, father:names.ROQUE, mother: names.LEONOR, couple: names.DARIO, sex:sexs.SEXFEMALE});
myFamily.push({name: names.DARIO, father:names.NN, mother: names.NN, couple: names.ELIZABETH, sex:sexs.SEXMALE});
myFamily.push({name: names.DANIEL, father:names.DARIO, mother: names.ELIZABETH, couple: names.NN, sex:sexs.SEXMALE});
myFamily.push({name: names.JULIAN, father:names.DARIO, mother: names.ELIZABETH, couple: names.NN, sex:sexs.SEXMALE});

myFamily.push({name: names.ESPERANZA, father:names.ROQUE, mother: names.LEONOR, couple: names.MARTIN, sex:sexs.SEXFEMALE});
myFamily.push({name: names.MARTIN, father:names.NN, mother: names.NN, couple: names.ESPERANZA, sex:sexs.SEXMALE});
myFamily.push({name: names.CRISTIAN, father:names.MARTIN, mother: names.ESPERANZA, couple: names.JENNY, sex:sexs.SEXMALE});
myFamily.push({name: names.JENNY, father:names.NN, mother: names.NN, couple: names.CRISTIAN, sex:sexs.SEXFEMALE});
myFamily.push({name: names.SALOME, father:names.CRISTIAN, mother: names.JENNY, couple: names.NN, sex:sexs.SEXFEMALE});
myFamily.push({name: names.JUANSEBASTIAN, father:names.MARTIN, mother: names.ESPERANZA, couple: names.NN, sex:sexs.SEXMALE});
myFamily.push({name: names.NICOLAS, father:names.MARTIN, mother: names.ESPERANZA, couple: names.NN, sex:sexs.SEXMALE});

myFamily.push({name: names.LEONORJR, father:names.ROQUE, mother: names.LEONOR, couple: names.GIOVANNI, sex:sexs.SEXFEMALE});
myFamily.push({name: names.GIOVANNI, father:names.NN, mother: names.NN, couple: names.LEONORJR, sex:sexs.SEXMALE});
myFamily.push({name: names.FABIAN, father:names.GIOVANNI, mother: names.LEONORJR, couple: names.NN, sex:sexs.SEXMALE});
myFamily.push({name: names.MARIANA, father:names.GIOVANNI, mother: names.LEONORJR, couple: names.NN, sex:sexs.SEXFEMALE});

myFamily.push({name: names.JULIO, father:names.ROQUE, mother: names.LEONOR, couple: names.ANGELA, sex:sexs.SEXMALE});
myFamily.push({name: names.ANGELA, father:names.NN, mother: names.NN, couple: names.JULIO, sex:sexs.SEXFEMALE});

myFamily.push({name: names.MARIA, father:names.ROQUE, mother: names.LEONOR, couple: names.KENNETH, sex:sexs.SEXFEMALE});
myFamily.push({name: names.KENNETH, father:names.RODOLFO, mother: names.NORA, couple: names.MARIA, sex:sexs.SEXMALE});
myFamily.push({name: names.JUANDIEGO, father:names.KENNETH, mother: names.MARIA, couple: names.NN, sex:sexs.SEXMALE});
myFamily.push({name: names.KENNETHDAVID, father:names.KENNETH, mother: names.MARIA, couple: names.NN, sex:sexs.SEXMALE});

myFamily.push({name: names.NORA, father:names.NN, mother: names.NN, couple: names.RODOLFO, sex:sexs.SEXFEMALE});
myFamily.push({name: names.RODOLFO, father:names.NN, mother: names.NN, couple: names.NORA, sex:sexs.SEXMALE});

myFamily.push({name: names.DANA, father:names.RODOLFO, mother: names.NORA, couple: names.ORLANDO, sex:sexs.SEXFEMALE});
myFamily.push({name: names.ORLANDO, father:names.NN, mother: names.NN, couple: names.DANA, sex:sexs.SEXMALE});
myFamily.push({name: names.SANTIAGO, father:names.ORLANDO, mother: names.DANA, couple: names.NN, sex:sexs.SEXMALE});

myFamily.push({name: names.TATIANA, father:names.RODOLFO, mother: names.NORA, couple: names.NN, sex:sexs.SEXFEMALE});

myFamily.push({name: names.NN, father:names.NN, mother: names.NN, couple: names.NN, sex:sexs.SEXFEMALE});

function App() {

  let searchedPeople = myFamily; 
  let totalNames = myFamily.map((member)=>member.name);

  // PERSON ME DICE LO QUE EL USUARIO ESCRIBIÓ 
  const [person, setPerson] = React.useState("");
  const [sex, setSex] = React.useState("every");
  const [numberChildren, setNumberChildren] = React.useState();
  const [numberBrothers, setNumberBrothers] = React.useState();
  const [numberUncles, setNumberUncles] = React.useState();
  const [numberCousins, setNumberCousins] = React.useState();

  const [relationship, setRelationship] = React.useState(myFamily.map((member)=>member.name));

  const [member, setMember] = React.useState(myFamily.map((member)=>member.name));

  let searchedNames = [];

  if(person != ""){
    searchedPeople = searchedPeople.filter((member)=>{
      const lowerMember = member.name.toLowerCase();
      
      const lowerPerson = person.toLowerCase();
      
      return lowerMember.includes(lowerPerson)
    });
  }else{
    searchedPeople = []; 
  }

  switch(sex){
    case "male": 
      searchedPeople = searchedPeople.filter((male)=>{
          return male.sex === sexs.SEXMALE;
      });
      break;
    case "female": 
      searchedPeople = searchedPeople.filter((male)=>{
          return male.sex === sexs.SEXFEMALE;
      });
    break;
    case "every":
      searchedPeople = searchedPeople.filter((male)=>{
        return male;
    });
      break; 
  }

  const [me, setMe] = React.useState("");
  let finalMe = myFamily.find((a)=>a.name == names.NN);
  

  const [myFamiliar, setMyFamiliar] = React.useState();
  let searchedFamiliars = [];

  if(me != ""){
    finalMe = myFamily.find((member)=>{
      const lowerMember = member.name.toLowerCase();
      const lowerPerson = me.toLowerCase();
      return lowerMember.includes(lowerPerson);
    });

    if(finalMe == undefined){
      finalMe = myFamily.find((a)=>a.name == names.NN); 
    }

  }else{  
    finalMe = myFamily.find((a)=>a.name == names.NN); 
  }

  if(numberChildren >= 0){
    searchedPeople = searchedPeople.filter((a)=>{
      return getHijos(a).length === numberChildren;
    });
  }

  if(numberChildren == ""){
    searchedPeople = searchedPeople.filter((a)=>{return a}); 
  }

  if(numberBrothers >= 0){
    searchedPeople = searchedPeople.filter((a)=>{
      return getHermanos(a).length === numberBrothers;
    });
  }


  if(numberUncles >= 0){
    searchedPeople = searchedPeople.filter((a)=>{
      return getTios(a).length === numberUncles;
    });
  }


  if(numberCousins >= 0){
    searchedPeople = searchedPeople.filter((a)=>{
      return getPrimos(a).length === numberCousins;
    });
  }

  //2

  const [familiar1, setFamiliar1] = React.useState("");
  const [familiar2, setFamiliar2] = React.useState("");

  let f1;
  let f2; 

  let theRelationship = ""; 

  if(familiar1 != ""){
    f1 = myFamily.find((member)=>{
      const lowerMember = member.name.toLowerCase();
      const lowerF1 = familiar1.toLowerCase();
      return lowerMember.includes(lowerF1);
    });
  }

  if(f1 === undefined){
    f1 = myFamily.find((f)=> {return f.name === names.NN});
  }

  if(familiar2 != ""){
    f2 = myFamily.find((member)=>{
      const lowerMember = member.name.toLowerCase();
      const lowerF2 = familiar2.toLowerCase();
      
      return lowerMember.includes(lowerF2);
    });
  }

  if(f2 === undefined){
    f2 = myFamily.find((f)=> {return f.name === names.NN});
  }

  let f2Abuelos = getAbuelos(f2);
  let f2Padres = getPadres(f2);
  let f2Hermanos = getHermanos(f2);
  let f2Primos = getPrimos(f2); 
  let f2Tios = getTios(f2);
  let f2Sobrinos = getSobrinos(f2);
  let f2Yernos = getYerno(f2);
  let f2Suegros = getSuegros(f2);
  let f2Cuñados = getCuñado(f2); 
  let f2Hijo = getHijos(f2); 

  if(f2Abuelos.indexOf(f1) != -1 && f1 == f2Abuelos[0]){
    theRelationship = "Abuelo";
  }

  if(f2Abuelos.indexOf(f1) != -1 && f1 == f2Abuelos[1]){
    theRelationship = "Abuela";
  }

  if(f2Padres.indexOf(f1) != -1 && f1 == f2Padres[0]){
    theRelationship = "Padre";
  }

  if(f2Padres.indexOf(f1) != -1 && f1 == f2Padres[1]){
    theRelationship = "Madre";
  }

  if(f2Hermanos.indexOf(f1) != -1 && f1.sex == sexs.SEXMALE){
    theRelationship = "Hermano";
  }

  if(f2Hermanos.indexOf(f1) != -1 && f1.sex != sexs.SEXMALE){
    theRelationship = "Hermana";
  }

  if(f2Primos.indexOf(f1) != -1 && f1.sex == sexs.SEXMALE){
    theRelationship = "Primo";
  }
  
  if(f2Primos.indexOf(f1) != -1 && f1.sex == sexs.SEXFEMALE){
    theRelationship = "Prima";
  }

  if(f2Tios.indexOf(f1) != -1 && f1.sex == sexs.SEXFEMALE){
    theRelationship = "Tía";
  }

  if(f2Tios.indexOf(f1) != -1 && f1.sex == sexs.SEXMALE){
    theRelationship = "Tío";
  }

  if(f2Sobrinos.indexOf(f1) != -1 && f1.sex == sexs.SEXFEMALE){
    theRelationship = "Sobrina";
  }

  if(f2Sobrinos.indexOf(f1) != -1 && f1.sex == sexs.SEXMALE){
    theRelationship = "Sobrino";
  }

  if(f2Yernos.indexOf(f1) != -1 && f1.sex == sexs.SEXMALE){
    theRelationship = "Yerno";
  }

  if(f2Yernos.indexOf(f1) != -1 && f1.sex == sexs.SEXFEMALE){
    theRelationship = "Nuera";
  }

  if(f2Suegros.indexOf(f1) != -1 && f1.sex == sexs.SEXMALE){
    theRelationship = "Suegro";
  }

  if(f2Suegros.indexOf(f1) != -1 && f1.sex == sexs.SEXFEMALE){
    theRelationship = "Suegra";
  }

  if(f2Cuñados.indexOf(f1) != -1 && f1.sex == sexs.SEXMALE){
    theRelationship = "Cuñado";
  }

  if(f2Cuñados.indexOf(f1) != -1 && f1.sex == sexs.SEXFEMALE){
    theRelationship = "Cuñada";
  }

  if(f2Hijo.indexOf(f1) != -1 && f1.sex == sexs.SEXFEMALE){
    theRelationship = "Hija";
  }
  
  if(f2Hijo.indexOf(f1) != -1 && f1.sex == sexs.SEXMALE){
    theRelationship = "Hijo";
  }



  const [sex2, setSex2] = React.useState();

  switch(myFamiliar){
    case "Abuelos":
      searchedFamiliars = getAbuelos(finalMe).map((a)=>{return a}); 
      break;
    case "Padres":
      searchedFamiliars = getPadres(finalMe).map((a)=>{return a}); 
      break;
    case "Hermanos":
      searchedFamiliars = getHermanos(finalMe).map((a)=>{return a}); 
      break;  
    case "Tios":
      searchedFamiliars = getTios(finalMe).map((a)=>{return a}); 
    break;
    case "Primos":
      searchedFamiliars = getPrimos(finalMe).map((a)=>{return a}); 
      break;
    case "Sobrinos":
      searchedFamiliars = getSobrinos(finalMe).map((a)=>{return a}); 
      break;
    case "Yernos":
      searchedFamiliars = getYerno(finalMe).map((a)=>{return a}); 
      break;
    case "Suegros":
      searchedFamiliars = getSuegros(finalMe).map((a)=>{return a}); 
      break;
    case "Cuñados":
      searchedFamiliars = getCuñado(finalMe).map((a)=>{return a}); 
      break;
    case "Hijos":
      searchedFamiliars = getHijos(finalMe).map((a)=>{return a}); 
    break;
    case "Ant":
      searchedFamiliars = getAnt(finalMe).map((a)=>{return a}); 
    break;
    case "Pre":
      searchedFamiliars = getPre(finalMe).map((a)=>{return a}); 
    break;
  }

  switch(sex2){
    case "every":
      searchedFamiliars = searchedFamiliars.filter((male)=>{
        return male}); 
      break;
    case "male":
      searchedFamiliars = searchedFamiliars.filter((a)=>{return a.sex == sexs.SEXMALE});
      break;
    case "female":
      searchedFamiliars = searchedFamiliars.filter((a)=>{return a.sex == sexs.SEXFEMALE});
      break; 
  }

  function getHijos(person){
    if(person.name != names.NN){
      return myFamily.filter((a)=>{return a.father === person.name || a.mother === person.name});  
    }else{
      return [];
    }
  }

  function getAbuelos(person){
    let parents = getPadres(person); 
    let abuelos = [];

    const papa = parents[0];
    const mama = parents[1]; 

    if(papa != undefined && mama != undefined){
      abuelos.push(myFamily.find((a)=>{return a.name === papa.father}) );
      abuelos.push(myFamily.find((a)=>{return a.name === papa.mother}) );
      abuelos.push(myFamily.find((a)=>{return a.name === mama.father}) );
      abuelos.push(myFamily.find((a)=>{return a.name === mama.mother}) );
  
      return abuelos.filter((a)=>{return a.name!=names.NN}); 
    }
    return []; 
  }

  function getPadres(person){
    let parents = []; 

    parents.push(myFamily.find((a)=>{return a.name === person.father}));
    parents.push(myFamily.find((a)=>{return a.name === person.mother}));

    if(parents[0] != undefined && parents[1] != undefined){
      return (parents.filter((a)=>{return a.name != names.NN})); 
    }else{
      return []; 
    }
    
  }

  function getHermanos(person){
    let brothers = [];
    let parents = getPadres(person); 
    let myBrothers = []; 

    if(parents[0] != undefined || parents[1] != undefined){
      myBrothers = myFamily.filter((a)=>{
        return a.father === parents[0].name  && a != person && a.father !== names.NN
        || a.mother === parents[1].name && a != person && a.father !== names.NN;
      });

      myBrothers.map((a)=>{brothers.push(a)});
    
      return brothers; 
    }else {
      return []; 
    } 
  }

  function getTios(person){
    let tios = [];
    const parents = getPadres(person); 

    if(parents[0] != undefined && parents[1] != undefined){
      let tiosPaternos = getHermanos(parents[0]); 

      let tiosMaternos = getHermanos(parents[1]);

      tiosPaternos.map((a)=>{tios.push(a)});
      tiosMaternos.map((a)=>{tios.push(a)});

      return tios; 
    }else{
      return []; 
    }
  }

  function getPrimos(person){
    let tios = getTios(person);
    let primos = [];

    tios.map((a)=>{
      let misPrimos = getHijos(a);
      misPrimos.map((p)=>{primos.push(p)});
    });

    return primos; 
  }

  function getSobrinos(person){
    let hermanos = getHermanos(person);
    let sobrinos = [];

    hermanos.map((a)=>{
      let hijosHermano = getHijos(a);
      hijosHermano.map((s)=>{sobrinos.push(s)});
    });

    return sobrinos; 
  }

  function getSuegros(person){
    let couple = myFamily.find((c)=>{return person.couple === c.name;});
    let suegris = getPadres(couple);

    if(suegris[0] != undefined && suegris[1] != undefined ){
      return suegris;
    }else{
      return []; 
    }
  }

  function getYerno(person){
    let hijis = getHijos(person);
    let yernis = [];

    hijis.map((h)=>{yernis.push(
      myFamily.find((c)=>{return c.name === h.couple})
    )});

    return yernis.filter((a)=>{return a.name !== names.NN;});
    
  }

  function getCuñado(person){
    let cuñis = [];
    let couple = myFamily.find((c)=>{return c.name == person.couple});

    cuñis = getHermanos(couple); 

    return cuñis; 

  }

  function getAnt(person){
    let padres = getPadres(person); 
    let abuelos = getAbuelos(person); 
    let bisabuelos = []; 
    abuelos.map((a)=> {
      let papitosBisa = getPadres(a);
      bisabuelos.push(papitosBisa[0]); 
      bisabuelos.push(papitosBisa[1]);}); 

    let antecesores = [];
    padres.map((p)=>{antecesores.push(p)});
    abuelos.map((p)=>{antecesores.push(p)});
    bisabuelos.map((p)=>{antecesores.push(p)});

    console.log(antecesores);

    return antecesores.filter((a)=>{return a !== undefined}); 
  }

  function getPre(person){
    let predecesores = [];
    let hijos = getHijos(person);
    let nietos = [];
    let bisNietos = [];

    hijos.map((h) => {
      let nietecitos = getHijos(h);
      nietecitos.map((n)=>{nietos.push(n)});
    });

    nietos.map((h) => {
      let bisnietecitos = getHijos(h);
      bisnietecitos.map((n)=>{bisNietos.push(n)});
    });

    console.log(hijos);
    console.log(nietos);
    console.log(bisNietos);

    hijos.map((h)=>{predecesores.push(h)});
    nietos.map((h)=>{predecesores.push(h)});
    bisNietos.map((h)=>{predecesores.push(h)});

    console.log(predecesores);
    return predecesores.filter((a) => {return a !== undefined});
    
  }

  searchedNames = searchedPeople.map((a)=> {return a.name});
  if(searchedNames.length == 0){
    searchedNames.push("Resultados");
  }

  let searchedMembers = searchedFamiliars.map((a) => {return a.name; });
  
  if(theRelationship == ""){
    theRelationship = "Resultados,";
  }

  if(searchedMembers.length == 0){
    searchedMembers.push("Resultados, ");
  }
  
  return (
    <React.Fragment>
      <Toolbar title={"Prolog"} text={"Árbol genealógico"}></Toolbar>
      <div className='mainContainer'>
        <FamilyList></FamilyList>
        <div className='mainContainer__search'>
          <p className='parrafo'>Buscador de Personas</p>
          <PeopleSearch person={person} setPerson={setPerson}  searchedNames={searchedNames} sex={sex} setSex={setSex} setNumberChildren={setNumberChildren}
          setNumberBrothers={setNumberBrothers} setNumberCousins={setNumberCousins} setNumberUncles={setNumberUncles}></PeopleSearch>

          <p className='parrafo'>Buscador de Relaciones</p>
          <RelationshipSearch familyNames={relationship} setFamiliar1 = {setFamiliar1} setFamiliar2={setFamiliar2} theRelationship={theRelationship} f1={f1.name} f2={f2.name}></RelationshipSearch>  
    
          <p className='parrafo'>Buscador de Familiares</p>
          <FamiliarSearch familyNames={member} setMe={setMe} setMyFamiliar={setMyFamiliar} finalMe={finalMe.name} searchedFamiliars={searchedMembers}
          setSex2={setSex2}></FamiliarSearch>
        </div>
        <FamilyList2></FamilyList2>
      </div>

      <div className='footer'>
      <p>Universidad Libre, Bogotá</p>
      <p>Lógica Matemática</p>
        <p>Juan Diego Sánchez Rodríguez</p>
      </div>
    </React.Fragment>
  );
}

export default App;
