function keyPush(event) {
    let butPress = document.querySelectorAll('.butPress');

    if(event.key === 'Enter') {
        // Прибираю відправку форми
        // щоб не з'явилося вікно з помилкою
        // Можна прибрати цей рядок щоб перевірити що він означає
        event.preventDefault();
        // Перебираю кожен елемекнт з классом butPress
        butPress.forEach(function(item) {
            // Якщо в інпут введені елементи які мають класс butPress 
            if (event.key === item.textContent) {
                item.classList.add('active');
            } else if(event.key !== item.textContent) {
                item.classList.remove('active');
            }
        })
    } else if(event.key === 'Alt') {
        event.preventDefault();
        butPress.forEach(function(item) {
            if (event.key === item.textContent) {
                item.classList.add('active');
            } else if(event.key !== item.textContent) {
                item.classList.remove('active');
            }
        })
    // В else такий же код як і вище
    // код вище це костиль для кнопок Enter та Alt
    // тобто він такий же самий як і в else
    // але в ньму є відключення відправки форми
    } else {
        butPress.forEach(function(item) {
            if (event.key === item.textContent) {
                item.classList.add('active');
            } else if(event.key !== item.textContent) {
                item.classList.remove('active');
            }
        })
    }
}

document.querySelector('.inputKey').onkeydown = keyPush;
/*-------------------------------------------------*/
document.querySelectorAll('.butPress').addEventListener('click', (event) => {
    let butPress = document.querySelector('.butPress');

    if(event.key === 'onclick') {
        butPress.classList.add('active');
        console.log('gfd');
    }
})