const small = document.querySelector(".small");

window.addEventListener("DOMContentLoaded",()=>{
    set()
})

function set(){
    let count =0 ;
    let inter = setInterval(()=>{
         if(count === 100){
            clearInterval(inter)
         }else{
            count++ 
            small.style.width = count + "%"
         }
    }, 50)
    
}