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
  chrome.tabs.insertCSS({file: 'css/' + item + '.css'})
}
