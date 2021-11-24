//HOME*************************
// 1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function pryamok (a,b){
    let dob = a * b;
    return dob;
    // console.log(dob);
}
pryamok(5,3);
//2- створити функцію яка обчислює та повертає площу кола з радіусом r
function kolo (ra){
 let kol = Math.PI * Math.pow(ra,2);
 // return kol;
 console.log(kol);
}
kolo (5);
//3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//S = 2 π R h
function culi (h,r){
    let cul = 2 * Math.PI * r * h;
    // console.log(cul)
    return cul;
}
culi (10,2);
//4- створити функцію яка приймає масив та виводить кожен його елемент
let tarr = [12,1233,44,64];
function mas (arr){
    for ( let i = 0; i<tarr.length; i++){
        console.log(tarr[i]);
    }
}
mas ( );
//5- створити функцію яка створює параграф з текстом. Текст задати через аргумент
let privet = "p";
function txt(text){
    document.write(`<p>${text}</p>`)
    for (let i = 0; i < privet.length; i++){
        document.write(`<p>${text}</p>`)
    }
}
txt('H');
txt('o');
txt('l');
txt('l');
txt('a');
//6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function lili (textli){
    document.write(`<ul>`)
        document.write(`<li>${textli}</li>`)
        document.write(`<li>${textli}</li>`)
        document.write(`<li>${textli}</li>`)
    document.write(`</ul>`)
    document.write(`<ul>`)
    for ( let i = 0; i< 3; i++){
        document.write(`<li>${textli}</li>`)
    }
    document.write(`</ul>`)
}
lili ('Текст для Ли ');
//7- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function hardli (text, number){
    document.write(`<ul>`)
    for (let i = 0; i< number; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
hardli ('wewewe', 3)

//8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let masik = [22,'sdsd',!!'sdsad','up'];
function lvlup (){
    document.write(`<ul>`)
    for(let i=0; i<masik.length; i++){
        document.write(`<li>${masik[i]}</li>`)
    }
    document.write(`</ul>`)
}
lvlup (masik);
//9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let pfizer = [{id:'vaa', name:'gulya',age:191},{id:'vaa', name:'gulya',age:191},{id:'vaa', name:'gulya',age:191},{id:'vaa', name:'gulya',age:191}];
function id (){
    for(let i = 0; i<pfizer.length; i++){
        document.write(`<div>${pfizer[i].id}${pfizer[i].name}${pfizer[i].age} </div>`)

    }

    for( const ziz of pfizer){
        document.write(`<div>${ziz.id}${ziz .name}${ziz.age} </div>`)
    }
}
id ();
 //**************************************************CW******CW********CW**********CW************************************
// 1- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)/

function num (n1,n2,n3){
    for( let i = 0; i < 1; i ++){
        if ( n1 < n2 && n1 < n3  ){
            document.write(`<div> ${n1}</div>`);
        }else if ( n2 < n1 && n2 < n3 ){
            document.write(`<div> ${n2}</div>`);
        }else if ( n3 < n1 && n3 < n2){
            document.write(`<div> ${n3}</div>`);
        }else {
            document.write(`<div> ${'!! 404'}</div>`);
        }
    }
}
num (21,22,100)
// 2 - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function num1 (n1,n2,n3){
    for( let i = 0; i < 1; i ++){
        if ( n1 > n2 && n1 > n3  ){
            document.write(`<div> ${n1}</div>`);
        }else if ( n2 > n1 && n2 > n3 ){
            document.write(`<div> ${n2}</div>`);
        }else if ( n3 > n1 && n3 > n2){
            document.write(`<div> ${n3}</div>`);
        }else {
            document.write(`<div> ${'!! 404'}</div>`);
        }
    }
}
num1 (1,22,100)
//3- створити функцію яка повертає найбільше число з масиву !!!!!!
let mamasik = [22,12,41,2,4,5];
function maxc (){
    let max = mamasik[0];
    for( const ert of mamasik){
        if( ert > max){
            max = ert;
        }
    }
    document.write(`${max}`)
    return max;
}
maxc ();

//4- створити функцію яка повертає найменьше число з масиву
let mmamasik = [22,12,41,2,4,5];
function minimum (){
    let min = mmamasik[0]
    for (const motmasik of mmamasik ){
        if(motmasik < min){
            min = motmasik;
        }
    }
    document.write(`<div>${ min }<div>`)
    return min;
}
minimum ()
// 5- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let mamasik2 = [22,12,5];

function sumik (){
    let c = 0;
    for ( let i = 0; i < mamasik2.length; i++){
        c += mamasik2[i];
    }
    document.write(`<div> ${c }</div>`)
    return c;
}
sumik ()
//6- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let mamasik3 = [22,12,5,11,2];
function serednye (){
    let it = 0;
    for( let i = 0; i < mamasik3.length; i++){
      it +=mamasik3[i] / mamasik3.length;
    }
    document.write(`<div> ${it}</div>`)
    return it;
}
serednye ()
//7- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let mamasik4 = [22,12,5,11,2];
function  chisla (){
    let miin = mamasik4[0];
    let maax = mamasik4[0];
   for ( const lila of mamasik4){
       if ( lila < miin){
           miin = lila ;
       } else if ( lila > maax){
           maax = lila;
       }
   }

   document.write(`<div> ${maax}</div>`)
    return miin;
}
chisla ()

//8 - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let mamasik5 = [];
function random (count,to){

    for ( let i = 0 ; i < count; i++){
    mamasik5.push(Math.round(Math.random()*to));
    }
    console.log(mamasik5);
}
random (11,23)
//9- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let mamasik6 = [];
function random2(from,limit){
    for ( let i = 0 ; i < limit; i++){
        mamasik6.push(Math.round(Math.random()*limit));
    }
    console.log(mamasik6);
}
random2(0,20)
//10- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let mamasik7 = [1,2,3,4,5];

function reverse (a){
    let mamasik8 = [];
    for ( let i = a.length -1 ; i >= 0; i --){
        mamasik8.push(a[i]);
    }
    console.log(mamasik8)
}
reverse (mamasik7)



