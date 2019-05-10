// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const kButtonTheme = ['pastel', 'red', 'navy', 'grey', 'Mint', 'rose', 'feather', 'fox', 'sweater']

function constructOptions (kButtonTheme) {
  for (let item of kButtonTheme) {
    let button = document.createElement('button')
    button.style.height = 40 + 'px'
    button.style.width = 40 + 'px'
    button.style.backgroundImage = "url('https://raw.githubusercontent.com/KertuMikk/YoutubeColormodesExtension/master/images/" + item + ".png')"

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
