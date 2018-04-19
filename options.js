
'use strict'

const kButtonColors = ['rainbow', 'pastel', 'red']

function constructOptions (kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button')
    button.style.height = 100 + 'px'
    button.style.width = 100 + 'px'
    button.style.backgroundImage = "url('https://raw.githubusercontent.com/KertuMikk/3.ea-kodutoo/master/images/" + item + ".png')"
    button.addEventListener('click', function () {
      chrome.storage.sync.set({color: item + '.css'}, function () {
        console.log('color is ' + item)
      })
    })
    document.getElementById('buttonDiv').appendChild(button)
  }
}
constructOptions(kButtonColors)
