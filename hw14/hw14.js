let done = 0;
let count = 100
let doit = 11;
function wakeUp (wake){
    setTimeout  (() =>{
        if(wake){
           done += 10
            console.log(done)
        }else{
            console.log(done + 'ddd')
        }
    },4000)
}


function glassOfWat (glass){
    setTimeout(() =>{
        if (glass){
            done += 4
            console.log(done)
        }else{
            console.log('cccc')
        }
    },2000)
}


function makeAPlan (doit){
    setTimeout(()=>{
        if (doit < done){
            done += 25;
            console.log(done)

        }
    },3000)
}


function makeASports (count){
    setTimeout(()=>{
        if (done === count){

            console.log('finish')

        }else {
            done +=25;
            console.log(done)
        }
    },2500)
}
wakeUp (true )
glassOfWat (true)
makeAPlan (doit)
makeASports (count)





