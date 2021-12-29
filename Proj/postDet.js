// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
let wrapPostDet = document.createElement('div')
document.body.appendChild(wrapPostDet)
let posts = JSON.parse(localStorage.getItem('y'))

for ( let takeBlockPost of posts ){
    let b_post = document.createElement('div')
    wrapPostDet.appendChild(b_post)
    b_post.innerHTML = `
        <div class="id"> ${takeBlockPost.id} </div>
        <div class="title"> ${takeBlockPost.title} </div>
        <div class="body"> ${takeBlockPost.body} </div>
           `
    let showComm = document.createElement('button')
    b_post.appendChild(showComm)
    showComm.innerText = 'Показати всі коменти'
    showComm.onclick = () =>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(function (com){
                let take = com.json();
                return take;
            }).then(funcComm => {
            for (let takeComm of funcComm ){
                if (takeBlockPost.id === takeComm.postId){
                    let blockComm = document.createElement('div')
                    b_post.appendChild(blockComm)
                    blockComm.innerHTML = `
                                    <div>${takeComm.postId}</div>
                                    <div>${takeComm.id}</div>
                                    <div>${takeComm.name}</div>
                                    <div>${takeComm.email}</div>
                                    <div>${takeComm.body}</div>
                                    `
                }
            }
        })
        showComm.disabled = true
    }

}
let butClear = document.createElement('button')
document.body.appendChild(butClear )
butClear.innerText = 'Чистим'
butClear.onclick = () =>{
    localStorage.clear()
    location.reload()
}