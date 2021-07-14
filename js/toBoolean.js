// --- To Boolean ---

//Строка любая к bollean

let value = 'bla bla bla';

//#1
let toBoolean = Boolean(value);
console.log(`${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(`${value}, значение через !!:`, toBoolean);
console.log(`тип данных ${value}, значение через !!:`, typeof toBoolean);

//Строка c числом к bollean

value = '123';

//#1
toBoolean = Boolean(value);
console.log(`${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(`${value}, значение через !!:`, toBoolean);
console.log(`тип данных ${value}, значение через !!:`, typeof toBoolean);

//Строка пустая к bollean

value = '';

//#1
toBoolean = Boolean(value);
console.log(`пустая строка${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных пустой строки ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(`пустая строка ${value}, значение через !!:`, toBoolean);
console.log(`тип данных пустой строки ${value}, значение через !!:`, typeof toBoolean);

//Строка с пробелом к bollean

value = ' ';

//#1
toBoolean = Boolean(value);
console.log(`строка с пробелом${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных строка с пробелом ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(`строка с пробелом ${value}, значение через !!:`, toBoolean);
console.log(`тип данных строка с пробелом ${value}, значение через !!:`, typeof toBoolean);

///////////////////////////////////////////////////
//Число к булю

//Строка с пробелом к bollean

value = 12;

//#1
toBoolean = Boolean(value);
console.log(`${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(` ${value}, значение через !!:`, toBoolean);
console.log(`тип данных ${value}, значение через !!:`, typeof toBoolean);

//undefined к bollean

value = undefined;

//#1
toBoolean = Boolean(value);
console.log(`${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(` ${value}, значение через !!:`, toBoolean);
console.log(`тип данных ${value}, значение через !!:`, typeof toBoolean);

//Null к bollean

value = null;

//#1
toBoolean = Boolean(value);
console.log(`${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(` ${value}, значение через !!:`, toBoolean);
console.log(`тип данных ${value}, значение через !!:`, typeof toBoolean);

//NaN к bollean

value = NaN;

//#1
toBoolean = Boolean(value);
console.log(`${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(` ${value}, значение через !!:`, toBoolean);
console.log(`тип данных ${value}, значение через !!:`, typeof toBoolean);

//Infinity к bollean

value = Infinity;

//#1
toBoolean = Boolean(value);
console.log(`${value}, значение через конструктор Boolean();`, toBoolean);
console.log(`тип данных ${value}, значение через конструктор Boolean();`, typeof toBoolean);
//#2
toBoolean = !!value; // Унарный плюс
console.log(` ${value}, значение через !!:`, toBoolean);
console.log(`тип данных ${value}, значение через !!:`, typeof toBoolean);