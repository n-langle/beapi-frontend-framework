import $ from 'jquery'
window.$ = window.jQuery = $

/**
 * Superfish for submenu most of the time in header
 */

require('superfish')

if ($('.sf-menu').length > 0) {
  $('.sf-menu').superfish()
}

/**
 * Menu Mobile
 */
let menuBody = $('html, body')
let menuOpen = $('.button__menu-open')
let menuClose = $('.button__menu-close')

menuOpen.on('click', function () {
  menuBody.addClass('menu-mobile--active')
})

menuClose.on('click', function () {
  menuBody.removeClass('menu-mobile--active')
})

if (menuBody.hasClass('menu-mobile--active')) {
  $('#main').on('click', function () {
    menuBody.removeClass('menu-mobile--active')
  })
}

let resizeBreakpoint = window.matchMedia('(min-width: 1024px)')

resizeBreakpoint.addListener(menuResizing)

function menuResizing (mediaQuery) {
  if (mediaQuery.matches) {
    // enter desktop
    menuBody.removeClass('menu-mobile--active')
  }
}
