const num = document.querySelector('.n');
const button = document.querySelector('.btn');
const btnLess = document.querySelector('.btn0');
const btnReset = document.querySelector('.btn1');

button.addEventListener('click', function () {
    let count = parseInt(num.innerText);
    count++;
    num.innerText = count;
})

btnLess.addEventListener('click', function () {
    let count = parseInt(num.innerText);
    if (count > 0) {
        count--;
        num.innerText = count;
    } else{
        alert('Please click on  Click Me ')
    }
})


btnReset.addEventListener('click', function () {
    num.innerText = 0;
})