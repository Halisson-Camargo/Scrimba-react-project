// const btnD = document.querySelector('.btnD');
// const btnR = document.querySelector('.btnR');
// const btnI = document.querySelector('.btnI');
// let countNumber = document.querySelector('.countNumber');


// let count = 0 
// btnI.addEventListener('click', function(){
//    count++;
//    countNumber.innerHTML = count;
    
// })
// btnR.addEventListener('click', function(){
//    count = 0;
//    countNumber.innerHTML = count;
// })
// btnD.addEventListener('click', function(){
//    count--;
//    countNumber.innerHTML = count;
// })

// const value = document.querySelector('#value');
// const countBtn = document.querySelectorAll('.btn');
// let count = 0;
// countBtn.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         let currentBtn = e.currentTarget.classList;
    
//         if(currentBtn.contains = 'decrease'){
//             count--;
            
//         } else if(currentBtn.contains = 'increase'){
//             count++;
            
//         } else {
//             count = 0;
//         }
//         value.textContent = count;
//     })
// })

let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        let style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
        } else if(style.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        if(count > 0){
            value.style.color = "green";
        }
        if(count < 0){
            value.style.color = "red";
        }
        if(count == 0){
            value.style.color = "lightblue";
        }
        value.textContent = count;
    })
})