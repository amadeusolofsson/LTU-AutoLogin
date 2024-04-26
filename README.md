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
```
5. Put your username between the quotes where it says USERNAME_HERE, and put your password where it says PASSWORD_HERE.
   
6. Click File, Save. And Done.
