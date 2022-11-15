

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
    if (secondItem.textContent === 'Segunda Acción') {
        secondItem.textContent = 'Esta es mi segunda Accion'
        secondItem.style.color = 'green'
    } else {
        secondItem.textContent = 'Segunda Acción'
        secondItem.style.color = ''
    }
}


const thirdItem = document.querySelector("#third")
const thirdButton = document.querySelector("#thirdAction")

thirdButton.onclick = () => {

    if (thirdItem.style.color === '') {
        thirdItem.style.color = 'pink'
        thirdItem.style.fontSize = "200px"
    } else {
        thirdItem.style.color = ''
        thirdItem.style.fontSize = "1em"
    }
}


const fourthItem = document.querySelector("#fourth")
const fourthButton = document.querySelector("#fourthAction")


fourthButton.onclick = () => {
    if (fourthItem.style.color === '') {
        fourthButton.style.fontSize = "3em"
        fourthItem.style.color = 'darkBlue'
        fourthItem.style.fontFamily = "arial"
    } else {
        fourthItem.style.color = ''
        fourthButton.style.fontSize = ""
        fourthItem.style.fontFamily = ""
    }
}


const fifthItem = document.querySelector("#fifth")
const fifthButton = document.querySelector("#fifthAction")
fifthButton.onclick = () => {
    if (fifthItem.style.color === '') {
        fifthItem.style.color = 'orange'
        fifthItem.style.transform = 'rotate(180deg)'
        fifthItem.style.fontSize = "100px"

    } else {
        fifthItem.style.color = ''
        fifthItem.style.transform = 'rotate(360deg)'
        fifthItem.style.fontSize = ""
    }
}






