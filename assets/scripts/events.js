'use strict'

const api = require('./api')
const ui = require('./ui')
const formFields = require('../../lib/get-form-fields')
const store = require('./store')

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onError)
}
const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onError)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onError)
}
const onSignOut = function () {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onError)
}
const onCreatePainting = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = formFields(form)
  api.createPainting(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}
const onIndexPainting = function () {
  event.preventDefault()
  api.indexPainting()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}



module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreatePainting,
  onIndexPainting
}
