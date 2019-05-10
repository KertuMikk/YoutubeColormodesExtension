
'use strict'

const kButtonTheme = ['pastel', 'red', 'navy', 'grey', 'Mint', 'rose', 'feather', 'fox', 'sweater']

function constructOptions (kButtonTheme) {
  for (let item of kButtonTheme) {
    let button = document.createElement('button')
    button.style.height = 150 + 'px'
    button.style.width = 150 + 'px'
    button.style.backgroundImage = "url('https://raw.githubusercontent.com/KertuMikk/YoutubeColormodesExtension/master/images/" + item + "BIG.png')"
    let name = document.createElement('p')
    let node = document.createTextNode(item)
    name.appendChild(node)

    let divB = document.createElement('div')
    divB.id = item
    divB.appendChild(button)
    divB.appendChild(name)
    document.getElementsByTagName('body')[0].appendChild(divB)
  }
}
function placement () {
  let counter = 1
  let left = 10

  var sheet
  for (let item of kButtonTheme) {
    if (counter < 6) {
      sheet = document.createElement('style')
      sheet.innerHTML = 'div#' + item + '{position:absolute; height:250px; width:250px; left:' + left + 'px; top:150px;}\n'
      document.head.appendChild(sheet)
      left = left + 200
      console.log(counter)
      counter++

      if (counter === 6) {
        left = 10
      }
    } else if (counter > 5 && counter <= 10) {
      sheet = document.createElement('style')
      sheet.innerHTML = 'div#' + item + '{position:absolute; height:250px; width:250px; left:' + left + 'px; top:370px;}\n'
      document.head.appendChild(sheet)
      left = left + 200
      console.log(counter)
      counter++

      if (counter === 11) {
        left = 10
      }
    } else if (counter > 10 && counter <= 15) {
      sheet = document.createElement('style')
      sheet.innerHTML = 'div#' + item + '{position:absolute; height:250px; width:250px; left:' + left + 'px; top:590px;}\n'
      document.head.appendChild(sheet)
      left = left + 200
      console.log(counter)
      counter++

      if (counter === 15) {
        left = 10
      }
    }
  }
}
window.onload = function () {
  constructOptions(kButtonTheme)
  placement()
}
