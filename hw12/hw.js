
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (response) {
//         let jsonB = response.json();
//         return jsonB;
//     }).then(users => {
//     let fathBlock = document.createElement('div')
//     document.body.appendChild(fathBlock)
//     fathBlock.classList.add('fatbl')
//
//             for (let us of users){
//                 let mom = document.createElement('div')
//                 fathBlock.appendChild(mom)
//                 mom.classList.add('mom')
//                 let divid = document.createElement('div')
//                 mom.appendChild(divid)
//
//
//                 let divtitle = document.createElement('div')
//                 mom.appendChild(divtitle)
//
//                 let divbody = document.createElement('div')
//                 mom.appendChild(divbody)
//
//
//                 divid.innerText = `ID: ${us.id}`
//                 divtitle.innerText =  `Title: ${us.title}`
//                 divbody.innerText = `Body: ${us.body}`
//
//             }
//     });

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(function (res){
    let xBet = res.json();
    return xBet;
}).then(ous =>{
let blComm = document.createElement('div')
    document.body.appendChild(blComm)
    blComm.classList.add('blComm')
    for (let ui of ous){

        let korner = document.createElement('div')
        korner.classList.add('kornik')
        blComm.appendChild(korner)

        let chPost  = document.createElement('div')
        korner.appendChild(chPost)
        chPost.classList.add('chPost')

        let chId = document.createElement('div')
        korner.appendChild(chId)
        chId.classList.add('chId')

        let chName = document.createElement('div')
        korner.appendChild(chName)
        chName.classList.add('chName')

        let a = document.createElement('a')
        a.setAttribute('href', '#');
        korner.appendChild(a)
        a.classList.add('a')

        let chEmail = document.createElement('div')
        a.appendChild(chEmail)
        chEmail.classList.add('chEmail')

        let chBody = document.createElement('div')
        korner.appendChild(chBody)
        chBody.classList.add('chBody')



        chPost.innerText = `postID: ${ui.postId}`
        chId.innerText = `id: ${ui.id}`
        chName.innerText = `${ui.name}`
        chEmail.innerText = `email: ${ui.email}`
        chBody.innerText = `body: ${ui.body}`
    }
})

// *********************************************************CWW
// *********************************************************CWW
// *********************************************************CWW
// *********************************************************CWW

// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста