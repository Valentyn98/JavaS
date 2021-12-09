

let keykey = 'r'
let block = document.createElement('div')
document.body.appendChild(block )
let informa = JSON.parse(localStorage.getItem(keykey))

for ( let k of informa){
    let block1 = document.createElement('div')
    block.appendChild(block1)
    block1.innerText = `Name: ${k.name} Age: ${k.age} Status: ${k.status}`;}