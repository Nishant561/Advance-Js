const data = [
    {
        name:'nishant',
        img:'https://images.unsplash.com/photo-1627311228334-7e36313cf92b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name:'nisha',
        img:'https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        name:'sujata',
        img:'https://images.unsplash.com/photo-1567022275665-575855661e35?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

const person_container = document.querySelector('.person-container')
const input = document.querySelector(".main-container input")
function displayCard  (){
    const items = data.map((item)=>(
        `<div class="people">
        <div class="img-container">
            <img src=${item.img}  alt=""/>
        </div>
        <h3>${item.name}</h3>
    </div>`
    )).join(" ")
    person_container.innerHTML = items;
}

displayCard()

input.addEventListener("input" ,()=>{
   const newUser =  data.filter((item)=>(
        item.name.startsWith(input.value)
    ))

  const add =   newUser.map((item)=>(
        `<div class="people">
        <div class="img-container">
            <img src=${item.img}  alt=""/>
        </div>
        <h3>${item.name}</h3>
    </div>`
    )).join("")

    person_container.innerHTML = add;


    
    
})

