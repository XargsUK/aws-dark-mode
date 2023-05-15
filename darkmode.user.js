// ==UserScript==
// @name         AWS Dark Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically set AWS to dark mode
// @author       XargsUK
// @match        https://*.amazon.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length === 2) return parts.pop().split(";").shift();
    }

    var theme = getCookie('awsc-color-theme');
    
    if (theme !== 'dark') {
        document.cookie = 'awsc-color-theme=dark;domain=.amazon.com;path=/;';
        location.reload();
    }
})();
