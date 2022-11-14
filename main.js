

const firstItem = document.querySelector("#first")
const firstButton = document.querySelector("#firstAction")

firstButton.onclick = () => {
    if (firstItem.style.color === '') {
        firstItem.style.color = 'red'
    } else {
        firstItem.style.color = ''
    }
}


const secondItem = document.querySelector("#second")
const secondButton = document.querySelector("#secondAction")

secondButton.onclick = () => {
    if (secondItem.style.color === 'black') {
        secondItem.style.color = 'red'
    } else {
        secondItem.style.color = 'black'
    }
}


const thirdItem = document.querySelector("#third")
const thirdButton = document.querySelector("#thirdAction")
thirdButton.onclick = () => {
    if (thirdItem.style.color === 'black') {
        thirdItem.style.color = 'red'
    } else {
        thirdItem.style.color = 'black'
    }
}


const fourthItem = document.querySelector("#fourth")
const fourthButton = document.querySelector("#fourthAction")
fourthButton.onclick = () => {
    if (fourthItem.style.color === 'black') {
        fourthItem.style.color = 'red'
    } else {
        fourthItem.style.color = 'black'
    }
}


const fifthItem = document.querySelector("#fifth")
const fifthButton = document.querySelector("#fifthAction")
fifthButton.onclick = () => {
    if (fifthItem.style.color === 'black') {
        fifthItem.style.color = 'red'
    } else {
        fifthItem.style.color = 'black'
    }
}






