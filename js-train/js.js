// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let grit = 'hello';
grit = 'hi';
console.log(grit);
alert(grit);
document.write(grit);
let web = 'owu';
web = 'google';
console.log(web);
// alert(web);
document.write(web);
let co = 'com';
co = 'rom';
console.log(co);
// alert(co);
document.write(co);
let dom = 'ua';
dom = 'eu';
console.log(dom);
// alert(dom);
document.write(dom);
let one = 'one';
one = 'two';
console.log(one);
// alert(one);
document.write(one);
let ten = 'okten';
ten = 'lokten';
console.log(ten);
// alert(ten);
document.write(ten);
let treight = -999;
treight = -888;
console.log(treight);
// alert(treight);
document.write(treight);
let ott = 123;
ott = 1223;
console.log(ott);
// alert(ott);
document.write(ott);
let tpfif = 2.15;
tpfif = 3.15;
console.log(tpfif);
// alert(tpfif);
document.write(tpfif);
let tps = 2.7;
tps = 3.7;
console.log(tps);
// alert(tps);
document.write(tps);
let sec = 16;
sec = 15;
console.log(sec);
// alert(sec);
document.write(sec);
let t = true;
t = false;
console.log(t);
// alert(t);
document.write(t);
let f = false;
f = true;
console.log(f);
// alert(f);
document.write(f);
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
//**********************************************************************************************************************************************************************************************
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Valentyn';
let middleName = 'Postoleko';
let lastName = 'Viktorovych'
let person = (`${firstName} ${middleName} ${lastName}`)
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
//**************************************************************************************************
//     - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками
//Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt("Ім'я");
let tatoname = prompt("По-Батькові");
let test = prompt("Вік");
alert(`Вітаю ${name} ${tatoname}. Тобі ${test} років`);
//     - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками
//Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//******************************************************************************************************************
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let cp = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof cp);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//***************************************************************************************************************************
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
5 !== 6 -> true
5 > 6 -> false
5 == 6 -> false
5 === 6 -> false
10 === 10 -> true
10 == 10 -> true
10 > 10 -> false
10 < 10 -> false
10 !== 10 -> false
123 === '123' -> false
123 == '123' -> true
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//******************************************
// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    let str = "20";
let a = 5;
document.write(str + a + "<br/>");////205  бо якщо дія з стрічкою, то все стає стрічкою /// або тільки тут 205, потім 15,40,15
document.write(str - a + "<br/>");//205
document.write(str * "2" + "<br/>");//205
document.write(str / 2 + "<br/>");//205
console.log(str - a + "<br/>");//205