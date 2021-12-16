

let energy = 100;
let health = 51
let stress = 20
let knowledge = 40
function sleep (allNight){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (allNight >= 7 && allNight <= 9){
                console.log('you are ready to live this day')
                resolve(allNight)
            }
            else{
                console.log('Получил лысую голову')
                reject ('not enough')
            }
        },2000)
    })
}
 let timeUp = 8
 let timeForLife = 24;
function wakeUp (timeUp,timeForLife){
    setTimeout(()=>{
        return new Promise((resolve, reject)=>{

                if (timeUp <= 8){
                    timeForLife -= timeUp
                    console.log(timeForLife)
                    resolve('правильний сон')
                }else{
                    reject('Не вистачає часу на життя')
                }

        },5000)
    })
}

function makeSport (){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (health > 50){
                stress += 20
                energy -= 20
                resolve(energy, stress)
                console.log('after sport your stress is equal ' + stress + ' your energy counter is:'+ energy)
            }else {
                console.log('Not ready')
                reject('bad')
            }
        },800)
    })
}
function studyInOkten (time){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (time === 8){
                energy -= 20
                knowledge++
                resolve(energy,knowledge)
                console.log('you finished 1 more lection' + 'your energy counter is:'+ energy + ' your knowledge is:' +knowledge)
            }
            else {
                console.log('you missed it')
                reject('bad')
            }
        }, 1000)
    })
}
function hw (){
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            energy -= 30
            knowledge++
            resolve(energy,knowledge)
            console.log('you finished another hw ' + 'your energy counter is:'+ energy + ' your knowledge is:' +knowledge)
        }, 1500)
    })
}
let goal = 5
function thinkAbout (goal){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (goal > 3 && goal < 7 ){
                energy -=10
                knowledge++
                resolve(energy,knowledge)
                console.log('Твоя енергия ' + energy + 'Твой ноледж' + knowledge)
            }else if (goal > 7){
                energy -=20
                knowledge++
                reject(energy,knowledge)
                console.log('Твоя енергия ' + energy + 'Твой ноледж ' + knowledge)
            }
        },20)
    })
}



async function daily() {
    await sleep(8)
    await wakeUp (timeUp,timeForLife)
    await makeSport()
    await studyInOkten(8)
    await hw()
    thinkAbout (goal)
}
daily()