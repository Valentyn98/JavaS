//*********************************HOME


// 1.-створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let name = document.getElementById('n')
// let age = document.getElementById('a')
// let but = document.getElementById('btn')
// let k = 'b';
// let con = (name,age) =>{
//     let obj = {
//         name : name,
//         age : age
//     }
//     localStorage.setItem(k,(JSON.stringify(obj)))
// }
// but.onclick = () => {
//     con (name.value, age.value);
// }

// 2.-створити форму з інпутами для c,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.


let model = document.getElementById('mod')
let type = document.getElementById('typ')
let volume = document.getElementById('vol')
let bbb = document.getElementById('b')
let k = 'key';
let arr = []
let pushArr = (model,type,volume) => {
    let objtwo = {
                model : model,
                type:type,
                volume:volume
                }
        arr.push(objtwo)
    localStorage.setItem(k,(JSON.stringify(objtwo)))
}
bbb.onclick = () =>{
    pushArr (model.value,type.value,volume.value)
}




//**********************************CLASS
// 1. є масив -
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.