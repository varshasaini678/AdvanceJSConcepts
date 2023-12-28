let multiply = (x,y)=>x*y

let multiplyByTwo = multiply.bind(this,2);
let multiplyByThree = multiply.bind(this,3);

console.log('multiplyByTwo',multiplyByTwo(4),multiplyByTwo);
console.log('multiplyByThree',multiplyByThree(4),multiplyByThree);


// Currying using CLosure


let multiplyCurry = function(x){
    return function(y){
       return x*y;
    }
}
let multiplyByTwoCurry = multiplyCurry(2);
let multiplyByThreeCurry = multiplyCurry(3);

console.log('multiplyByTwoCurry',multiplyByTwoCurry(4),multiplyByTwoCurry);
console.log('multiplyByThreeCurry',multiplyByThreeCurry(4),multiplyByThreeCurry);



//sum(2)(3)(4)(5)(6)


let sum = function(x){
    return function(...arg){
        if(arg.length){
            return sum(arg[0]+x)
        }else{
            return x
        }
    }
}

console.log(sum(1)(2)(3)(4)());






function curry(func) {

    return function curried(...args) {
      if (args.length >= func.length) {
        return func.apply(this, args);
      } else {
        return function(...args2) {
          return curried.apply(this, args.concat(args2));
        }
      }
    };
  
  }
/*function curry(f) { // curry(f) does the currying transform
    return function curried(a) {
      return function (...arg) {
            if(arg.length){
                return curried(f(arg[0],a));
            }else{
                return a;
            }
        }
    }
  }*/
  
  // usage
  function add(a, b,c) {
    return a + b+ c;
  }
  
  let curriedSum = curry(add);
  
  alert( curriedSum(1)(2)(3,4) ); 



  const test1 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 500, 'one');
  });
  
  const test2 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'two');
  });
  
  const test3 = new Promise(function (resolve, reject) {
    setTimeout(reject, 200, 'three');
  });


  const race = function(values){
    return new Promise((resolve,reject)=>{
        values.forEach(val => {
            Promise.resolve(val)
                .then(resolve,reject)
                .catch(reject)
        });
    })
  }


  race([test1,test2,test3])