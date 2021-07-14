console.log("---variables----")

console.log(student); // undefined - потому что уже создана но пока нет значения.

var student = 'Denis';
console.log(student);

var count; //Обьявление переменной без инициализации.
console.log(count);

count = 1;
console.log(count); //1
count = 2;
console.log(count);//2

////////////////////////////////

//console.log(number); // Ошибка, так как переменная еще не назначена.

let number = 28;
console.log(number);

let age; //Обьявление переменной без инициализации.
console.log(age); //undefined


age = 18;
console.log(age);//18
age = 22;
console.log(age);//22

////////////////////////////////
//console.log(userName) // Ошибка так как переменная еще не назначена

const userName = "Spark"
console.log(userName);

//const user; // Ошибка так как переменной не назначено значение.

//userName = ""; // Ошибка.