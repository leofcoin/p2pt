'use strict';

var p2pt = require('./p2pt.js');
var wrtc = require('@koush/wrtc');
require('tty');
require('util');
require('os');
require('crypto');
require('stream');
require('events');
require('buffer');
require('simple-websocket');
require('net');
require('querystring');

class P2PT extends p2pt {
  /**
   *
   * @param array announceURLs List of announce tracker URLs
   * @param string identifierString Identifier used to discover peers in the network
   */
  constructor (announceURLs = [], identifierString = '') {
    super(announceURLs, identifierString);

    this._wrtc = wrtc;
  }
}

module.exports = P2PT;
