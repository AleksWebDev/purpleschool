let promiseOne = new Promise(resolve => resolve(1));
let promiseTwo = new Promise(resolve => resolve(2));
let promiseThree = new Promise(resolve => resolve(3));
let promiseFour = new Promise(reject => reject('some error'));

let promises = [promiseOne, promiseTwo, promiseThree, promiseFour];

const race = (promises) => {
    return new Promise((resolve, reject) => {
        for(let promise of promises){
            promise
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    reject(error);
                });
        }
    })
}

console.log(race(promises));