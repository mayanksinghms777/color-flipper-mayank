const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.onclick = function(){
    const randomNumber = random();
    document.body.style.backgroundColor = colors[randomNumber];

    color.textContent = colors[randomNumber];
    
};
function random(){
    return Math.floor(Math.random() * colors.length);
}


// btn.addEventListener("click", function () {
//     const randomNumber = getRandomNumber();
//     // console.log(randomNumber);
  
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber];
//   });

