'use strict'

const store = require('./store')
const events = require('./events')
const api = require('./api')
const createPainting = api.createPainting

const onSignUpSuccess = function() {
  $('#message').text("You're signed up!")
  $('#sign-up').trigger('reset')
}

const onError = function() {
  $('#message').text("That didn't work. Please try again")
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
}
const onSignInSuccess = function(response) {
  store.user = response.user
  $('#message').text("You're signed in!")
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#paintings-create').show()
}
const onChangePasswordSuccess = function () {
  $('#message').text("Your password has been changed")
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text("You're signed out!")
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
}
const onCreateSuccess = function(response) {
store.painting = response.painting
const paintingHtml = `
  <h4>Title: ${response.painting.title}</h4>
  <p>Artist: ${response.painting.artist}</p>
  <p>Location: ${response.painting.location}</p>
  <p>Movement: ${response.painting.movement}</p>
`
$('#message').text("You've created a painting!")
$('#painting-created').html(paintingHtml)
$('#paintings-create').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onCreateSuccess
}
