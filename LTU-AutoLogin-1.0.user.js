// ==UserScript==
// @name         LTU-AutoLogin
// @description  Automatically fills and clicks the button to quickly log-in from the LTU weblogon site.
// @version 1.0
// @author sleepy
// @match        https://weblogon.ltu.se/*
// ==/UserScript==

(function() {
    'use strict';

    document.getElementById("username").value = "USERNAME_HERE";
    document.getElementById("password").value = "PASSWORD_HERE";

    document.getElementsByClassName("btn-submit")[0].click();
})();