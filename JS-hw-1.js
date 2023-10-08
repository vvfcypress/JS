//Задача 1. Для решения вопроса с голодом компании нужно 4 гамбургера и одну картошку.

let hamburger = 4;
let potato = 1;

if (hamburger >=4  && potato >=1){
    console.log('Мы поели');
 } else {
    console.log('Мы идем в другое кафе');
 }


 // Задача 2. 

 let cost = 999;

if (cost >= 1000 && cost <= 1900){
    console.log('It is ok. Cost is found between 1000 and 1900');
} else {
    console.log('Cost is not found');
}

//Задача 3.
//первая
let cost2 = 1901;

if (cost2 <= 1000){
    console.log('It is ok. Cost is not found between 1000 and 1900');
} else if (cost2 >=1900){
    console.log('It is ok. Cost is not found between 1000 and 1900');
} else {
    console.log('Cost is between 1000 and 1900');
}
    
//вторая часть

let cost3 = 1900;

if (!(cost3 >= 1000)){
    console.log('It is ok. Cost is not found between 1000 and 1900');
} else if(!(cost3 <=1900)){
    console.log('It is ok. Cost is not found between 1000 and 1900');
} else {
    console.log('Cost is between 1000 and 1900');
}


// Задача 4. 
let season = 4;

if(season == 1){
    console.log('winter');
}else if(season == 2){
    console.log('spring');
}else if(season == 3){
    console.log('summer');
}else if(season == 4){
    console.log('autumn');
}


// Задача 5.
let a = 1;
let b = 3;
let c = 2;

if((a < b && b < c) || (c < b && b < a)){
    console.log('b = ' + b);
} else if((b < a && a < c)|| (c < a && a < b)){
    console.log('a = ' + a);
}else if((a < c && c < b) || (b < c && c < a)){
    console.log('c = ' + c);
}


// Задача 6.

let day = 3;

switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Thuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sanday');
        break;
}

// Задача  7.

let a1 = 10;
let b1 = 5;
let symbol = '*';

switch(symbol){
    case '+':
        console.log(a1 + b1);
        break;

    case '-':
        console.log(a1 - b1);
        break;

    case '*':
        console.log(a1 * b1);
        break;

    case '/':
        console.log(a1 / b1);
        break;
}

// Задача 8.
let arr = [];

for (let i = 1; i < 6; i++){
    arr.push(i);
}
console.log(arr)


// Задача 9.

let myArray = [];

for(let i1=0; i1 < 4; i1++){
   
    myArray.push((i1+1)*2);

}

console.log(myArray);


let myArray1 = [];

for(let i1=0; i1 < 5; i1++){
    myArray1.push((i1+1)*2-1);
}

console.log(myArray1);



//Задача 10. 

let total = 1;
let myArray2 = [2, 3, 4, 5, 6];

for(let i = 0; i < myArray2.length; i++){

    total = myArray2[i] + total;

}
console.log(total);



// Задача 11.


const arr111 = [ [1, 2], [3, 4], [5, 6] ];

for (let i = 0; i < arr111.length; i++) {
    for (let j = 0; j < arr111[i].length; j++) {
        console.log(arr111[i][j]);
    }
}





// Задача 12. 

const testArray = [[1, 2], [3, 4], [5, 6, 7]];

let product = 1;

for (let i = 0; i < testArray.length; i++) {
    for (let j = 0; j < testArray[i].length; j++) {
        product = product * testArray[i][j]
    }
}

console.log(product);



// Задача 13.

let str = 'I lovE my MothErland';

console.log(str.replace(/[aeiouy]/gi, ''));


// Задача 14.

let metr = 19;

if(metr > 10 && metr <20){
    console.log(`${metr} метрів цє ${metr/1000} кілометра`);
}
else if(metr % 10 == 0){
    console.log(`${metr} метрів цє ${metr/1000} кілометра`);
} else if (metr % 10 == 1){
    console.log(`${metr} метр цє ${metr/1000} кілометра`);
} else if(metr % 10 == 2){
    console.log(`${metr} метра цє ${metr/1000} кілометра`);
} else if(metr % 10 == 3){
    console.log(`${metr} метра цє ${metr/1000} кілометра`);
} else if(metr % 10 == 4){
    console.log(`${metr} метра цє ${metr/1000} кілометра`);
} else if(metr % 10 == 5){
    console.log(`${metr} метрів цє ${metr/1000} кілометра`);
} else if(metr % 10 == 6){
    console.log(`${metr} метрів цє ${metr/1000} кілометра`);
} else if(metr % 10 == 7){
    console.log(`${metr} метрів цє ${metr/1000} кілометра`);
} else if(metr % 10 == 8){
    console.log(`${metr} метрів цє ${metr/1000} кілометра`);
} else if(metr % 10 == 9){
    console.log(`${metr} метрів цє ${metr/1000} кілометра`);
}
