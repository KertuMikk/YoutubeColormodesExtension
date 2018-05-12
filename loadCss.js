
// function script () {
/* var a = document.createElement('script')
  a.scr = 'test.js'
  a.type = 'text/javascript'
  document.getElementById('head').appendChild(a)
  chrome.storage.sync.get('item', function (data) {
    console.log('color is ' + data.item)
    this.window.insertCSS({file: 'css/' + data.item})
  }) */
let item
chrome.storage.sync.get('item', function (data) {
  item = data.item
})
let link = document.createElement('link')
link.href = chrome.extension.getURL('css/' + item)
link.type = 'text/css'
link.rel = 'stylesheet'
document.getElementsByTagName('head')[0].appendChild(link)
/* }
window.onload = function () {
  script()
}*/
