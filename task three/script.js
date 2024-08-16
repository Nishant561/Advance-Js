const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');

const input = document.querySelectorAll('input[type="text"]'); 
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    input.forEach((elem)=>{
        if(elem.value === ''){
            document.querySelector('#error')
            .textContent = "some field is empty"

            document.querySelector('#error')
            .style.color = "red"
        }
        else{
            document.querySelector('#error')
            .textContent = ""
            document.querySelector('#error')
            .style.color = "black"
        }
    })
})