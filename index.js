/*!
 * Copyright (c) 2017, Park Alter (pseudonym)
 * Distributed under the MIT software license, see the accompanying
 * file COPYING or http://www.opensource.org/licenses/mit-license.php
 *
 * https://github.com/park-alter/wmcc-desktop
 * index.js - a javascript WorldMobileCoin (WMCC) Desktop library.
 */

'use strict';
// require
const {window} = require('./lib/wmcc-window');

// window option
const windowOptions = {
  webPreferences: {
    devTools: true
  }
};

// setup/initialize window
const win = new window(windowOptions);

// start window browser
win.start();
