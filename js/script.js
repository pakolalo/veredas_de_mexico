const removeActiveElements = (selector) => {
    const elementsActive = document.querySelectorAll(`.${selector}`);
    if(elementsActive.length) {
        elementsActive.forEach(elementActive => {
            elementActive.classList.remove(selector);
        })
    }
}
const trigger =document.querySelectorAll('.tabbed-trigger');

trigger.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        
        if(!trigger.classList.contains('features__tab--active')){
            const dataNumber = trigger.getAttribute('data-id');
            const dataShow = document.querySelector(`.sort-data:nth-of-type(${dataNumber})`);
            

            removeActiveElements('active');
            dataShow.classList.add('active');
            trigger.classList.add('active');
        }
    })
})