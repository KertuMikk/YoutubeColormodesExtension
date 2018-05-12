
function script () {
  var a = document.createElement('script')
  a.scr = 'test.js'
  a.type = 'text/javascript'
  document.getElementById('head').appendChild(a)
}
script()
