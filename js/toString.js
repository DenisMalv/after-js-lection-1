// --- To STRING ---

////////////////////////////////////////////////////////
// number to string
let value = 0;

//#1
let toString = String(value);
console.log(` ${value}, значение через конструктор String():`, toString)
console.log(`тип данных ${value}, значение через конструктор String():`, typeof toString)

//#2
toString = value + "";
console.log(` ${value}, значение через конкатенацию:`, toString)
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString)

value = 1;
//#1
toString = String(value);
console.log(`${value},значение через конструктор String():`, toString);
console.log(`тип данных ${value},значение через конструктор String():`, typeof toString);

//#2
toString = value + "";
console.log(` ${value}, значение через конкатенацию:`, toString)
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString)

// значение бесконечности к строке
value = Infinity;
//#1
toString = String(value);
console.log(`${value}, значение через конструктор String();`, toString);
console.log(`тип данных ${value}, значение через конструктор String();`, typeof toString);
//#2
toString = value + "";
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

// Не число к строке
value = NaN;
//#1
toString = String(value);
console.log(`${value}, значение через конструктор String();`, toString);
console.log(`тип данных ${value}, значение через конструктор String();`, typeof toString);
//#2
toString = value + "";
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

//////////////////////////////////////////
//Boolean (logic) true к строке

value = true;
//#1
toString = String(value);
console.log(`${value}, значение через конструктор String();`, toString);
console.log(`тип данных ${value}, значение через конструктор String();`, typeof toString);
//#2
toString = value + "";
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

//Boolean (logic) false к строке

value = false;
//#1
toString = String(value);
console.log(`${value}, значение через конструктор String();`, toString);
console.log(`тип данных ${value}, значение через конструктор String();`, typeof toString);
//#2
toString = value + "";
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

//////////////////////////////////////////////////////////
//Undefined true к строке

value = undefined;
//#1
toString = String(value);
console.log(`${value}, значение через конструктор String();`, toString);
console.log(`тип данных ${value}, значение через конструктор String();`, typeof toString);
//#2
toString = value + "";
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

//////////////////////////////////////////////////////
//Null true к строке

value = null;
//#1
toString = String(value);
console.log(`${value}, значение через конструктор String();`, toString);
console.log(`тип данных ${value}, значение через конструктор String();`, typeof toString);
//#2
toString = value + "";
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);
