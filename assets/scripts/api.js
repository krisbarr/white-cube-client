'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}
const signIn = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}
const changePassword = function(formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: formData,
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const createPainting = function(formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/paintings',
    data: formData,
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const indexPainting = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/paintings',
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const updatePainting = function(id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/paintings/' + id,
    data: formData,
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const destroyPainting = function(id) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/paintings/' + id,
    headers : {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createPainting,
  indexPainting,
  updatePainting,
  destroyPainting
}
