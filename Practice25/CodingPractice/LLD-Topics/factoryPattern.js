//------- function way ------//

function Developer(name) {
    this.name = name;
    this.type = "Developer";
}

function Tester(name) {
    this.name = name;
    this.type = "Tester";
}

function EmployeeFactory() {
    this.createEmployee = (name, type) => {
        switch (type) {
            case 1:
                return new Developer(name);
            case 2:
                return new Tester(name);
        }
    };
}

function say() {
    console.log(`Hi, I am ${this.name}, and I am a ${this.type}.`);
}

function executeFunctionStyleFactory() {
    const employee = new EmployeeFactory();
    const employees = [];
    employees.push(employee.createEmployee("Shrikant", 1));
    employees.push(employee.createEmployee("Sneha", 2));
    employees.push(employee.createEmployee("Sheldon", 2));
    employees.push(employee.createEmployee("Lenord", 1));
    employees.push(employee.createEmployee("Howard", 1));
    employees.push(employee.createEmployee("Raj", 1));

    console.log("🚀 ~ employees:", employees);

    employees.forEach((emp) => say.call(emp));
}

executeFunctionStyleFactory();
