// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -1- отримує текст з параграфа з id "content"
// -2- отримує текст з блоку з id "rules"
// -3- замініть текст параграфа з id 'content' на будь-який інший
// -4- замініть текст параграфа з id 'rules' на будь-який інший
// -5- змініть кожному елементу колір фону на червоний
// -6- змініть кожному елементу колір тексту на синій
// -7- отримати весь список класів елемента з id=rules і вивести їх в console.log
// -8- поміняти колір тексту у всіх елементів fc_rules на червоний

// -1- отримує текст з параграфа з id "content"
let content = document.getElementById('content')
console.log(content);
// -2- отримує текст з блоку з id "rules"
let rules = document.getElementById('rules')
console.log(rules)
// -3- замініть текст параграфа з id 'content' на будь-який інший
let recontent = document.getElementById('content')
recontent.innerText='new text content';
console.log(recontent)
// -4- замініть текст параграфа з id 'rules' на будь-який інший
let rerules = document.getElementById('rules')
rerules.innerText='new text rules'
console.log(rerules)
// -5- змініть кожному елементу колір фону на червоний
let setcolorf = document.getElementsByTagName("body")
// let changefon = setcolorf[0]
// changefon.style.background = 'red'
//АБО
for ( const chanFon of setcolorf){
    chanFon.style.background = 'red'
}

// -6- змініть кожному елементу колір тексту на синій
let setcolor = document.getElementsByTagName("body")
let changefont = setcolor[0]
changefon.style.color = 'blue'
// -7- отримати весь список класів елемента з id=rules і вивести їх в console.log
let targ = document.getElementById('rules')
    console.log(targ)
// -8- поміняти колір тексту у всіх елементів fc_rules на червоний
let fcrls = document.getElementsByClassName('fc_rules')
for ( const changesRul of fcrls){
    changesRul.style.color = 'red'
}



