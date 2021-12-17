
function myNextDay(nextDayWell){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if (nextDayWell){
                resolve('good day')
            }else{
                reject('not good')
            }
        },500)
    })
}


function sleep (sleep){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (sleep){
                resolve('spit ok')

            }else {
                reject('ne mogu');
            }
        },500)
    })
}

sleep(sleep).then(well =>{
    console.log(well)
    return sleep(true)
})

