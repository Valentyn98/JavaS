// На странице user-details.html:
// V4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// v5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// v(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
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

let wrap = document.createElement('div')
document.body.appendChild(wrap)
wrap.style.width = '100%'
wrap.style.height = '100%'
wrap.style.backgroundColor = '#81d4fa'
wrap.style.display = 'flex'
let wrapUserDet = document.createElement('div')
wrap.appendChild(wrapUserDet)
wrapUserDet.style.width = '500px'
wrapUserDet.style.height = '0px auto'

let wrapPost = document.createElement('div')
wrap.appendChild(wrapPost)
wrapPost.style.width = '650px'
wrapPost.style.height = '300px'
wrapPost.style.lineHeight = '30px'
wrapPost.style.fontWeight = 'bold'
let users = JSON.parse(localStorage.getItem('keykey'))

for( let usersEl of users){
    let blockUs = document.createElement('div')
    wrapUserDet.append(blockUs)
    let usId = document.createElement('div')
    usId.innerText =  `id: ${usersEl.id}`
    let usName = document.createElement('div')
    usName.innerText = `name: ${usersEl.name}`
    let usUsername = document.createElement('div')
    usUsername.innerText = `username: ${usersEl.username}`
    let usEmail = document.createElement('div')
    usEmail.innerText = `email: ${usersEl.email}`


    for (let addElem in usersEl.address){
if(usersEl.address[addElem] !== usersEl.address.geo){
     let addElemBlock = document.createElement('div')
    wrapUserDet.appendChild(addElemBlock)

    let itemAddst = document.createElement('div')
    addElemBlock.appendChild(itemAddst)

    itemAddst.innerText = ` ${addElem} : ${usersEl.address[addElem]}`//[addElem]
    }else {

    for (let inpgeo in usersEl.address.geo ){
        let inpgoeit = document.createElement('div')
        wrapUserDet.appendChild(inpgoeit)

        inpgoeit.innerText =`${inpgeo} : ${usersEl.address.geo[inpgeo]}`
     }
}
    }
    let phonWebBlock = document.createElement('div')
    wrapUserDet.append(phonWebBlock)

    let usUserphone = document.createElement('div')
    phonWebBlock.appendChild(usUserphone)

    usUserphone.innerText = `${usersEl.phone}`

    let uswebsite = document.createElement('div')
    phonWebBlock.appendChild(uswebsite)

    uswebsite.innerText = `${usersEl.website}`

    for ( let company in usersEl.company ){
        let blockComp = document.createElement('div')
        wrapUserDet.append(blockComp)
        blockComp.innerText = `${company} : ${usersEl.company[company]}`
    }
    blockUs.append(usId,usName,usUsername,usEmail)

    let show_post = document.createElement('button')
    wrapUserDet.appendChild(show_post)
    show_post.innerText = "ПОКАЗУЄ ПОСТ"
    show_post.style.border = 'none'
    show_post.style.width = '200px'
    show_post.style.height = '40px'
    show_post.style.borderRadius = '30px'
    show_post.style.color = '#777'
    show_post.style.fontWeight = 'bold'
    show_post.style.fontSize = '15px'
    show_post.onclick = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(function (post){
                let take_post = post.json();
                return take_post;
        }).then(func =>{
            for ( let block_post of func ){
                if (usersEl.id === block_post.userId){
                    let blo_po = document.createElement('div')
                    wrapPost.appendChild(blo_po)
                    blo_po.style.display = 'flex'
                    blo_po.style.justifyContent = 'space-between'

                    blo_po.innerText = `${block_post.title}`
                    let post_details = document.createElement('button')
                    blo_po.appendChild(post_details)

                    post_details.innerText = 'Post details'
                    post_details.style.border = 'none'
                    post_details.style.width = '100px'
                    post_details.style.height = '20px'
                    post_details.style.borderRadius = '10px'
                    post_details.style.color = '#777'
                    post_details.style.fontSize = '10px'

                    post_details.onclick = () =>{
                        document.location.href = "postDet.html"
                        let postDetails = JSON.parse(localStorage.getItem('y')) || []
                        postDetails.push(block_post)
                        localStorage.setItem('y', (JSON.stringify(postDetails)))
                    }
                }
            }
        })
        show_post.disabled = true
    }

}

















let butClear = document.createElement('button')
document.body.appendChild(butClear )
butClear.innerText = 'Чистим'
butClear.onclick = () =>{
    localStorage.clear()
    location.reload()
}









