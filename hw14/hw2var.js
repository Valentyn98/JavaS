



function sleep (sleep){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (sleep){
                resolve('spit ok')

            }else {
                reject('ne mogu');
            }
        },100)
    })
}

function myNextDay(nextDayWell){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (nextDayWell){
                resolve('good day')
                console.log('good day')
            }else{
                reject('not good')
            }
        },2000)
    })
}

sleep(sleep).then(well =>{
    console.log(well)
    return sleep(true)

})

myNextDay(sleep).then(sleep =>{
    if (sleep === true)
        return myNextDay(true)

})


