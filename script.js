var time = document.querySelector('.countDown-child')
// var content = document.querySelector('content-child')
let count = 10;

var countdown_begin = document.querySelector('.start')

countdown_begin.addEventListener('click', ()=>{
    let countdown = (count, delay) => {
        if (count <= 0) {
            delay();
            return;
        }
        time.innerText = count;
        setTimeout(()=>{
            countdown(count - 1, delay);
            },1000);
    }
    
    let delay = ()=>{
        time.innerText = 'Happy Independence Day';
    }
    countdown(10, delay);
})
