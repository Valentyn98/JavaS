// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let nameProd = document.getElementById('nameProd')
let countProd = document.getElementById('countProd')
let priceProd = document.getElementById('priceProd')
let imageProd = document.getElementById('imageProd')

let takebut = document.getElementById('but')
takebut.innerText = 'Додати'
 let pushArr = (name,count,price,image) =>{
    let packagePr = {
        name: name,
        count:count,
        price:price,
        image:image
    }
    let set = JSON.parse(localStorage.getItem('c')) || [];
     set.push(packagePr)
     localStorage.setItem('c',JSON.stringify(set))
 }
takebut.onclick = (e) =>{
    e.preventDefault()
    pushArr  (nameProd.value,countProd.value,priceProd.value,imageProd.value)
}




