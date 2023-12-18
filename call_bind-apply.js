

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