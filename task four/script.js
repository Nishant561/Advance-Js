const button = document.querySelector(".button")
const button1 = document.querySelector(".button1")
const count = document.querySelector('#counter')
 let intCount ;
button.addEventListener("click" , (e)=>{
    let counter = Number(count.textContent)
   intCount = setInterval(()=>{
        counter += 1;
        count.textContent = counter;
    },1000)
})

button1.addEventListener("click" , (e)=>{
    clearInterval(intCount)
})
