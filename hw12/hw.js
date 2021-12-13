
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

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(function (res){
//     let xBet = res.json();
//     return xBet;
// }).then(ous =>{
// let blComm = document.createElement('div')
//     document.body.appendChild(blComm)
//     blComm.classList.add('blComm')
//     for (let ui of ous){
//
//         let korner = document.createElement('div')
//         korner.classList.add('kornik')
//         blComm.appendChild(korner)
//
//         let chPost  = document.createElement('div')
//         korner.appendChild(chPost)
//         chPost.classList.add('chPost')
//
//         let chId = document.createElement('div')
//         korner.appendChild(chId)
//         chId.classList.add('chId')
//
//         let chName = document.createElement('div')
//         korner.appendChild(chName)
//         chName.classList.add('chName')
//
//         let a = document.createElement('a')
//         a.setAttribute('href', '#');
//         korner.appendChild(a)
//         a.classList.add('a')
//
//         let chEmail = document.createElement('div')
//         a.appendChild(chEmail)
//         chEmail.classList.add('chEmail')
//
//         let chBody = document.createElement('div')
//         korner.appendChild(chBody)
//         chBody.classList.add('chBody')
//
//
//
//         chPost.innerText = `postID: ${ui.postId}`
//         chId.innerText = `id: ${ui.id}`
//         chName.innerText = `${ui.name}`
//         chEmail.innerText = `email: ${ui.email}`
//         chBody.innerText = `body: ${ui.body}`
//     }
// })

// *********************************************************CWW
// *********************************************************CWW
// *********************************************************CWW
// *********************************************************CWW





// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(function (classw){
//         let nyiny = classw.json();
//         return nyiny;
//     }).then(lop =>{
//     let wrap = document.createElement('div')
//     document.body.appendChild( wrap)
//     wrap.classList.add('wrap')
//
//     for (let tap of lop) {
//         let block = document.createElement('div')
//         wrap.appendChild(block)
//
//         let chPos = document.createElement('div')
//         block.appendChild(chPos)
//         chPos.classList.add('chPos')
//
//         let chI = document.createElement('div')
//         block.appendChild(chI)
//         chI.classList.add('chI')
//
//         let chTit = document.createElement('div')
//         block.appendChild(chTit)
//         chTit .classList.add('chTit')
//
//         let chBod = document.createElement('div')
//         block.appendChild(chBod)
//         chBod.classList.add('chBod')
//
//         chPos.innerText = `postID: ${tap.userId}`
//         chI.innerText = `id: ${tap.id}`
//         chTit.innerText = `${tap.title}`
//             chBod.innerText = `body: ${tap.body}`
//
//         let but = document.createElement('button')
//         block.appendChild(but)
//         but.onclick = () => {
//             fetch('https://jsonplaceholder.typicode.com/comments')
//                 .then(function (res){
//                     let xBet = res.json();
//                     return xBet;
//                 }).then(ous =>{
//                 for (let comment of ous){
//                     if(tap.id === comment.id) {
//                         let korner = document.createElement('div')
//                         korner.classList.add('kornik')
//                         block.append(korner)
//                         let a = document.createElement('div')
//                         korner.appendChild(a)
//                         a.innerText = `ID: ${comment.id}`
//                         let b=document.createElement('div')
//                         korner.appendChild(b)
//                         b.innerText = `${comment.name}`
//                         let c=document.createElement('div')
//                         korner.appendChild(c)
//                         c.innerText = `${comment.email}`
//                         let d =document.createElement('div')
//                         korner.appendChild(d)
//                         d.innerText = ` ${comment.body}`
//                     }
//                     but.disabled = true;
//                 }
//             })
//
//         }
//     }
// })


// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
// © 2021 GitHub, Inc.
//     Terms
// Privacy
// Security
// Status
// Docs
// Contact GitHub
// Pricing
// API
// Trai

fetch('https://jsonplaceholder.typicode.com/users')
.then(function (res){
    let take = res.json();
    return take;
}).then(func => {
    let wr = document.createElement('div')
    document.body.appendChild(wr)
    wr.style.background = 'pink'
    for ( let in1 of func){
        let wr0 = document.createElement('div')
        wr.appendChild(wr0)

        let z =document.createElement('div')
        wr0.appendChild(z)
        z.innerText = `id: ${in1.id}`

        let x =document.createElement('div')
        wr0.appendChild(x)
        x.innerText = `name: ${in1.name}`

        let c =document.createElement('div')
        wr0.appendChild(c)
        c.innerText = `username: ${in1.username}`

        let b =document.createElement('div')
        wr0.appendChild(b)
        b.innerText = `email: ${in1.email}`
        for (let in2 in in1.address){
if (in1.address[in2] !== in1.address.geo) {
    let wrap2 = document.createElement("div")
    wr.appendChild(wrap2)

    let n1 = document.createElement('div')
    wrap2.appendChild(n1)

    n1.innerText = `${in2} : ${in1.address[in2]}`
        } else {
    for (let in3 in in1.address.geo) {
        let wrap3 = document.createElement('div')
        wr.appendChild(wrap3)
        let n2 = document.createElement('div')
        wrap3.appendChild(n2)
        n2.innerText = `${in1.address.geo[in3]}`
        }
    }
        }
        let m =document.createElement('div')
        wr0.appendChild(m)
        m.innerText = `phone: ${in1.phone}`

        let l =document.createElement('div')
        wr0.appendChild(l)
        l.innerText = `website: ${in1.website}`

        let k =document.createElement('div')
        wr0.appendChild(k)


        for (let in11 in  in1.company){
            let wrap4 = document.createElement('div')
            wr0.appendChild(wrap4)
            let companybl = document.createElement('div')
            wrap4.appendChild(companybl)
            companybl.innerText = `${in11} : ${in1.company[in11]}`
        }

      let but = document.createElement('button')
        wr0.appendChild(but)
        but.onclick = () =>{

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (classw){
        let nyiny = classw.json();
        return nyiny;
    }).then(lop =>{
    let wrap = document.createElement('div')
    wr0.appendChild(wrap)
    wrap.classList.add('wrap')
    wrap.style.background = 'blue'
    for (let tap of lop) {
        if ( in1.id === tap.id){
        let block = document.createElement('div')
        wrap.appendChild(block)

        let chPos = document.createElement('div')
        block.appendChild(chPos)
        chPos.classList.add('chPos')

        let chI = document.createElement('div')
        block.appendChild(chI)
        chI.classList.add('chI')

        let chTit = document.createElement('div')
        block.appendChild(chTit)
        chTit .classList.add('chTit')

        let chBod = document.createElement('div')
        block.appendChild(chBod)
        chBod.classList.add('chBod')

        chPos.innerText = `postID: ${tap.userId}`
        chI.innerText = `id: ${tap.id}`
        chTit.innerText = `${tap.title}`
            chBod.innerText = `body: ${tap.body}`

        let butt = document.createElement('button')
        block.appendChild(butt)
        butt.onclick = () => {
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(function (res){
                    let xBet = res.json();
                    return xBet;
                }).then(ous =>{
                for (let comment of ous){
                    if(tap.id === comment.id) {
                        let korner = document.createElement('div')
                        korner.classList.add('kornik')
                        block.append(korner)
                        korner.style.background = 'yellow'
                        let a = document.createElement('div')
                        korner.appendChild(a)
                        a.innerText = `ID: ${comment.id}`
                        let b=document.createElement('div')
                        korner.appendChild(b)
                        b.innerText = `${comment.name}`
                        let c=document.createElement('div')
                        korner.appendChild(c)
                        c.innerText = `${comment.email}`
                        let d =document.createElement('div')
                        korner.appendChild(d)
                        d.innerText = ` ${comment.body}`
                    }
                    butt.disabled = true;
                }
            })

        }

        }
    }
})
        }
}

})













