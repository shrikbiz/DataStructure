
//----------Factory using class------//


class Dog {
    public name = 'unknown name';
    public type = 'Dog'
    constructor(name: string) {
        this.name = name
    }
}

class Cat {
    public name = 'unknown name';
    public type = 'Cat';
    constructor(name: string) {
        this.name = name;
    }
}

class AnimalHouse {
    private animalList: Array<Dog | Cat> = []
    constructor(name?: string, type?: number) {
        if (name && type) this.addAnimal(name, type)
    }

    public addAnimal = (name: string, type: number) => {
        let animal: Dog | Cat;
        switch (type) {
            case 1:
                animal = new Dog(name);
                break;
            case 2:
                animal = new Cat(name);
                break;
            default:
                throw new Error('Invalid animal type');
        }
        this.animalList.push(animal);
    }
    public getAllAnimal() {
        return this.animalList
    }
}


const newAnimalHouse = new AnimalHouse();

newAnimalHouse.addAnimal('Sheldon', 1)
newAnimalHouse.addAnimal('Jasmin', 2)
newAnimalHouse.addAnimal('Kelly', 1)
newAnimalHouse.addAnimal('Don', 2)
newAnimalHouse.addAnimal('Dean', 1)
newAnimalHouse.addAnimal('Shawn', 2)
newAnimalHouse.addAnimal('Mitten', 1)

function animalSays() {
    console.log(`I am ${this.name}, and I am a ${this.type}.`);
}
console.log(newAnimalHouse.getAllAnimal())
newAnimalHouse.getAllAnimal().forEach((animal) => animalSays.call(animal))
