/*
function test () {
  let script = document.createElement('script')
  script.href = chrome.extension.getURL('test.js')
  script.type = 'text/javascript'

  document.getElementsByTagName('body')[0].appendChild(script)
  console.log('color is ...')
}
window.onload = function () {
  test()
} */
function test () {
  chrome.storage.sync.get('item', function (data) {
    // let link = document.createElement('link')
    // link.href = chrome.extension.getURL('css/' + data.item)
    // link.type = 'text/css'
    // link.rel = 'stylesheet'
    // link.name = 'startScript'
    // document.getElementsByTagName('head')[0].appendChild(link)
    this.document.insertCSS({file: 'css/' + data.item})
    console.log('color is ' + data.item)
  })
}

window.onload = function () {
  test()
}
