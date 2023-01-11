var emoji=document.querySelector(".emoji");
var range=document.querySelector("#range");
//  var emojicode="&#128512;";
 range.addEventListener("input",(e)=>{
    emoji.innerHTML=`&#${range.value}`;
    // console.log(range.value)



 })

