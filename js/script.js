let cells = document.getElementsByClassName ("Game-cell")
let container = document.getElementsByClassName ("Game-container")

for (const cell of cells)
    cell.onclick = oneClick
let i = 0

function oneClick () {
    if (i % 2 == 0)
        this.style.backgroundImage = "url(./icons/close.svg)"
    else
        this.style.backgroundImage = "url(./icons/zero.svg)"
        i++
}

function doubleClick () {

}