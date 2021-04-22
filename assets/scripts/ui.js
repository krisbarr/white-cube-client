'use strict'

const store = require('./store')
const events = require('./events.js')

const onSignUpSuccess = function() {
  $('#message').text("You're signed up!")
  $('#sign-up').trigger('reset')
}

const onError = function() {
  $('#message').text("That didn't work. Please try again")
  $('#sign-up').trigger('reset')
}
const onSignInSuccess = function() {
  $('#message').text("You're signed in!")
  $('#sign-up').trigger('reset')
}
const onChangePasswordSuccess = function () {
  $('#message').text("Your password has been changed")
  $('#change-password').trigger('reset')
}


module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onChangePasswordSuccess
}
