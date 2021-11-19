// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function toktok(a,b){

    if (arguments.length < 2){
        document.write(`${a}`);
    }else if  (arguments.length >=2){
        document.write(`${a+b}`)
    }
}
toktok('valik', 'molodec')

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
let testarrone = [1,2,3,4];
let testarrtwo = [2,3,4,5];
let resultik = [];
function sumas (mas1,mas2){
    for ( let i = 0; i < mas1.length; i++){
        resultik.push(mas1[i]+mas2[i]);
    }
console.log(resultik)
}
sumas (testarrone,testarrtwo)
//- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let m =[{name: 'Dima', age: 13}, {model: 'Camry'}];
function peps (){
    let skey =[];
    for ( let i = 0; i< m.length; i++){
        let fi = m[i];
        for( let ko in fi){
            skey.push(ko);
        }
    }
 console.log(skey)
}
peps ()
