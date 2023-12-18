console.log(b)
let count=0
var b=67;
const getData = ()=>{
    console.log("got clicked",count++);
}


const debounce = function(fn,delay){
  
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
document.getElementById('throttle').addEventListener('keypress',()=>{
    throttlefn();
})


const debouncedFn = debounce(getData,100);
document.getElementById('debounce').addEventListener('keypress',()=>{
    debouncedFn();
})