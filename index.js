const previous = document.querySelectorAll('.left');
const next = document.querySelectorAll('.right');
const cutList = document.querySelectorAll('.categories > .list');

next.forEach((right) => {
    right.addEventListener('click', () => {
        cutList.forEach((list) => {
            list.classList.add('show');
            right.classList.add('last');
        })
    })
})

previous.forEach((left) => {
    left.addEventListener('click', () => {
        cutList.forEach((list) => {
            list.classList.remove('show');
            left.classList.add('last');
        })
    })
})