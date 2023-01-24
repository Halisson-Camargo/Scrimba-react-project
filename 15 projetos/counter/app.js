const btnChange = document.querySelector(".btn");
const colorCode = document.querySelector(".clrCode")

btnChange.addEventListener('click', function(){
   let num =   Math.floor(Math.random() * 10000000).toString(16).padStart(6,0);
   document.body.style.backgroundColor = '#' + num;
   colorCode.innerHTML = '#' + num;
   
})