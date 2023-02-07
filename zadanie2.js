// Написать функцию, которая принимает в качестве аргументов
// строку и объект, а затем проверяет есть ли у переданного
// объекта свойство с данным именем. Функция должна возвращать true или false.


//есть ли свойство
let checkProperty = function(obj, str) {
    if (str in obj) {
        return true;
    } else {
        return false;
    }
}

// есть ли собственное свойство
let checkOwnPropertyInObject = function(obj, str) {
    if (Object.getOwnPropertyDescriptor(obj, str)) {
        return `${str} is an own  property in object`;
    } else {
        return `${str} is an inherited property in object`;
    }
}

let animal = {
    alive: true,
}

// млекопитающие
let mammals = Object.create(animal);
mammals.milk = true;

let rabbit = Object.create(mammals);
rabbit.domestic = true;
rabbit.walk = false;
rabbit.jump = true;

console.log(rabbit);
console.log(checkProperty(rabbit, "jump"));
console.log(checkProperty(rabbit, "alive"));
console.log(checkProperty(rabbit, "milk"));
console.log(checkOwnPropertyInObject(rabbit, "jump"));
console.log(checkOwnPropertyInObject(rabbit, "alive"));
console.log(checkOwnPropertyInObject(rabbit, "milk"));
