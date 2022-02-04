const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})

popup.addEventListener('click', event => {
    const clickedElementClass = event.target.classList[0]
    const classNames = ['popup-link', 'popup-close', 'popup-wrapper', 'easy-level-li', 'medium-level-li', 'hard-level-li']
    const compare = classNames.some(currentClass => currentClass === clickedElementClass)

    if (compare) {
        popup.style.display = 'none'
    }
})

const setDifficulty = level => {

    el.blocks.forEach((block, index) => {
        
        if (index < 3 ) {
            el.towers[index].remove()
        }
        block.remove()
    })
    
    el = elementsCreator(level)
    restart()
}

