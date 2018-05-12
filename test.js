function UpdateColor () {
  chrome.storage.sync.get('item', function (data) {
    item = data.item
    console.log('color is ' + item)
    chrome.tabs.insertCSS({file: 'css/' + item})
  })
}
UpdateColor()
