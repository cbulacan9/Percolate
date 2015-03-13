/**
 * Mail Controller
 */

'use strict';

var settings = require('../config/env/default');
var path = require('path');

var key = 'cKipZmGLRHhpir_ExgcAKQ';
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(key);

var m = new mandrill.Mandrill(key);

var mandrillMail = function(mailObj) {

    var params = {
        "message": {
            "from_email":"cbulacan9@gmail.com",
            "to":[{"email": mailObj.email}],
            "subject": "Percolate --" + mailObj.company,
            "text": "Hi" + mailObj.firstname + mailObj.lastname + "it's great to see your interest in Percolate!"
        }
    };

	m.messages.send(params, function(res) {
		console.log(res);
	}, function(err) {
		console.log(err);
	});
};

module.exports = {
  mail: mandrillMail
};