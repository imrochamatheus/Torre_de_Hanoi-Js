let senderUl = null
let recipientUl = null
let flag = null
let moves = 0

const flagReset = () => flag = null

const resetVariables = () => {

    senderUl = null
    recipientUl = null
    flag = null
    
}

const updateMove = () => {
    const moveContainer = document.querySelector('.moves')
    const newMoveValue = parseInt(moveContainer.textContent) + 1

    moveContainer.textContent = newMoveValue
    testVictory()
}

const resetMovesCounter = () => {
    const moveContainer = document.querySelector('.moves')
    
    moveContainer.textContent = 0
}

const testVictory = () => {
    const {blocks, towers} = el

    if (towers[2].childElementCount === blocks.length 
        || towers[1].childElementCount === blocks.length) {
        showVictoryBoard()
    }
}

const showVictoryBoard = () => {
    const victoryBoardContainer = document.querySelector('.victory_feedback')
    victoryBoardContainer.classList.toggle('d-none')

    setTimeout(() => {
        victoryBoardContainer.classList.toggle('d-none')
        resetMovesCounter()
    }, 1500)

    resetVariables()
    setInitialCondition(el)
}

const animateSelectedElement = element => {
    element.classList.toggle('shadow')
}

container.addEventListener('click', event => {

    if (event.target.closest('ul') === null) return

    if (!flag) {
        flag = true
        senderUl = event.target.closest('ul')
        
        if (senderUl.childElementCount === 0) {
            resetVariables()
        }

        animateSelectedElement(senderUl.lastElementChild)
        return
    }

    recipientUl = event.target.closest('ul')

    if (recipientUl.childElementCount === 0) {

        animateSelectedElement(senderUl.lastElementChild)
        recipientUl.prepend(senderUl.lastElementChild)
        flagReset()
        updateMove()

        return
    }

    const senderUlLastItem = senderUl.lastElementChild
    const recipientUlLastItem = recipientUl.lastElementChild

    if (recipientUlLastItem.clientWidth > senderUlLastItem.clientWidth) {

        animateSelectedElement(senderUlLastItem)
        recipientUl.append(senderUlLastItem)
        updateMove()
        resetVariables()

    } else {
        animateSelectedElement(senderUlLastItem)
        resetVariables()
    }    
})

