// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
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


fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (res){
        let take = res.json();
        return take;
    }).then(func => {

        let wrap = document.createElement('div')
        document.body.appendChild(wrap)

        wrap.style.width = '100%'
        wrap.style.height = '100%'
        wrap.style.background = '#81d4fa'

        let child_wrap = document.createElement('div')
        wrap.appendChild(child_wrap)

        child_wrap.style.width = '600px'
        child_wrap.style.height = '1025px'
        child_wrap.style.margin = '0 auto'
        child_wrap.style.display = 'flex'
        child_wrap.style.flexWrap = 'wrap'
        child_wrap.style.alignItems = 'center'

        for (let take_obj of func){
            let user_wrap = document.createElement('div')

        user_wrap.innerText = `${take_obj.id} : ${take_obj.name}`
            user_wrap.style.width = '300px'
            user_wrap.style.height = '30px'
            user_wrap.style.fontWeight = 'bold'
            user_wrap.style.fontSize = '20px'
        let but = document.createElement('button')
            but.innerText = "Detail info"

            but.style.border = 'none'
            but.style.width = '300px'
            but.style.height = '50px'
            but.style.borderRadius = '30px'
            but.style.color = '#777'
            but.style.fontWeight = 'bold'
            but.style.fontSize = '20px'


        but.onclick = () =>{
            document.location.href = 'userDet.html'
            let set = JSON.parse(localStorage.getItem('keykey')) || [];
            set.push(take_obj)
            localStorage.setItem('keykey',JSON.stringify(set))
            but.disabled = true
        }

            child_wrap.append(user_wrap,but)
    }

})


