// ==UserScript==
// @name         load-payroll
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Fill my patriot using data from HomeBase and payroll sheet!
// @author       Yihui Liu
// @match        *://login.patriotsoftware.com/payroll/entry*
// @match        *://login.patriotsoftware.com/payroll/recallsavedentry*

// ==/UserScript==

;(function () {
  'use strict'
  if (location.href === 'http://localhost:8080/') return
  var script = document.createElement('script')
  script.src = 'https://tools.shakingcrab.com/static/admin/js/app.bundle.js'
  document.body.appendChild(script)
})()
