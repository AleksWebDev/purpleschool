const buttonCollection = document.querySelector('.bottun__colections');
const counterElement = document.querySelector('.counter').firstChild;
const buttons = document.querySelectorAll('.button');
let counter = 0;
renderCounterValue();

buttonCollection.addEventListener('click', function(e){
    if(e.target.classList.contains('button')){
        initCounter(e.target);
    }
})


function initCounter(target){
    buttons.forEach(item => {
        item.textContent = 'Click me';
    })

    counter++;
    target.textContent = 'Clicked';
    renderCounterValue();

}


function renderCounterValue(){
    counterElement.textContent = `Current value: ${counter}`
}