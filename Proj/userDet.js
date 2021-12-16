// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)

let wrapUserDet = document.createElement('div')
document.body.appendChild(wrapUserDet)
let users = JSON.parse(localStorage.getItem('keykey'))

for( let usersEl of users){
    let blockUs = document.createElement('div')

    let usId = document.createElement('div')
    usId.innerText = `${usersEl.id}`
    let usName = document.createElement('div')
    usName.innerText = `${usersEl.name}`
    let usUsername = document.createElement('div')
    usUsername.innerText = `${usersEl.username}`
    let usEmail = document.createElement('div')
    usEmail.innerText = `${usersEl.email}`
    let blockAddress = document.createElement('div')


    for (let addElem in usersEl.address){
if(usersEl.address[addElem] !== usersEl.address.geo){
     let addElemBlock = document.createElement('div')
    blockAddress.appendChild(addElemBlock)

    let itemAdd = document.createElement('div')
    addElemBlock.appendChild(itemAdd)

    itemAdd.innerText = `${usersEl.address.street}`//[addElem]
    }

    }
    blockUs.append(usId,usName,usUsername,usEmail,blockAddress)
    wrapUserDet.append(blockUs)
}