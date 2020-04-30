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

function moveDown(deltaTop = 10) {
    const currentTop = Number(circle.style.top.replace('px', ''))
    circle.style.top = currentTop + deltaTop + 'px'
}

function moveRight(deltaLeft = 10) {
    const currentLeft = Number(circle.style.left.replace('px', ''))
    circle.style.left = currentLeft + deltaLeft + 'px'
}

function moveUp(deltaTop = 10) {
    const currentTop = Number(circle.style.top.replace('px', ''))
    circle.style.top = currentTop - deltaTop + 'px'
}

function moveLeft(deltaLeft = 10) {
    const currentLeft = Number(circle.style.left.replace('px', ''))
    circle.style.left = currentLeft - deltaLeft + 'px'
}

const circle = createCircle('body')