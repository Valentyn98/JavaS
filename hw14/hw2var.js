



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
        },300)
    })
}
let heal = 10

function makeSport (mkSport){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(mkSport){
                resolve('make ')
                console.log('make sport')
            }
        },1100)
    })
}
sleep(true).then(well =>{
    console.log('spit ok')
    return myNextDay(true)

})
glassOfWat (true).then(asd =>{
    console.log('drink wat ')
   return  makeSport (true)
})







