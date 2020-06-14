/****************************
 //Variables-and-Types
 //Assignee variables
 let wordData;
 wordData = "Word List";

 console.log(wordData);

 let subTotal = 100;
 let tax = subTotal * 0.07;
 let totalWithTax = tax + subTotal;

 //Data Types
 let obj = {
    key1: "value",
    key2: 4,
    key3: true,
    key4: {
        objKey: "Internal Object Value"
    }
}

 console.log(obj.key1, obj.key4.objKey);

 let var1 = "2";
 let var2 = 5;
 let result = var1 + var2;
 console.log(result);

 //operators
 let add = 1 + 2;
 let sub = 2 - 1;
 let mult = 2 * 4;
 let division = 4 / 2;
 let mod = 5 % 2;

 let string = "String 1 " + "String 2";
 console.log(string);
 */

/***************************************
 //Conditionals, Functions, Scope and Loops

 let storeA = 4.40;
 let equals = 1 === 1;
 let greaterThan = 5 > 2;
 let lessThan = 2 < 10;
 let greaterThanEq = 5 >=5;
 let lessThanEq = 4 <= 8;
 let nonEqual = 4 !=+ 3;

 let compareTypesOfVariables = 1 === '1';
 console.log(compareTypesOfVariables);


 let storeB = 4.40;
 function comparePrice(storeA, storeB) {

if (storeA < storeB) {
    console.log("store A is Lower");
} else if (storeB < storeA) {
    console.log("store B is Lower");
} else {
    console.log("their price are equal");
}
}
 comparePrice(10, 5);
 comparePrice(7, 10);

 function squareNum(number) {
    let squared = number * number;
    return squared;
}

 console.log(squareNum(4));

 let x = 10;
 function addNumber(n, m, x) {
    console.log(x);
    let b;
    if (1 === 1){
        let b = 8;
    }
    return n + m;
}
 addNumber(2, 3, 8);
 console.log(x);


 //Arrays
 let ourArray = [1, 2, 3, 4, 5, ['a', 'b', 'c']];
 console.log(ourArray[5][0]);

 let arrLen = ourArray.length;
 for (var i = 0; i < arrLen; i++){
    console.log("i equals to " + ourArray[i]);
  }

 */

/**************************************
 //Objects, Interfaces, and API`s

 let dog = {
    name: 'Steve',
    color: 'brown',
    breed: 'Pug',
    size: 'Small',
    bark: function (typeOfBark) {
        console.log('BARK!!!!!!!!!');
    }
};

 dog.bark();

 function x(y) {
    y.num = y.num + 5;
    console.log(y);
}
 let y = {
    name: 'John',
    num: 10
};
 x(y);
 console.log(y);
 */