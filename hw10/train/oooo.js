

// //1
//
//
// let dForForm = document.createElement('div')
// document.body.appendChild(dForForm);
// //form1
// let oneFo = document.createElement('form')
// dForForm.appendChild(oneFo);
// oneFo.setAttribute('name', 'oneFo')
//
// let inFooneOne = document.createElement('input')
// oneFo.appendChild(inFooneOne)
// inFooneOne.setAttribute('name' ,'inFooneOne')
//
// let inFooneTwo = document.createElement('input')
// oneFo.appendChild(inFooneTwo)
// inFooneTwo.setAttribute('name', 'inFooneTwo')
//
// //form2
// let twoFo = document.createElement('form')
// dForForm.appendChild(twoFo);
// twoFo.setAttribute('name', 'twoFo')
//
// let inFoTwoOne = document.createElement('input')
// twoFo.appendChild(inFoTwoOne)
// inFoTwoOne.setAttribute('name', 'inFoTwoOne')
//
// let inFoTwoTwo = document.createElement('input')
// twoFo.appendChild(inFoTwoTwo)
// inFoTwoTwo.setAttribute('name', 'inFoTwoTwo')
//
// //but
// let butF = document.createElement('button')
// butF.innerText = 'take'
// butF.style.width = '35px'
// document.body.appendChild(butF)
//
// //action
// butF.addEventListener('click', function(){
//     console.log(document.forms.oneFo.inFooneOne.value);
//     console.log(document.forms.oneFo.inFooneTwo.value);
//     console.log(document.forms.twoFo.inFoTwoOne.value);
//     console.log(document.forms.twoFo.inFoTwoTwo.value);
// })



//2

// let dForForm = document.createElement('div')
// document.body.appendChild(dForForm)

// let firInp = document.createElement('input')
// dForForm.appendChild(firInp)
// firInp.setAttribute('name','firInp')

// let secInp = document.createElement('input')
// dForForm.appendChild(secInp)
// secInp.setAttribute('name','secInp')

// let thirInp = document.createElement('input')
// dForForm.appendChild(thirInp)
// thirInp.setAttribute('name','thirInp')

// let buttwo = document.createElement('button')
// dForForm.appendChild(buttwo)
// buttwo.innerText = 'Create'

// buttwo.addEventListener('click', function(){
//     let ryadki = firInp.value
//     let boxi = secInp.value
//     let info =  thirInp.value

//     let tabl = document.createElement('table')
//     document.body.appendChild(tabl)

//     function table (ryadki,boxi,info){
//         // for (let i = 0; i < ryadki; i++){

//         // }
//         for ( let i = 0; i < ryadki; i++ ){
//             let tr = document.createElement('tr')
//             tabl.appendChild(tr)
//             tr.innerText = 'Кількість полів: ' + boxi
//             tr.style.border = '2px solid black'
//         for ( let i = 0; i< boxi; i++){
//             let td = document.createElement('td')
//             tr.appendChild(td)
//             td.innerText = 'Інформація: ' + info
//             td.style.border = '2px solid black'

//     tabl.style.width = '220px'
//     tabl.style.background = 'gold'

//         }
//     }
//     }
//     table (ryadki,boxi,info)
// })




//3
// let arr = ['Хотілось тут фразу з батла Оксі взяти','Погане слово','Утка']
// let inpBadW = document.createElement('input')
// document.body.appendChild(inpBadW)

// let badWoCheck = document.createElement('button')
// document.body.appendChild(badWoCheck)
// badWoCheck.innerText = 'BADWCHECK'

// badWoCheck.addEventListener('click', function (){
//     let badW = inpBadW.value
//     for (const badWorld of arr){
//         if (badW  === badWorld ){
//             alert ("бери кірпіч та йди у піч")
//             return inpBadW.value = ''; // цю строчку безжально скатав ( але я запам*ятав)
            
//         }
//     }
// })

// 4
//  let arr = ['Хотілось тут фразу з батла Оксі взяти','Погане слово','Утка']

//  let input = document.createElement('input')
//  document.body.appendChild(input)


//  let button = document.createElement('button')
//  document.body.appendChild(button)
//  button.style.width = '45px'
//  button.innerText = 'down'

//  button.addEventListener('click' , function (){
//     let text = input.value;

//     for (const word of arr){
//          let slova = word.split(' ')
//          for ( const b of slova){
//              if (b === text){
//                  alert('nenene')
//                  return input.value = '';
//              }
//          }
//     }


//  })




//***********************ADDITIONAL*************************
//***********************ADDITIONAL*************************
//***********************ADDITIONAL*************************
// 1- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.body.onclick = function (event){

//   console.log('Назва тегу: ' + `${event.target.localName}` + ' ' 
//   +'Вміст класів: ' + `${event.target.classList}` + ' ' + 'Список айді: ' + `${event.target.id}` + ' ' + 'Розміри ш,в: ' + `${event.target.scrollHeight } ${event.target.scrollWidth}` )
// }



//2- Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
// При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
// Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина


// document.body.onclick = function (event){
// let block = document.getElementsByClassName('bck')[0]
// block.classList.toggle('none')
// let place = document.getElementsByClassName('info')[0]
// place.innerText = 'Назва тегу: ' + `${event.target.localName}` + ' ' 
//   +'Вміст класів: ' + `${event.target.classList}` + ' ' + 'Список айді: ' + `${event.target.id}` + ' ' + 'Розміри ш,в: ' + `${event.target.scrollHeight } ${event.target.scrollWidth}` 

// }

// let b = document.getElementsByClassName('btn')[0]
// b.addEventListener('click',function(){
//     let block = document.getElementsByClassName('bck')
//     block.style.display = 'none'
// }

// )

//3 взять масси польз
//создать ти чекбокса каждый из них активирует фильтр для вышеуказаного мас
//фильты могут рабоать как вместе так и отдельно 

let usersWithAddress = [
  {id:1,name:'vasya', age:31, status: false, address: {
    city: 'Lviv', street: 'Shevchenko', number:16
  }},
    {id:2,name:'petya', age:30, status: false, address: {
    city: 'Lviv', street: 'Shevchenko', number:1
  }},
  {id:1,name:'vasya', age:31, status: true, address: {
    city: 'Lviv', street: 'Shevchenko', number:16
  }},
    {id:2,name:'petya', age:20, status: true, address: {
    city: 'Kyiv', street: 'Shevchenko', number:3
  }}
]




// function isChecked (usersWithAddress) {
//  if(document.getElementById('stat').checked){
//    for ( let firstsort of usersWithAddress){
//         console.log(firstsort)
//    }
//  }

// }
// isChecked (usersWithAddress)

// function f (){
//
// let stat = document.getElementById('stat')
// let ag = document.getElementById('ag')
// let ccity = document.getElementById('city')
//
//
// stat.addEventListener('click', function(){
//   for(let filtone of usersWithAddress ){
//     if(filtone.status !== false){
//
//     }
//   }
// })
//
// ag.addEventListener('click', function(){
//   for (let filtwo of usersWithAddress){
//     if(filtwo.age > 29){
//
//     }
//   }
// })
//
// ccity.addEventListener('click', function(){
//   for (let fitthre of usersWithAddress){
//       for (let keys in fitthre.address){
//         if(fitthre.address[keys] === 'Kyiv'){
//           return fitthre
//         }
//       }
//   }
// })
// }
//
// f ()
// if (fitthre.city = 'Kyiv'){
//   console.log(fitthre)
// }



