# LTU-AutoLogin

A very simple script for the lazy to click the login button when connecting to a site where CAS is used (Such as canvas).

## Installation

1. Install Tampermonkey for your browser:
   - [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Tampermonkey for Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

2. Click on the Tampermonkey icon in your browser toolbar.

3. Select "Create a new script...".

4. Copy and paste the following code into the editor:

```javascript
// ==UserScript==
// @name         LTU-AutoLogin (WebLogon, Canvas, Ladok, SeamlessAccess)
// @namespace    https://github.com/amadeusolofsson
// @version      1.3
// @description  Automatically logs in on LTU WebLogon, Canvas, Ladok, and SeamlessAccess
// @author       Amadeus Olofsson
// @match        https://weblogon.ltu.se/*
// @match        https://idp.ltu.se/*
// @match        https://www.student.ladok.se/*
// @match        https://service.seamlessaccess.org/*
// ==/UserScript==

(function() {
    const USERNAME = "Your USERNAME here";
    const PASSWORD = "Your PASSOWRD here";

    // WebLogon
    function autoLoginWebLogon() {
        const usernameField = document.getElementById("username");
        const passwordField = document.getElementById("password");
        const submitButton = document.getElementsByClassName("btn-submit")[0];

        if (usernameField && passwordField && submitButton) {
            usernameField.value = USERNAME;
            passwordField.value = PASSWORD;
            submitButton.click();
        }
    }

    // Canvas
    function autoLoginCanvas() {
        const usernameField = document.getElementById('username');
        const passwordField = document.getElementById('password');
        const submitButton = document.querySelector('button[name="_eventId_proceed"]');

        if (usernameField && passwordField && submitButton) {
            usernameField.value = USERNAME;
            passwordField.value = PASSWORD;
            submitButton.click();
        }
    }

    // Ladok
    function autoLoginLadok() {
        const loginButton = document.querySelector('.btn-ladok-inloggning');
        if (loginButton) {
            loginButton.click();
        }
    }

    // SeamlessAccess
    function autoSelectSeamlessAccess() {
        const firstInstitution = document.querySelector('a.row.institution');
        if (firstInstitution) {
            firstInstitution.click();
        }
    }

    // Check for current site and run function
    function runAutoLogin() {
        if (window.location.hostname === "weblogon.ltu.se") {
            autoLoginWebLogon();
        } else if (window.location.hostname === "idp.ltu.se") {
            autoLoginCanvas();
        } else if (window.location.hostname.includes("ladok.se")) {
            autoLoginLadok();
        } else if (window.location.hostname.includes("seamlessaccess.org")) {
            autoSelectSeamlessAccess();
        }
    }

    // Simple observer
    const observer = new MutationObserver(runAutoLogin);
    observer.observe(document, {
        childList: true,
        subtree: true,
    });

    // Run immediately and on load
    runAutoLogin();
    window.addEventListener('load', runAutoLogin);
})();
```
5. Put your username between the quotes where it says "Your username here", and put your password where it says "Your password here".
   
6. Click File, Save. And Done.
