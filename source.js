console.log(b)
let count
var b=67;
const getData = ()=>{
    console.log("got clicked",count++);
}


const debouncedFn = function(fn,delay){
  
    let timer;
   
    return function(){
        let context = this;
        let args= arguments;
        if(!timer){
            fn.apply(context,args)
        }
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
  
}

const debouncedFng = debouncedFn(getData,100);


const throttle = function(fn,delay){
    let wait=false;

    return function(){
        let context = this;
        let args= arguments;

        if(!wait){
            fn.apply(context,args);
            wait=true;
            setTimeout(()=>{
                wait=false;
            },delay)
        }
    }
}

const throttlefn = throttle(getData,100)
document.getElementById('clickme').addEventListener('keypress',()=>{
    throttlefn();


})