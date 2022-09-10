const keys = document.querySelectorAll('.key')
const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];
const whitekeys = document.querySelectorAll('.white')
const blackkeys = document.querySelectorAll('.black')




keys.forEach(function(key) {
    key.addEventListener('click', function() {
        playNote(this)
    })
})

function playNote(key) {
    note = key.dataset.note
    audio = document.getElementById(note)
    audio.currentTime = 0
    audio.play()
    key.classList.add('active')
    audio.addEventListener('ended', function() {
        key.classList.remove('active')
    })
}


document.addEventListener('keyup', function(e) {
    let key = e.key
    let whitekeyindex = WHITE_KEYS.indexOf(key)
    let blackkeyindex = BLACK_KEYS.indexOf(key)
    if (whitekeyindex > -1) playNote(whitekeys[whitekeyindex])
    if (blackkeyindex > -1) playNote(blackkeys[blackkeyindex])

})