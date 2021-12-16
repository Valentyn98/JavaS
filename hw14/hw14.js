let done = 0;

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
wakeUp (true )
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
glassOfWat (true)
function makeAPlan (doit){
    setTimeout(()=>{
        if (doit > done){
            done += 25;
            console.log(done)

        }
    },3000)
}
 makeAPlan (doit)




