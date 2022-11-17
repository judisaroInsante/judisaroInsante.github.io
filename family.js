/*class Person {
    constructor (
        {name, photo, father, mother, children, couple}
        ){
        this.father = father; 
        this.mother = mother; 
        this.children = children; 
        this.couple = couple; 
        this.name = name;
        this.photo = photo;
    }

    //Getters

    get getName() {
        return this.name;
    }

    get getPhoto() {
        return this.photo;
    }

    get getFather() {
        return this.father;
    }

    get getMother() {
        return this.mother;
    }

    get getChildren()  {
        return this.children;
    }

    get getCouple() {
        return this.couple;
    }
    
    // Relaciones indirectas

    get getBrothers() {
        let brother;
        
        this.father.children.map((child)=>{
            if(child !== this){
                brother.push(child);
            }
        });

        this.father.children.map((child)=>{
            if(child !== this){
                brother.push(child);
            }
        });
        
        return brother; 
    }

}


let familyRodriguez = [
    new Person("Leonor", ""), 
    new Person("Roque", ""), 
];

function addFamilyMember(family, name, photo, father, mother, children, couple){
    
    family.push(new Person(
        name,
        photo, 
        //father
        family.find((person) => {
            person.getName() === father;
        }),
        //mother
        family.find((person) => {
            person.getName() === mother;
        }),
        //brothers and sisters
        family.filter((person) => {
            children.map((child)=>{
                child === person.getName(); 
            });
        }),
        //couple 
        family.find((person) => {
            person.getName() === couple;
        }),
        ));
}

addFamilyMember(familyRodriguez, "María", "./", "Roque", "Leonor", [], "kennet");

console.log(familyRodriguez);

let familySanchez = [
    new Person("Nora", ""), 
    new Person("Desconocido", ""), 
];

export { Person };*/