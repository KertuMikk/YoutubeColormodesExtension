// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
let item

chrome.storage.sync.get('item', function (data) {                      UNCOMMENT TO MOVE COLOR SELECTION TO OPTIONS
  changeColor.style.backgroundImage = data.item
  changeColor.setAttribute('item', data.item)
  item = data.item
})
changeColor.onclick = function () {
  chrome.tabs.insertCSS({file: 'css/' + item + '.css'})
} */

const kButtonTheme = ['rainbow', 'pastel', 'red', 'navy', 'B&W', 'Mint']

function constructOptions (kButtonTheme) {
  for (let item of kButtonTheme) {
    let button = document.createElement('button')
    button.style.height = 40 + 'px'
    button.style.width = 40 + 'px'
    button.style.backgroundImage = "url('https://raw.githubusercontent.com/KertuMikk/YoutubeColormodesExtension/master/images/" + item + ".png')"
    /*  REPLACE TO MOVE COLOR SELECTION TO OPTIONS
    button.addEventListener('click', function () {
      chrome.storage.sync.set({color: "url('https://raw.githubusercontent.com/KertuMikk/3.ea-kodutoo/master/images/" + item + ".png')", item: item}, function () {
        console.log('color is ' + item)
      })
    })
    */
    button.onclick = function () {
      chrome.storage.sync.set({item: item + '.css'}, function () {
        console.log('color is ' + item)
      })
      chrome.tabs.insertCSS({file: 'css/' + item + '.css'})
    }
    document.getElementById('buttonDiv').appendChild(button)
  }
}

constructOptions(kButtonTheme)
