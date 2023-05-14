// ==UserScript==
// @name         AWS Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically set AWS to dark mode
// @author       XargsUK
// @match        https://*.console.aws.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (document.cookie.indexOf('awsc-color-theme=light') >= 0) {
        document.cookie = 'awsc-color-theme=dark; domain=.amazon.com; path=/;';
        location.reload();
    }
})();
