// --- To Number ---

//Строка(любое строчное значение) к Числу

let value = 'bla bla bla';

//#1
let toNumber = Number(value);
console.log(`${value}, значение через конструктор Number();`, toNumber);
console.log(`тип данных ${value}, значение через конструктор Number();`, typeof toNumber);
//#2
toNumber = +value; // Унарный плюс
console.log(`${value}, значение через унарный +:`, toNumber);
console.log(`тип данных ${value}, значение через унарный +:`, typeof toNumber);

// Cтрочное число к Числу
value = '123';

//#1
toNumber = Number(value);
console.log(`${value}, значение через конструктор Number();`, toNumber);
console.log(`тип данных ${value}, значение через конструктор Number();`, typeof toNumber);
//#2
toNumber = +value; // Унарный плюс
console.log(`${value}, значение через унарный +:`, toNumber);
console.log(`тип данных ${value}, значение через унарный +:`, typeof toNumber);

// Пустая строка к Числу
value = '';

//#1
toNumber = Number(value);
console.log(`пустая строка ${value}, значение через конструктор Number();`, toNumber);
console.log(`тип данных пустой строки ${value}, значение через конструктор Number();`, typeof toNumber);
//#2
toNumber = +value; // Унарный плюс
console.log(`пустая строка ${value}, значение через унарный +:`, toNumber);
console.log(`тип данных пустой строки ${value}, значение через унарный +:`, typeof toNumber);

// Строка с пробелом (не пустая) к Числу
value = ' ';

//#1
toNumber = Number(value);
console.log(`строка с пробелом ${value}, значение через конструктор Number();`, toNumber);
console.log(`тип данных строки с пробелом ${value}, значение через конструктор Number();`, typeof toNumber);
//#2
toNumber = +value; // Унарный плюс
console.log(` строка с пробелом ${value}, значение через унарный +:`, toNumber);
console.log(`тип данных  строки с пробелом ${value}, значение через унарный +:`, typeof toNumber);

////////////////////////////////////////////////////
// Булевое логическое true к числу
value = true;

//#1
toNumber = Number(value);
console.log(`${value}, значение через конструктор Number();`, toNumber);
console.log(`тип данных ${value}, значение через конструктор Number();`, typeof toNumber);
//#2
toNumber = +value; // Унарный плюс
console.log(`${value}, значение через унарный +:`, toNumber);
console.log(`тип данных ${value}, значение через унарный +:`, typeof toNumber);

// Булевое логическое false к числу
value = false;

//#1
toNumber = Number(value);
console.log(`${value}, значение через конструктор Number();`, toNumber);
console.log(`тип данных ${value}, значение через конструктор Number();`, typeof toNumber);
//#2
toNumber = +value; // Унарный плюс
console.log(`${value}, значение через унарный +:`, toNumber);
console.log(`тип данных ${value}, значение через унарный +:`, typeof toNumber);

///////////////////////////////////////////////////\
// Undefined к числу
value = undefined;

//#1
toNumber = Number(value);
console.log(`${value}, значение через конструктор Number();`, toNumber);
console.log(`тип данных ${value}, значение через конструктор Number();`, typeof toNumber);
//#2
toNumber = +value; // Унарный плюс
console.log(`${value}, значение через унарный +:`, toNumber);
console.log(`тип данных ${value}, значение через унарный +:`, typeof toNumber);

/////////////////////////////////////////////////////////////
// Null к числу
value = null;

//#1
toNumber = Number(value);
console.log(`${value}, значение через конструктор Number();`, toNumber);
console.log(`тип данных ${value}, значение через конструктор Number();`, typeof toNumber);
//#2
toNumber = +value; // Унарный плюс
console.log(`${value}, значение через унарный +:`, toNumber);
console.log(`тип данных ${value}, значение через унарный +:`, typeof toNumber);