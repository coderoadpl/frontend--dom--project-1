function createPositionContainer(containerSelector) {

    const container = document.querySelector(containerSelector)

    if (!container) return

    const div = document.createElement('div')

    div.style.position = 'absolute'
    div.style.bottom = '0px'
    div.style.right = '0px'

    container.appendChild(div)

    return div
}

function createCircle(containerSelector) {

    const container = document.querySelector(containerSelector)

    if (!container) return

    const circle = document.createElement('div')

    circle.style.position = 'absolute'
    circle.style.top = '0px'
    circle.style.left = '0px'
    circle.style.width = '100px'
    circle.style.height = '100px'
    circle.style.backgroundColor = 'blue'
    circle.style.borderRadius = '50%'

    container.appendChild(circle)

    return circle

}

function extractPixelsFromString(pixelsString) {
    return Number(pixelsString.replace('px', ''))
}

function move(deltaX = 0, deltaY = 0) {
    const currentLeft = extractPixelsFromString(circle.style.left)
    const currentTop = extractPixelsFromString(circle.style.top)
    circle.style.left = currentLeft + deltaX + 'px'
    circle.style.top = currentTop + deltaY + 'px'
}

function moveDown(deltaTop = 10) {
    move(0, deltaTop)
}

function moveRight(deltaLeft = 10) {
    move(deltaLeft, 0)
}

function moveUp(deltaTop = 10) {
    move(0, -deltaTop)
}

function moveLeft(deltaLeft = 10) {
    move(-deltaLeft, 0)
}

function displayPosition() {
    const position = circle.getBoundingClientRect()

    const pX = document.createElement('p')
    const pY = document.createElement('p')

    pX.innerText = 'Position X: ' + position.x
    pY.innerText = 'Position Y: ' + position.y

    container.appendChild(pX)
    container.appendChild(pY)
}

const container = createPositionContainer('body')
const circle = createCircle('body')
displayPosition()