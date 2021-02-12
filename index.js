var board=document.getElementById('board');
window.onload=function(){
    board.style.color='white';
    board.style.borderBottom='4px solid white';
}

// open instructions
var instructionTab=document.querySelector('.instruction-tab');
var instructionPop=document.querySelector('.instruction-pop');
instructionTab.addEventListener('click',(e)=>{
    instructionPop.classList.add('instruction-box-active');
})

// close instructions 
var instructionClose=document.querySelector('.cancel-in');
instructionClose.addEventListener('click',(e)=>{
    instructionPop.classList.remove('instruction-box-active');
})

// open instructions
var prizeTab=document.querySelector('.price-tab');
var prizePop=document.querySelector('.price-pop');
prizeTab.addEventListener('click',(e)=>{
    prizePop.classList.add('price-pop-active');
})
var priceClose=document.querySelector('.cancel-pr');
priceClose.addEventListener('click',(e)=>{
    prizePop.classList.remove('price-pop-active');
})