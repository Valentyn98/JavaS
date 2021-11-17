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
 return kol;
 // console.log(kol);
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
