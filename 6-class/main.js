class Car{

    #make;
    #model;
    #run;

    constructor(make, model, run){
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get runInfo(){
        return this.#run;
    }

    set runInfo(value){
        this.#run = value;
    }

    showInfo(){
        return `Make: ${this.#make}
                Model: ${this.#model}
                Run: ${this.#run} km`;
    }

}


const car = new Car('Audi', 'Q5', '35000');


console.log(car.runInfo);
console.log(car.runInfo = 45000);
console.log(car.showInfo());