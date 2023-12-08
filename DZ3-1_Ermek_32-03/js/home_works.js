const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._-]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'ОК'
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

const parentBlock = document.querySelector('.parent_block');
const childBlock = document.querySelector('.child_block');
let position = 0;

function moveRight() {
    if (position < parentBlock.offsetWidth - childBlock.offsetWidth) {
        position++;
        childBlock.style.left = `${position}px`
        setTimeout(moveRight, 10)
    }
}

moveRight()
