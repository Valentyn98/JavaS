// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.





// 1 - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let m = 'hello world';
console.log(m.length)
let n = 'lorem ipsum';
console.log(n.length)
let b = 'javascript is cool';
console.log(b.length)

// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let v = 'hello world'.toUpperCase()
console.log(v)
// console.log('hello world'.toUpperCase())
let c =  'lorem ipsum'.toUpperCase()
console.log(c)
let x = 'javascript is cool'.toUpperCase()
console.log(x)

// 3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let vv = 'HELLO WORLD'.toLowerCase()
console.log(vv)
// console.log('hello world'.toLowerCase())
let cc =  'LOREM IPSUM'.toLowerCase()
console.log(cc)
let xx = 'JAVASCRIPT IS COOL'.toLowerCase()
console.log(xx)

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let l = ' dirty string   '.trim();
console.log(l)

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//
 let arwr = (k) => {
   return k.split(' ');
 }
let k = 'Каждый охотник желает знать где сидит фазан';
let call = arwr(k)
console.log(call)
arwr(k);

// 6 - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let t = 'Каждый охотник желает знать где сидит фазан';
let delete_characters = (t,lengt) =>{
   return  t.slice(0,lengt);
}
document.writeln(delete_characters(t,7))

//ДРУГЙИ ВАР

// let txt = 'Каждый охотник желает знать где сидит фазан';
// let del = (txt, length) =>{
//     return txt.slice(0,length);
// }
// console.log(del (txt, 7))

// 7  - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let sr = "HTML JavaScript PHP";
let insert_dash = (sr) =>{
    return sr.replaceAll(' ','-').toUpperCase()
}
document.writeln(insert_dash(sr));

// 8 - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let i = 'dodosik'

let first_register = (i) =>{
    return i[0].toUpperCase() + i.slice(1)

}
document.writeln(first_register(i))
//
// 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//let te = 'top bot mid';
// let capitalize = (str) => {
//     return str.split(' ').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join(' ');
// };
// document.write(capitalize('top bot mid'));



// другий вар рішення
let te = 'top bot mid';
 let func = (te) =>{
     let arr = te.split(' ');
     for( let i = 0; i < arr.length; i++){
         let newI = arr[i].split('');
         newI[0] = newI[0].toUpperCase();
         arr[i] = newI.join('');
     }
     return arr.join(' ');
 };
console.log(func(te));





// ***********************************************CW****CW******CW*****************************************
// 1- Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let m1 = 'Harry..Potter'
let m2 = 'Ron---Whisley'
let m3 = 'Hermione__Granger'


let t1 = 'Harry Potter'
let t2 = 'Ron Whisley'
let t3 = 'Hermione Granger'

let validn = (name) =>{
    name.replaceAll('..',' ')
        .replaceAll('---',' ')
        .replaceAll('__',' ')
}
validn (name)

// 2 - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let limit = 10;
let mas = [];
let pushmas = (rand,limit) =>{
    for ( let p = 0; p < limit; p++){
        mas.push(Math.floor(Math.random() * rand))
    }
    return mas
}
let param = pushmas (100,10)
console.log(mas)
// 3 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
param.sort((b,a) => (b - a))
console.log(param)

// 4 - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let fil = param.filter(function (b ) {
    return b % 2 ===0;
})
console.log(fil)
// 5- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let es = param.map =(b) => {return b + ''}; // не знаю сработает это или нет , когда проверяю то пишет стринг, но то не то


// 6- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
//
//
// 7- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
