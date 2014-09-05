var fs = require('fs')
var h = require('mercury').h
var mcss = require('micro-css')
var styles = mcss(fs.readFileSync(__dirname + '/styles.mcss', 'utf8'))

module.exports = function(){
  return h('style', {scoped: new BooleanHook(true)}, styles)
}

function BooleanHook(value) {
  this.value = value
}

BooleanHook.prototype.hook = function (elem, prop) {
  if (this.value){
    elem.setAttribute(prop, '')
  } else {
    elem.removeAttribute(prop, this.value)
  }
}