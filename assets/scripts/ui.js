'use strict'

const store = require('./store')
const events = require('./events')
const api = require('./api')
const onSignUpSuccess = function () {
  $('#message').text("You're signed up!")
  $('#sign-up').trigger('reset')
}

const onError = function () {
  $('#message').text("That didn't work. Please try again")
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#change-password').trigger('reset')
}
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text("You're signed in!")
  $('#sign-in').trigger('reset')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#paintings-create').show()
  $('#paintings-destroy').show()
  $('#paintings-update').show()
  $('#paintings-index').show()
}
const onChangePasswordSuccess = function () {
  $('#message').text('Your password has been changed')
  $('#change-password').trigger('reset')
}
const onSignOutSuccess = function () {
  $('#message').text("You're signed out!")
  $('#sign-out').hide()
  $('#change-password').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  $('#paintings-create').hide()
  $('#paintings-destroy').hide()
  $('#paintings-update').hide()
  $('#paintings-index').hide()
  $('#paintings-display').hide()
  $('#painting-created').hide()
  $('#painting-image').hide()
}
const onCreateSuccess = function (response) {
  store.painting = response.painting
  const paintingHtml = `
    <h4>Title: ${response.painting.title}</h4>
    <p>Artist: ${response.painting.artist}</p>
    <p>Location: ${response.painting.location}</p>
    <p>Year Painted: ${response.painting.yearPainted}</p>
    <p>Movement: ${response.painting.movement}</p>
  `
  const imageHtml = `
    <img src="${response.painting.image}" alt ="${response.painting.title}" style="width:300px" />
  `
  $('#message').text("You've created a painting!")
  $('#painting-image').html(imageHtml)
  $('#painting-created').html(paintingHtml)
  $('#paintings-create').trigger('reset')
}
const onIndexSuccess = function (response) {
  const paintings = response.paintings
  let paintingsHtml = ''
  paintings.forEach(painting => {
    paintingsHtml += `
      <img src="${painting.image}" alt ="${painting.title}" style="width:150px" />
      <h6>Title: ${painting.title}</h6>
      <p>Artist: ${painting.artist}</p>
      <p>Location: ${painting.location}</p>
      <p>Year Painted: ${painting.yearPainted}</p>
      <p>Movement: ${painting.movement}</p>
      <p>ID: ${painting._id}</p>
    `
  })

  $('#paintings-display').html(paintingsHtml)
  $('#message').text("Here's all the paintings!")
}
const onUpdateSuccess = function (response) {
  $('#message').text("You've updated the painting! Click Get All Paintings to refresh")
  $('#paintings-update').trigger('reset')
}
const onDestroySuccess = function () {
  $('#message').text("You've successfully deleted the painting! Click Get All Paintings to refresh")
  $('#paintings-destroy').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onError,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onCreateSuccess,
  onIndexSuccess,
  onUpdateSuccess,
  onDestroySuccess
}
