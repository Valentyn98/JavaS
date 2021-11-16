// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let workerr = [123,345,567,678,8910];
let worker = ['Петров', 'Иванов', 'Васильев', 'Яковлева', 'Степанова'];
let www = ['Петров', 'Иванов', 'Васильев', 'Яковлева', 'Степанова',123,345,567,678,8910, !!0,!!2, true, false, !!'hu'];
console.log(www);
//****************************
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let wempty = ['empty',345,'noempty',678,8910];
wempty [0] = 'empty';
wempty [1] =345;
wempty [2] =  'noempty';
console.log(wempty);
//****************************
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for ( let i = 0; i < 10; i ++){
    document.write(`<div>asdasd</div> `);
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for ( let i = 1; i < 11; i ++){
    document.write(`<div>asdasd ${i}</div>` );
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while ( i < 20 ){
    document.write(`<h1>ADADAD</h1>`);
    i++;
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let io = 0;
while ( io < 20){
    document.write(`<h1>20 ${io}</h1>`);
    io++;
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let mas1 = [12,23,34,45,56,67,78,89,910,11];
for (let i=0; i< mas1.length; i++){
    console.log(mas1[i]);
}
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let mas2 = ['qw','qw','we','we','er','er','rt','rt','ty','ty'];
for (let i=0; i<mas2.length; i++){
    console.log(mas2[i]);
}
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mas3 = ['qwe',213,'qw',34,234,234,11,'1d',1,10];
for( let i = 0; i<mas3.length; i++){
    console.log(mas3[i]);
}
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mas4 = [123,'qwe',!!'bol',122,65,true,'bgt',2,4,10];
for ( let i=0; i<mas4.length;i++){
    if(typeof mas4[i] === 'boolean'){
        document.write(`<div> ${mas4[i]} </div>`);
        console.log(mas4[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let mas5 = [123,'qwe',!!'bol',122,65,true,'bgt',2,4,10];
for (  let i = 0; i<mas5.length; i++){
    if( typeof mas5[i]=== 'number'){
        console.log(mas5[i]);
    }
}
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let mas6 = [123,'qwe',!!'bol',122,65,true,'bgt',2,4,10];
for (let i = 0; i < mas6.length; i++){
    if (typeof mas6[i]==='string'){
        console.log(mas6[i]);
    }
}
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arrempty = [];
arrempty[0] = 123;
arrempty[1] = 1222;
arrempty[2] = true;
arrempty[3] = 'dert';
for ( let i = 0; i < arrempty.length; i++){
    console.log(arrempty[i]);
}
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for ( let i= 0; i < 10; i++){
    document.write([i]);
}
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for ( let i =0; i < 100; i++){
    document.write(`<div class="col_red">${[i]} </div>`);
}
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for ( let i =0; i < 100; i+=2){
    document.write(`<div class="col_yell">${[i]} </div>`);
}
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for ( let i =0; i < 100; i+=2){
    document.write(`<div class="col_pink">${[i]} </div>`);
    console.log(i);
}
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for ( let i =0; i < 100; i+=3){
    document.write(`<div class="col_green">${[i]} </div>`);
    console.log(i);
}
//****************************************CW*******************
//1. перебрати його циклом while
let masik = [2,17,13,6,22,31,45,66,100,-18];
let ioi = 0;
while ( ioi < masik.length){
    console.log(masik[ioi]);

    ioi++;
}
//2. перебрати його циклом for
let masik1 = [2,17,13,6,22,31,45,66,100,-18];
for (let ig = 0; ig < masik1.length; ig++){
        document.write(`<div class="col_p">${masik1[ig]} </div>`);
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let masik2 = [2,17,13,6,22,31,45,66,100,-18];
let hu = 0;
while ( hu < masik2.length){
if(hu % 2 !== 0) {
    document.write(`<div class="col_green">${hu} </div>`);
}
hu++;
}
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
let masik3 = [2,17,13,6,22,31,45,66,100,-18];
for ( let ih = 0; ih < masik3.length; ih++){
    if(ih % 2 !== 0){
        document.write(`<div>${ih} </div>`);
    }
}
//5. перебрати циклом while та вивести  числа тільки парні  значення
let masik4 = [2,17,13,6,22,31,45,66,100,-18];
let p = 0;
while ( p < masik4.length){
    if(masik4[p] % 2 ===0){
    document.write(`<div class="col_red">${masik4[p]}</div>`)
    }
    p++;
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
let masik5 = [2,17,13,6,22,31,45,66,100,-18];
for ( let n = 0; n < masik5.length; n++){
    if(masik5[n] % 2 === 0){
        document.write(`<div class="col_green">${masik5[n]} </div>`)
    }
}
//7. замінити кожне число кратне 3 на слово "okten"
let masik6 = [2,17,13,6,22,31,45,66,100,-18];
for ( let q = 0; q < masik6.length; q++){
    if ( masik6[q] % 3 === 0){
        masik6[q]='okten';
        document.write(`<div class="col_red">${masik6} </div>`);


    }
}

//8. вивести масив в зворотньому порядку.
let masik7 = [2,17,13,6,22,31,45,66,100,-18];
for ( let op = masik7.length-1; op>=0; op--){
    console.log(masik7[op]);
}
//. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//9.1. перебрати його циклом while
let masikk = [2,17,13,6,22,31,45,66,100,-18];
let ioii = masikk.length-1;
while ( ioii >= 0 ){
    console.log(masikk[ioii]);
    ioii--;
}
//. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//9.2. перебрати його циклом for
let masikk1 = [2,17,13,6,22,31,45,66,100,-18];
for (let ig = masikk1.length-1; ig >=0; ig--){
    document.write(`<div class="col_p">${masikk1[ig]} </div>`);
}

// 9.3. перебрати циклом while та вивести  числа тільки з непарним індексом
let masikk2 = [2,17,13,6,22,31,45,66,100,-18];
let huu = masikk2.length;
while (huu >= 0){
    if(huu % 2 !== 0) {
        document.write(`<div class="col_green">${huu} </div>`);
    }
    huu--;
}
//9.4 перебрати циклом for та вивести  числа тільки з непарним індексом
let masikk3 = [2,17,13,6,22,31,45,66,100,-18];
for ( let ih = masikk3.length; ih>=0; ih--){
    if(ih % 2 !== 0){
        document.write(`<div>${ih} </div>`);
    }
}
//9.5. перебрати циклом while та вивести  числа тільки парні  значення
let masikk4 = [2,17,13,6,22,31,45,66,100,-18];
let p1 =  masikk4.length;
while ( p1 >=0){
    if(masikk4[p1] % 2 ===0){
        document.write(`<div class="col_red">${masikk4[p1]}</div>`)
    }
    p1--;
}
//9.6. перебрати циклом for та вивести  числа тільки парні  значення
let masikk5 = [2,17,13,6,22,31,45,66,100,-18];
for ( let n = masikk5.length; n>=0; n--){
    if(masikk5[n] % 2 === 0){
        document.write(`<div class="col_green">${masikk5[n]} </div>`)
    }
}
//9.7. замінити кожне число кратне 3 на слово "okten"
let masikk6 = [2,17,13,6,22,31,45,66,100,-18];
for ( let q = masikk6.length; q>=0; q--){
    if ( masikk6[q] % 3 === 0){
        masikk6[q]='okten';
        document.write(`<div class="col_red">${masikk6} </div>`);


    }
}