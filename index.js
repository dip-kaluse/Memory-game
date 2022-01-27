let Note=localStorage.getItem("note")
let arr =["image/0.jpg","image/1.jpg","image/2.jpg"]
const Di =document.getElementsByClassName("di")
let Win = document.getElementById("win")
let count=1;
let g
let x
let d
function fun1(s,m){
    if (d) {
        
    }
    x = Math.floor((Math.random() * 3) );
      if (count===1) {g=x}
    Di[s].innerHTML=`<img src="${arr[x]}" alt="">`
    im()
    count++;}  
function im() {
        if(count>=2){
            if (g===x ){
              Win.innerHTML="You Are win";  
            }
            else
                {
                    Win.innerHTML="You Are lose";
                }
        }
        if(count==3){
            location.reload();
            alert("oops your game over")
        }     
}
