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
// let day = prompt(' від 1 до 31');
// day >= 1 && day <=10 ? console.log('first') : day >= 11 && day <=20 ? console.log('second') :day >= 11 && day <=31 ? console.log('thirt') : 'none';
// ******************************************
//3 - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = 'th';
if ( test !== true ){
    console.log('Вірно');
}else {
    console.log('Неправильно');//не зрозумів чому th це не ТРУ
}

let test1 = 'th';
test1 === !true ? console.log('Вірно') : console.log('Неправильно');//не зрозумів чому th це не ТРУ( спеціально !true поставив для перевірки )
//************************************************
// 4 - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;
if ( a !== 0){
    console.log('Вірно');
}else{
    console.log('Невірно');
}

a !== 0 ? console.log('Вірно') : console.log('Невірно');
//****************************************************
//5 - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let number = 3;
switch (number) {
    case 1:
        console.log("work");
        break;
    case 2:
        console.log("study");
        break;
    case 3:
        console.log("stady and work");
        break;
}
//6 - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = prompt('');
if ( year % 4 === 0){
    document.write("leap");
}else{
    document.write("standart");
}
//****************************************************
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let namejs = 'ECMAScript';
let variant = prompt('Яка «офіційна» назва JavaScript?');
if (variant === namejs){
    document.write('Правильно');
}else {
    document.write('Не знаєте? ECMAScript!');
}
//****************************************************NEXT__CW//****************************************************
//1  - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let d = prompt('num1');
let c = prompt('num2');
if (d > c){
    document.write('Перше правильно');
}else if
     (c > d){
        document.write('Друге правильно');
}else {
    document.write('Обидва рівні');
}
//другий спосіб
d > c ? document.write('Перше правильно') : c > d ? document.write('Друге правильно') : document.write('Обидва рівні');
//******************************************************************
// 2 - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let numberdoor = prompt('Номер квартиры')
let firstp = "Первый подьезд";
let secondp = "Второй подьезд";
let thirtp = "Третий подьезд";
if (numberdoor >= 1 && numberdoor<= 20){
    document.write(`${firstp}`);
}else if (numberdoor >= 21 && numberdoor<= 48){
    document.write(`${secondp}`);
}else if (numberdoor >= 49 && numberdoor<= 90){
    document.write(`${thirtp}`);
}else {
    document.write('Другой дом');
}
//***************************************************************************************
///3- Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО





