// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({color: "url('https://raw.githubusercontent.com/KertuMikk/YoutubeColormodesExtension/master/images/rainbow.png')"}, function () {

  })
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'www.youtube.com', schemes: ['https'] }
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
  })
})
/* chrome.runtime.onStartup.addListener(function () {
  chrome.storage.sync.get('item', function (data) {
    console.log('color is ' + data.item)
    chrome.tabs.insertCSS({file: 'css/' + data.item})
  })
})
*/
