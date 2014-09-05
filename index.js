var mercury = require("mercury")
var h = mercury.h

var renderStyles = require('./styles')

module.exports = extend

function extend(element, state){
  mercury.app(element, state, function(data){
    return h('div', [
      renderStyles(),
      data.entries.map(renderEntry.bind(state))
    ])
  })
}

function renderEntry(entry){
  var root = this
  if (entry.type === 'directory'){
    var entries = entry.entries || []
    return h('div.BrowserDirectory', [
      h('span', {className: '.title'}, entry.fileName),
      h('div', {className: '.sub'}, entries.map(renderEntry.bind(root)))
    ])
  } else {
    var selected = root.selected() == entry.fullPath
    return h('div.BrowserFile', { 
      'ev-click': mercury.event(root.selected.set, entry.fullPath),
      'className': selected ? '-selected' : null
    }, entry.fileName)
  }
}