
// function script () {
/* var a = document.createElement('script')
  a.scr = 'test.js'
  a.type = 'text/javascript'
  */

chrome.storage.sync.get('item', function (data) {
  let link = document.createElement('link')
  link.href = chrome.extension.getURL('css/' + data.item)
  link.type = 'text/css'
  link.rel = 'stylesheet'
  console.log('color is ' + data.item)
  document.getElementsByTagName('head')[0].appendChild(link)
})

/* chrome.storage.sync.get('item', function (data) {
  console.log('color is ' + data.item)
  this.window.insertCSS({file: 'css/' + data.item})
}) */
/* }
window.onload = function () {
  script()
} */
