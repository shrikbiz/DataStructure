console.log('Hello world - shrikbiz');

class Animal{
    constructor(name, animal){
        this.name = name;
        this.animal = animal
        this.noticesAnimal = []
        this.isSleeping = false;
    }        
    speak(){
        console.log('makes animal sound')
    }
    seeAnimals(listOfAnimal){
        const allAnimalsExceptItself = listOfAnimal.filter(animal => animal.name !== this.name);
        this.noticesAnimal.push(...allAnimalsExceptItself)   
    }
}

class Cat extends Animal{
    constructor(name){
        super(name, 'cat');
    }
    speak(){
        if(!this.isSleeping){
           console.log(`${this.name}: maew`)
        }
    }
    sleep(){
        this.isSleeping = true;
    }
    awake(){
        this.isSleeping = false;;
    }
};

class Dog extends Animal{
  constructor(name,){
        super(name, 'dog');
    }
    speak(){
        const allCats = this.noticesAnimal.filter(animal => animal.animal === 'cat');
        console.log(`${this.name}: bark`);
        allCats.forEach(cat => {
            cat.speak()
        });
    }
};


let kitten = new Cat('Ktten');
let carlie = new Cat('Carlie');
let carles = new Cat('Carles');
let misk = new Cat('Misk');
let sheldon = new Dog('Sheldon');
// console.log(kitten.name)
// console.log(sheldon.name)

// kitten.speak();
// sheldon.speak();

const allAnimals = [kitten, sheldon,carlie, misk]

function room(dogName){
    sheldon.seeAnimals(allAnimals);
    sheldon.speak();
    console.log('----')
    kitten.sleep();
    console.log('----')
    sheldon.speak();
};

room('Sheldon');

// sheldon.speak();