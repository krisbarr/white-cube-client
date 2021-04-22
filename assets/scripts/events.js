'use strict'

const api = require('./api')
const ui = require('./ui')
const formFields = require('../../lib/get-form-fields')
const store = require('./store')

const onSignUp = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}
const onSignIn = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}
const onChangePassword = function(event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword
}
