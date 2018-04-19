
'use strict'

const kButtonTheme = ['rainbow', 'pastel', 'red']

function constructOptions (kButtonTheme) {
  for (let item of kButtonTheme) {
    let button = document.createElement('button')
    button.style.height = 100 + 'px'
    button.style.width = 100 + 'px'
    button.style.backgroundImage = "url('https://raw.githubusercontent.com/KertuMikk/3.ea-kodutoo/master/images/" + item + ".png')"
    button.addEventListener('click', function () {
      chrome.storage.sync.set({color: "url('https://raw.githubusercontent.com/KertuMikk/3.ea-kodutoo/master/images/" + item + ".png')", item: item}, function () {
        console.log('color is ' + item)
      })
    })
    document.getElementById('buttonDiv').appendChild(button)
  }
}
constructOptions(kButtonTheme)
