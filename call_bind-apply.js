

//conept ofter called as function borrowing
const person1 = {
    firstName:'varsha',
    lastName:'Saini',
    getFullName:function(city,phone){
        let fullName =  this.firstName+' '+this.lastName;
        if(city&&phone){
            fullName+=` from ${city}. Contact on ${phone}`
        }
        console.log(fullName);
    }
}

// call method on person1
person1.getFullName('Miami',12345);


const person2 = {
    firstName:'Jack',
    lastName:'Bill'
}

//Call and apply

person1.getFullName.call(person2,'New york','234234');
person1.getFullName.apply(person2,['New york','234234']);


Function.prototype.myCall = function(obj,...args){
    obj.fnRef = this;//binding function to object
    obj.fnRef(...args);
}

person1.getFullName.myCall(person2,'New york mycall','234234');

Function.prototype.myApply = function(obj,args){
    obj.fnRef = this;//binding function to object
    obj.fnRef(...args);
}

person1.getFullName.myApply(person2,['New york myApply','234234']);


Function.prototype.myBind = function(obj){
    obj.fnRef=this;
    
    return function(...args){
        obj.fnRef(...args)
    }
}

const bindedFunction = person1.getFullName.bind(person2);
bindedFunction();