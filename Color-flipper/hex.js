const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn= document.getElementById("btn");
const color= document.querySelector('.color');
//hex colors: #(0-F)(0-F)(0-F)(0-F)(0-F)

btn.addEventListener("click", function(){
    //get random Number from 0-15
   
    let hexColor='#';
    for(var i=0; i<6; i++){
        var randomNumber= getRandomNumbers();
        hexColor+= hex[randomNumber];
    }
    console.log(hexColor);
    document.body.style.backgroundColor= hexColor;
    color.textContent= hexColor;
})
function getRandomNumbers(){
    //[0,1) => [0,16)
    return Math.floor(Math.random() * hex.length)
}