
//Event Bubbling

document.getElementById('gParent').addEventListener('click',()=>{
    console.log('Grand Parent clicked in bubbling');
});
document.getElementById('parent').addEventListener('click',()=>{
    console.log('Parent clicked in bubbling');
});
document.getElementById('child').addEventListener('click',(evt)=>{
    console.log('clild Parent clicked in bubbling');

    //event Delegation = putting event listener on parent element in order to avoid attaching multiple events
    console.log(evt.target.outerText+' clicked');


});


//Event Capturing


document.getElementById('gParent').addEventListener('click',()=>{
    console.log('Grand Parent clicked in capture');
},true);
document.getElementById('parent').addEventListener('click',()=>{
    console.log(' Parent clicked in capture');
},true);
document.getElementById('child').addEventListener('click',()=>{
    console.log('clild Parent clicked in capture');
},true);