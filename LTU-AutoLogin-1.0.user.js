// ==UserScript==
// @name         LTU-AutoLogin (WebLogon and Canvas)
// @description  Automatically logs in on both LTU WebLogon and Canvas sites
// @author       Amadeus Olofsson
// @match        https://weblogon.ltu.se/*
// @match        https://idp.ltu.se/*
// ==/UserScript==

(function() {
    'use strict';

    const USERNAME = "Your username here";
    const PASSWORD = "Your password here";

    // WebLogon
    function autoLoginWebLogon() {
        document.getElementById("username").value = USERNAME;
        document.getElementById("password").value = PASSWORD;
        document.getElementsByClassName("btn-submit")[0].click();
    }

    // Canvas
    function autoLoginCanvas() {
        document.getElementById('username').value = USERNAME;
        document.getElementById('password').value = PASSWORD;
        document.querySelector('button[name="_eventId_proceed"]').click();
    }

    // 
    function runAutoLogin() {
        if (window.location.hostname === "weblogon.ltu.se") {
            autoLoginWebLogon();
        } else if (window.location.hostname === "idp.ltu.se") {
            autoLoginCanvas();
        }
    }

    // Run the appropriate login function when the page is fully loaded
    window.addEventListener('load', runAutoLogin);
})();
