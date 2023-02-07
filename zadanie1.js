// Написать, функцию, которая принимает в качестве аргумента
// объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

let getKeysAndValues = function(obj) {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)) {
            let ownKeysValues = `Own ${key}: ${obj[key]}`;
            console.log(ownKeysValues);
        } else {
            let inheritedKeysValues = `Inherited ${key}: ${obj[key]}`;
            console.log(inheritedKeysValues);
        }
    }
}

let human = {
  alive: true,
  mind: true,
} 

let aObj = Object.create(human)

aObj.name = "John";
aObj.surname = "Ivanoff";

console.log(aObj);
getKeysAndValues(aObj);
