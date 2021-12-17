



function sleep (sleep){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (sleep){
                resolve('spit ok')

            }else {
                reject('ne mogu');
            }
        },800)
    })
}


function glassOfWat (glass){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(glass){
                resolve(heal += 10)
            }
        },1100)
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
        },600)
    })
}
let heal = 10


glassOfWat (true).then(asd =>{
    console.log(heal)

})
sleep(true).then(well =>{
    console.log('spit ok')
    return myNextDay(true)

})






