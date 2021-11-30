// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
// c) робить шириниу всіх елементів з класом linkList шириною 50%
// d) отримує текст який зберігається в елементі з класом listElement2
// e) отримує всі елементи li та змінює ім колір фону на сірий
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// l) отримати елементи p та змінити їм padding на 20px
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)


// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
document.getElementById('main_header').className = 'sep-2021'
// b) робить шириниу елементу ul 400px
let wdt = document.getElementsByTagName('ul')
changewdth = wdt[0]
changewdth.style.width = '400px'
changewdth.style.background = 'yellow'
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList')
for ( const linkListwdt of linkList ){
    linkListwdt.style.width = '50%'
    // linkListwdt.style.background = 'green'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let getText = document.getElementsByClassName('listElement2')
console.log(getText)
// e) отримує всі елементи li та змінює ім колір фону на сірий
let chcolgrey = document.getElementsByTagName('li')
for ( const grey of chcolgrey ){
    grey.style.background = 'grey'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let anchor = document.getElementsByTagName('a')
for ( const black of anchor ){
    black.className = 'anchor'
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let allAelem = document.getElementsByTagName('a')//PROBLEM
 for (const ac  of allAelem ){
     if (ac.innerText.includes('link3')){
         ac.style.fontSize = '40px'
     }
 }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let hAllAEll = document.getElementsByTagName('a')
for ( const newclassForA of hAllAEll){
    newclassForA.className = 'element_XXX'
    newclassForA.innerText='XXX'
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subheader = document.getElementsByClassName('sub-header')
let tecolor = prompt('Color')
for (const subheaderPhone of subheader){
    subheaderPhone.style.background = tecolor;

}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment
// . Колір отримати з prompt()
let sub_header = document.getElementsByClassName('sub-header')
let color = prompt('Color')
for (let info_sub_header of sub_header){
    if (info_sub_header.innerHTML.includes('content 2 segment')){
        info_sub_header.style.color = color
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let cont = document.getElementsByClassName('content_1')
let text = prompt('entered text')
// for ( const conten_one of cont){
//     conten_one.innerText = 'ttt'
// }
let content_1 = cont[0];
content_1.innerText = text
// l) отримати елементи p та змінити їм padding на 20px
let elP = document.getElementsByTagName('p')
for (let boxp of elP){
    boxp.style.padding = '20px'
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elemTextTwo = document.getElementsByClassName('text2')
let resElemTextTwo = elemTextTwo[0]
resElemTextTwo.innerText = 'dsdsadasd'