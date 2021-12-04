// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.


// 1- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let proizvol =  document.createElement('div')
// document.body.appendChild(proizvol)
// proizvol.innerText = 'Proizvol'
//
// let but = document.createElement('button')
// document.body.appendChild(but)
// but.innerText = 'BB'
//
// but.addEventListener('click', function (){
//     proizvol.style.display = 'none'
// })
// // 2- Создайте кнопку, при клике на которую, она будет скрывать сама себя.
//
// let butTwo = document.createElement('button')
// document.body.appendChild(butTwo)
// butTwo.innerText = 'Butbut'
//
//
// butTwo.addEventListener('click', function (){
//     butTwo.style.display = 'none'
// })
// 3- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let formss = document.createElement('form')
// document.body.appendChild(formss)
// formss.classList = 'forma'
// let input = document.createElement('input')
// formss.appendChild(input)
//
// let butThree = document.createElement('button')
// formss.appendChild(butThree)
// butThree.innerText = 'booo'
// document.forms.onsubmit = function (e){
//     e.preventDefault()
// }


document.getElementById('button1').onclick = function (){
    let age =  document.getElementById('age').value;
        if ( age < 18 || !age){
            alert('kush');
        }else if( age > 18){
            alert('Просимо');
        }

}

// -4 Создайте меню, которое раскрывается/сворачивается при клике
// let menu = document.getElementsByClassName('menumenu')[0]
// let butm = document.getElementById('but_menu')
//
// butm.addEventListener('click', function (){
//     menu.classList.toggle('menumenu');
// })

// 5- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.-->
//     Вывести список комментариев в документ, каждый в своем блоке.-->
//     Добавьте каждому комментарию по кнопке для сворачивания его body.-->

let docs = [
    {title : 'Ромашка', body:'Белые листочки'},
    {title : 'Чашка', body:'Банка с Ручкой'},
    {title : 'Неон', body:'Газ и електрика'},
    {title : 'Рубашка', body:'Футболка с рукавами'}
]
let head = document.createElement('div')
document.body.appendChild(head)

for ( let blockdiv of docs ){
     let divf = document.createElement('div')
    head.appendChild(divf)
    divf.classList = 'cld'
    let pif = document.createElement('p')
    divf.appendChild(pif)
    let hp = document.createElement("h1")
    divf.appendChild(hp)
     let butf = document.createElement('button')
    head.appendChild(butf)
    butf.style.width = '40px'
    butf.style.height = '20px'
    butf.innerText = 'Hide'


    hp.innerText = blockdiv.title
    pif.innerText = blockdiv.body


    butf.addEventListener('click',function (){
        divf.classList.toggle('cld')
        }

    )
}







