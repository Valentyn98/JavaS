let listItem = document.createElement('div')
document.body.appendChild(listItem)

let items = JSON.parse(localStorage.getItem('c'))
for (let item of  items){

    let nm = document.createElement('div')
        listItem.appendChild(nm)
        nm.innerText = `${item.name}`
        let butnm = document.createElement('button')
        nm.appendChild(butnm)
        butnm.style.margin = '10px'
        butnm.innerText = 'Видалити'

        let cn = document.createElement('div')
        listItem.appendChild(cn)
        cn.innerText = `${item.count}`
        let butcn = document.createElement('button')
        cn.appendChild(butcn)
        butcn.style.margin = '10px'
        butcn.innerText = 'Видалити'

        let pc = document.createElement('div')
        listItem.appendChild(pc)
        pc.innerText = `${item.price}`
        let butpc = document.createElement('button')
        pc.appendChild(butpc)
        butpc.style.margin = '10px'
        butpc.innerText = 'Видалити'

        let ig = document.createElement('div')
        listItem.appendChild(ig)
        ig.innerText = `${item.image}`
        let butig = document.createElement('button')
        ig.appendChild(butig)
        butig.style.margin = '10px'
        butig.innerText = 'Видалити'
        butig.onclick = () => {
            butig.onclick = function () {
                localStorage.removeItem('',);

            }

        }
}

let fuldel = document.createElement('button')
document.body.appendChild(fuldel)
fuldel.innerText = 'Видалити все'
fuldel.onclick = () =>{
    localStorage.clear();
    location.reload()
}
