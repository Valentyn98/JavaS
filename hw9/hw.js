// Все робити за допомоги js.
// -1 створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// -2 додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// -3 додати цей блок в body.
// -4 клонувати його повністю, та додати клон в body.
//
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

// -1 створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
let divv = document.createElement('div');
divv.classList.add('wrap','alpha','beta');
//або
divv.classList.toggle('collapse');
// -2 додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
divv.style.background = 'aliceblue'
divv.innerText = 'пппппппппппппппппп'
divv.style.width = '200px'
divv.style.height = '200px'
divv.style.fontSize = '20px'
divv.style.color = 'purple'
// -3 додати цей блок в body.
document.body.appendChild(divv)
// -4 клонувати його повністю, та додати клон в body.
let clonediv = divv.cloneNode(true)
document.body.appendChild(clonediv)
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let m = document.getElementsByClassName('menu')[0]
let arr1 = ['Main','Products','About us','Contacts']
    for ( let i = 0; i < arr1.length; i++ ){
        let drop = document.createElement('li')
        drop.innerText = arr1[i];
        m.appendChild(drop)

    }

// - Є масив
let arr2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// for (const types of arr2){
//     for (const ftypes in  types){
//         let box = document.createElement('div')
//         document.body.appendChild(box)
//         box.innerText = types[ftypes];
//         box.style.background = 'pink'
//         box.style.border= '1px solid'
//         box.style.width= '100px'
//     }
// }
for (const types of arr2){
    // for (const ftypes in  types.title){
        let box = document.createElement('div')
        document.body.appendChild(box)
        box.innerText = types.title + " " + types.monthDuration; //ВТОРОЙ ВАРИАНТ

        box.style.background = 'pink'
        box.style.border= '1px solid'
        box.style.width= '100px'
    // }
}

// - Є масив
let arr3 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (const types of arr3){
    for (const ftypes in  types){
        let boxx = document.createElement('div')
        document.body.appendChild(boxx)
        let h1 = document.createElement('h1')
        let pi = document.createElement('p')
        document.div.appendChild('h1')
        document.h1.appendChild('pi')
        document.pi.appendChild(types[ftypes])
        // box.innerText = types[ftypes];

    }
}


