//2 - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = +prompt('від 0 до 59');
// if (time >= 0 && time <= 15){
//     console.log('first');
// }else if(time > 15 && time < 30){
//     console.log('second');
// }else if(time>= 30 && time <= 45){
//     console.log('thirt');
// }else if(time >45 && time <=59){
//     console.log('foutrh');
// }
// ******************************************
//2 - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt(' від 1 до 31');
let half = day >= 1 && day <=10 ? 'first' : day >= 11 && day <=20 ? 'second' :day >= 11 && day <=20 ? 'thirt';
console.log(half);