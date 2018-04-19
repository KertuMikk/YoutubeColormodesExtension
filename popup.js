// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

let item
let changeColor = document.getElementById('changeColors')
chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundImage = data.color
  changeColor.setAttribute('value', data.color)
})
chrome.storage.sync.get('item', function (data) {
  changeColor.style.backgroundImage = data.item
  changeColor.setAttribute('item', data.item)
  item = data.item
})
changeColor.onclick = function () {
  chrome.tabs.insertCSS({file: item + '.css'})
//  chrome.tabs.executeScript(
  //   loadcss('https://raw.githubusercontent.com/KertuMikk/3.ea-kodutoo/master/' + item + '.css'))
}
function loadcss (url) {
  var head = document.getElementsByTagName('head')[0]
  let link = document.createElement('link')
  link.type = 'text/css'
  link.rel = 'stylesheet'
  link.href = url
  head.appendChild(link)
  return link
}
