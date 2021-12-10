
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
        let jsonB = response.json();
        return jsonB;
    }).then(users => {
    let fathBlock = document.createElement('div')
    document.body.appendChild(fathBlock)
    fathBlock.classList.add('fatbl')

            for (let us of users){
                let mom = document.createElement('div')
                fathBlock.appendChild(mom)
                mom.classList.add('mom')
                let divid = document.createElement('div')
                mom.appendChild(divid)


                let divtitle = document.createElement('div')
                mom.appendChild(divtitle)

                let divbody = document.createElement('div')
                mom.appendChild(divbody)


                divid.innerText = `ID: ${us.id}`
                divtitle.innerText =  `Title: ${us.title}`
                divbody.innerText = `Body: ${us.body}`

            }
    });

// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
.then(function (res){
    let xBet = res.json();
    return xBet;
}).then(ous =>{

    for (let ui of ous){
        console.log(ui)
    }
})