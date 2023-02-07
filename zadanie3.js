// Написать функцию, которая создает пустой объект, но без прототипа.

let obj = Object.create(null);
let key = prompt("What's the key?", "__proto__");
obj[key] = "Hello";

console.log(`${key}: ${obj[key]}`);

let obj1 = Object.create({});
console.log("in obj1 __proto__ inherited: " + obj1["__proto__"]);

Object.setPrototypeOf(obj1, null);
obj1["__proto__"] = "World";
console.log("in obj1 __proto__ changed: " + obj1["__proto__"]);
