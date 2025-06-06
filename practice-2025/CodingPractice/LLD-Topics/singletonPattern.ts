// ### Private
//      Private methods and properties are only availably locally. Can be called as `this.value`

// ### Public
//      Public methods and properties are avaialble publically. Can be called as `new Class().value`

// ### Private static
//      Private methods are private to the class, but if they are static, then we can not directly
//      use the property or method like `this.value`, instead we have to call the class, chain
//      it with its instance and then call the class that we want - for eg - `Class.instance.value`.

// ### Public static
//      Public methods are available publically, but if theya re static, then we can not directly
//      use the property of method like `this.value`, instead we have to call the class, chain
//      it with its instance and then call the class that we want - for eg - `Class.instance.value`.
//      We can access property or method outside of the class using same technique: `Class.instance.value`
//      

// ### private constructor(){}
//      When constructor is defined as private, the class then cannot be initiated with `new` keyword 
//      outside of the function. This is normally used in singleton pattern. 
//      Normal practice is to have a initiation method within class (called as init OR getInstance)
//      that initiates the class as Class.instance = new Class(<val>) | val => is passed to 
//      `private constructor(val){ // do somethign with val}`.

class SingletonCounter {
    private static instance: SingletonCounter
    private thisNumber: number;

    private constructor(number: number) {
        this.thisNumber = number
    }

    public static init() {
        if (!SingletonCounter.instance) {
            SingletonCounter.instance = new SingletonCounter(0);
        }
        return SingletonCounter.instance;
    }

    public increment() {
        this.operation('increment')
    }

    public descrement() {
        this.operation('descrement')
    }

    public getNumber() {
        return this.thisNumber;
    }


    private operation(operation: string) {
        switch (operation) {
            case 'increment': this.thisNumber++;
                break;
            case 'descrement': this.thisNumber--;
                break;
            default:
                console.log(`${operation} operation is not supported yet.`)
        }
    }
}

class Dummy {
    constructor() {

    }

    public test() { }
}

const d = new Dummy()
d.test()

const counter = SingletonCounter.init();
console.log(counter.getNumber())
counter.increment()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getNumber())

console.log('initiating counter2')
const counter2 = SingletonCounter.init()
console.log(counter2.getNumber())
counter2.increment()
counter2.increment()
counter2.increment()
counter2.increment()
counter2.increment()
counter2.increment()
console.log(counter.getNumber(), counter2.getNumber())