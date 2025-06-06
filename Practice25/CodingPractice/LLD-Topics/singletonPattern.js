function Process(state) {
    this.state = state;
}

const SingleTonProcess = (() => {
    let pManager;

    /** We cannot use arrow function to be a constructor */
    function ProcessManager() {
        this.numberOfProcesses = 0;
        this.incrementProcess = () => {
            this.numberOfProcesses += 1;
            console.log("this.numberOfProcesses: ", this.numberOfProcesses);
        };
        this.decrementProcess = () => {
            this.numberOfProcesses -= 1;
            console.log("this.numberOfProcesses: ", this.numberOfProcesses);
        };

        console.log("this in ProcessManager", this);
    }

    function createProcessManager() {
        pManager = new ProcessManager();
        return pManager;
    }

    return {
        getProcessManager: () => {
            if (!pManager) pManager = createProcessManager();
            return pManager;
        },
    };
})();

function runSingletonFirstEg() {
    const processManager = SingleTonProcess.getProcessManager();
    const processManager2 = SingleTonProcess.getProcessManager();
    processManager.incrementProcess();
    processManager.incrementProcess();
    processManager.incrementProcess();
    processManager.incrementProcess();
    processManager.incrementProcess();
    console.log("now processManager2 will increment");
    processManager2.incrementProcess();
    // processManager.
    console.log("🚀 ~ processManager:", processManager);
}

const NumberStorage = (function () {
    let instance;

    function testFunction() {
        console.log("testFunction is running");
    }
    function ActualSingleClass() {
        // "this" here is the environment of ActualSingleClass and it does not include
        // environment of NumberStorage function. This is mainly because we intiated
        // ActualSingleClass in generateInstance using new keyword.
        this.currentNumber = 0;
        this.increment = () => {
            this.currentNumber += 1;
        };
        this.decrement = () => {
            this.currentNumber -= 1;
        };
        this.setNumber = (num) => {
            this.currentNumber = num;
        };
        this.getNumber = () => {
            let x = this.currentNumber;
            return x;
        };
    }
    function generateInstance() {
        instance = new ActualSingleClass();
    }

    return {
        init: () => {
            if (!instance) generateInstance();
            return instance;
        },
    };
})();

function runSingletonSecondEg() {
    const num = NumberStorage.init();

    num.increment();
    num.increment();
    num.increment();
    num.increment();
    console.log(num.getNumber());

    const num2 = NumberStorage.init();
    num2.setNumber(10);
    console.log(num2.getNumber(), num.getNumber());
    const num3 = NumberStorage.init();
    num3.decrement();
    console.log(num.getNumber(), num3.getNumber(), num2.getNumber());
}

runSingletonSecondEg();
