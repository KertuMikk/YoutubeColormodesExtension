
'use strict'

const kButtonColors = ['rainbow', 'pastel', 'red']

function constructOptions (kButtonColors) {
  for (let item of kButtonColors) {
    let button = document.createElement('button')
    button.style.backgroundImage = "url('C:/users/ketuo/eesrakendused/3.ea-kodutoo/images/" + item + ".png')"
    button.addEventListener('click', function () {
      chrome.storage.sync.set({color: item + '.css'}, function () {
        console.log('color is ' + item)
      })
    })
    document.getElementById('buttonDiv').appendChild(button)
  }
}
constructOptions(kButtonColors)
