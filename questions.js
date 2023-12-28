/*
    return {
        obj.name:varsha,
        class:10,
        adress.firstline:'
        address.area.name
    }

*/ 


//USe recurssion


const obj = {
    name:'varsha',
    class:'10',
    address:{
        firstLine:'sra road',
        area:{
            name:'green park',
            pincode:'123123'
        }
    },
    company:{
        name:'accenture',
        address:{
            firstLine:'gurgaon road',
            area:{
                name:'blue park',
                pincode:'23423'
            }
        },
    }
};


function transformObject (obj,arr){
    if(typeof obj == 'object'){
        Object.keys(obj).map((key)=>{
            transformObject(obj[key],arr)
        })
    }
    else{
        arr.push(obj)
    }


}

let arr=[];
transformObject(obj,arr);

console.log('Transformed arr',arr);


function magic(obj,newobj,key){
    if(typeof obj=='object'){
        Object.keys(obj).map((k)=>{
             magic(obj[k],newobj,`${key}_${k}`)
        })
    }else{
        newobj[key]=obj
    }
}
let magicObj={};
magic(obj,magicObj,'user');
console.log(magicObj);








