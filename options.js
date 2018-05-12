
'use strict'

const kButtonTheme = ['rainbow', 'pastel', 'red', 'navy', 'B&W', 'Mint', 'rose']

function constructOptions (kButtonTheme) {
  for (let item of kButtonTheme) {
    let button = document.createElement('button')
    button.style.height = 150 + 'px'
    button.style.width = 150 + 'px'
    button.style.backgroundImage = "url('https://raw.githubusercontent.com/KertuMikk/YoutubeColormodesExtension/master/images/" + item + "BIG.png')"
    let name = document.createElement('p') /* COMMENT OUT FROM LET NAME TO ELEMENT.APPEND.. TO MOVE COLOR SELECTION TO OPTIONS  */
    let node = document.createTextNode(item)
    name.appendChild(node)
    let element = document.getElementById('buttonDiv')
    element.appendChild(name)
    /* button.addEventListener('click', function () {
      chrome.storage.sync.set({color: "url('https://raw.githubusercontent.com/KertuMikk/YoutubeColormodesExtension/master/images/" + item + ".png')", item: item}, function () {
        console.log('color is ' + item)
      })                             UNCOMMENT TO MOVE COLOR SELECTION TO OPTIONS */
    /* } /*) */
    document.getElementById('buttonDiv').appendChild(button)
  } /* COMMENT OUT TO MOVE COLOR SELECTION TO OPTIONS */
}
/* } */
constructOptions(kButtonTheme)
