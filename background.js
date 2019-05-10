// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict'

browser.runtime.onInstalled.addListener(function () {
  browser.storage.sync.set({color: "url('https://raw.githubusercontent.com/KertuMikk/YoutubeColormodesExtension/master/images/rainbow.png')"}, function () {

  })
  browser.declarativeContent.onPageChanged.removeRules(undefined, function () {
    browser.declarativeContent.onPageChanged.addRules([{
      conditions: [new browser.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'www.youtube.com', schemes: ['https'] }//, 
        // css: ['css/' + item]
      })
      ],
      actions: [new browser.declarativeContent.ShowPageAction()]
    }])
  })
})

browser.tabs.onCreated.addListener(ThemeChange)
browser.tabs.onUpdated.addListener(function (tabId, info, tab) {
  if (info.status == 'complete') ThemeChange(tab)
})

function ThemeChange (tab) {
  let item
  chrome.storage.local.get('item', function (data) {
    console.log('color is ' + data.item)
    item = data.item
    browser.tabs.insertCSS({file: 'css/' + data.item})
  })
  var tabUrl = 'https://www.youtube.com/*'
  if (tabUrl && tabUrl.indexOf('https://www.youtube.com/*') != -1) {
    browser.tabs.insertCSS(tab.id, {
      file: 'css/' + item
    })
  }
}
