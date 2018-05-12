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
        pageUrl: { hostEquals: 'www.youtube.com', schemes: ['https'] }//, 
        // css: ['css/' + item]
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }])
  })
})

chrome.tabs.onCreated.addListener(ThemeChange)
chrome.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status == 'complete') ThemeChange(tab)
})

function ThemeChange (tab) {
  let item
  chrome.storage.sync.get('item', function (data) {
    console.log('color is ' + data.item)
    item = data.item
    chrome.tabs.insertCSS({file: 'css/' + data.item})
  })
  var tabUrl = 'https://www.youtube.com/*'
  if (tabUrl && tabUrl.indexOf('https://www.youtube.com/*') != -1) {
    chrome.tabs.insertCSS(tab.id, {
      file: 'css/' + item
    })
  }
}
