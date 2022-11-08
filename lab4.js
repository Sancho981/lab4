function ex1 (a){
    if(a === 0){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex1(1);
ex1(0);
ex1(-3);

function ex2(a){
    if(a > 0){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex2(1);
ex2(0);
ex2(-3);

function ex3(a){
    if(a < 0){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex3(1);
ex3(0);
ex3(-3);

function ex4(a){
    if(a >= 0){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex4(1);
ex4(0);
ex4(-3);

function ex5(a){
    if(a <= 0){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex5(1);
ex5(0);
ex5(-3);

function ex6(a){
    if(a != 0){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex6(1);
ex6(0);
ex6(-3);

function ex7(a){
    if(a == 'test'){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex7('test');
ex7('тест');
ex7(3);

function ex8(a){
    if(a === '1'){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex8('1');
ex8(1);
ex8(3);

function ex9(test){
    if(test){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex9(true);
ex9(false);

function ex9(test){
    if(test === true){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex9(true);
ex9(false);

function ex10(test){
    if(!test){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex10(true);
ex10(false);

function ex10(test){
    if(test !== true){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}
ex10(true);
ex10(false); 
function ex11(a){
    if(a > 0 && a < 5){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}

let a = [5, 0, -3, 2];

for(let i = 0; i < a.length; i++){
    ex11(a[i]);
}

function ex12(a){
    if(a == 0 || a == 2){
        console.log(a+7);
    }
    else{
        console.log(a/10);
    }
}

let a = [5, 0, -3, 2];

for(let i = 0; i < a.length; i++){
    ex12(a[i]);
}

function ex13(a, b){
    if(a <= 1 && b >= 3){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}

let a = [1, 0, 3];
let b = [3, 6, 5];

for(let i = 0; i < a.length; i++){
    ex13(a[i], b[i]);
}

Задача 14:  
function ex14(a, b){
    if((a > 2 && a < 11) || (b >= 6 && b < 14)){
        console.log("Вірно");
    }
    else{
        console.log("Невірно");
    }
}

let a = [1, 0, 6, 10];
let b = [7, 3, 2, 9];

for(let i = 0; i < a.length; i++){
    ex14(a[i], b[i]);
}

function ex15(a){
    switch(a){
        case '1':
        var result = 'Зима';
        break;

        case '2':
        var result = 'Весна';
        break;

        case '3':
        var result = 'Літо';
        break;

        case '4':
        var result = 'Осінь';
        break;

        default:
        var result = 'Введіть значення 1-4!';
        break;
    }
    return result;
}

let a = ['3', '0', '2', '4', '1']

for(let i = 0; i < a.length; i++){
    console.log(ex15(a[i]));
} 


