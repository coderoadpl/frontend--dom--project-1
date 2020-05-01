const startCircleGame = (function () {

    let container = null
    let circle = null

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

        displayPosition()
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
        container.innerHTML = ''

        const position = circle.getBoundingClientRect()

        const pX = document.createElement('p')
        const pY = document.createElement('p')

        pX.innerText = 'Position X: ' + (position.x + position.width / 2)
        pY.innerText = 'Position Y: ' + (position.y + position.height / 2)

        container.appendChild(pX)
        container.appendChild(pY)
    }

    function keyDownEventHandler(event) {
        
        switch (event.key) {
            case 'ArrowUp':
                moveUp()
                break
            case 'ArrowDown':
                moveDown()
                break
            case 'ArrowLeft':
                moveLeft()
                break
            case 'ArrowRight':
                moveRight()
                break
            default:
                break
        }

        window.removeEventListener(
            'keydown',
            keyDownEventHandler
        )

    }

    function keyUpEventHandler() {

        window.addEventListener(
            'keydown',
            keyDownEventHandler
        )

    }

    function init() {
        container = createPositionContainer('body')
        circle = createCircle('body')

        displayPosition()

        window.addEventListener(
            'keydown',
            keyDownEventHandler
        )
        window.addEventListener(
            'keyup',
            keyUpEventHandler
        )
    }

    return init

})()