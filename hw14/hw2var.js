



function sleep (sleep){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (sleep){
                resolve('spit ok')

            }else {
                reject('ne mogu');
            }
        },2000)
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
        },200)
    })
}

sleep(true).then(well =>{
    console.log('spit ok')
    return myNextDay(true)

})




