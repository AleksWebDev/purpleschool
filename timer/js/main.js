const elements = {
    'month': document.querySelector('.month'),
    'day': document.querySelector('.day'),
    'hours': document.querySelector('.hours'),
    'minutes': document.querySelector('.minutes'),
    'seconds': document.querySelector('.seconds'),
}

const endYear = (elements) => {

    let diff;

    const timerId = setInterval(() => {
        const now = new Date();

        const deadLine = new Date('2025-12-31T23:59:59');

        diff = Math.max(0, deadLine - now);
    
        const currentMonth = (new Date('2025-12-31T23:59:59').getMonth() - (new Date().getMonth()));
        const day = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minute = Math.floor((diff / (1000 * 60)) % 60);
        const second = Math.floor((diff / 1000) % 60);
    
        elements.month.innerText = `${currentMonth} месяцев`;
        elements.day.innerText = `${day} дней`;
        elements.hours.innerText = `${hour} часов`;
        elements.minutes.innerText = `${minute} минут`;
        elements.seconds.innerText = `${second} секунд`;
        
    }, 1000);

    if(diff === 0){
        clearInterval(timerId);
    }
    
}

endYear(elements);