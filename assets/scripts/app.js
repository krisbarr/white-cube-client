'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#paintings-create').hide()
  $('#paintings-index').hide()
  $('#paintings-update').hide()
  $('#paintings-destroy').hide()
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-password').on('submit', events.onChangePassword)
  $('#sign-out').on('click', events.onSignOut)
  $('#paintings-create').on('submit', events.onCreatePainting)
  $('#paintings-index').on('click', events.onIndexPainting)
  $('#paintings-update').on('submit', events.onUpdatePainting)
  $('#paintings-destroy').on('submit', events.onDestroyPainting)

})
