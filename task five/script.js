const main_container = document.querySelector('.main-container')
const content = document.querySelectorAll('.content')

main_container.addEventListener("click", (e)=>{
    const id = e.target.dataset.id
    
    if(id){
        content.forEach((item)=>{
            item.classList.remove('active')
        })
    }

    content.forEach((item)=>{
        if(item.classList.contains(id)){
            item.classList.add('active')
        }
    })
    

        
})

