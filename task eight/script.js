const letters = document.querySelector(".letter")

const textArea = document.querySelector("textarea")


textArea.addEventListener("input" , ()=>{
   const value = textArea.value.trim()
   letters.textContent = value.length
})

