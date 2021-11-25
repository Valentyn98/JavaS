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

// 9 - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
};
document.write(capitalize('top bot mid'));