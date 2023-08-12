const counter = document.querySelector('#counter');
const btns = document.querySelectorAll('.btn');

let count = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const style = e.currentTarget.classList;
        if(style.contains('decrease')){
            count--;
            counter.textContent = count;
            if(count < 0){
                counter.style.color = 'red';
            }
        }else if(style.contains('increase')){
            count++;
            counter.textContent = count;
            if(count >= 0){
                counter.style.color = 'green';
            }
            
        }else if(style.contains('reset')){
            count = 0;
            counter.textContent = count;
            if(count == 0){

                counter.style.color = 'black';
            }
        }

        if(count === 0){
            counter.style.color = 'black';
        }
    })
})