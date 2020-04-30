function createCircle(containerSelector) {

    const container = document.querySelector(containerSelector)

    if (!container) return

    const circle = document.createElement('div')

    circle.style.width = '100px'
    circle.style.height = '100px'
    circle.style.backgroundColor = 'blue'
    circle.style.borderRadius = '50%'

    container.appendChild(circle)

}

createCircle('body')