const container = document.querySelector('.container')
const field = document.createElement('div')

const elementsCreator = numbersOfBlocks => {

    const blocks = []
    const towers = []

    for (let i = 0; i < numbersOfBlocks; i++) {
    
        if (i < 3) {
            const newTower = document.createElement('ul')

            newTower.classList.add('ul')
            towers.push(newTower)
        }
    
        const newBlock = document.createElement('li')
        
        newBlock.classList.add('block', 'block-' + i)
        blocks.push(newBlock)
    }
    return {blocks, towers}
}

const setInitialCondition = ({ blocks , towers }) => {
    
    blocks.forEach((block, index) => {
        towers[0].appendChild(block)

        if (index < towers.length) {
            container.appendChild(towers[index])
        }
    });
}

const restart = () => {
    moves = 0
    
    resetVariables()
    resetMovesCounter()
    setInitialCondition(el)
}

let el = elementsCreator(3)
setInitialCondition(el)

