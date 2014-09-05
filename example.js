var extendBrowser = require('./index.js')
var mercury = require('mercury')

var element = document.createElement('div')
var state = window.state = mercury.struct({
  selected: mercury.value('setups/test'),
  entries: mercury.array([
    mercury.struct({
      type: 'directory',
      fileName: 'setups',
      entries: mercury.array([
        mercury.struct({
          type: 'file',
          fileName: 'test',
          fullPath: 'setups/test'
        }),
        mercury.struct({
          type: 'file',
          fileName: 'another test',
          fullPath: 'setups/another test'
        }),
        mercury.struct({
          type: 'file',
          fileName: 'big beats',
          fullPath: 'setups/big beats'
        })
      ])
    })
  ])
})

document.body.appendChild(element)
extendBrowser(element, state)