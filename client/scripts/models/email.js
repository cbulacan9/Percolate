'use strict';

var App = App || {};
App.Models = App.Models || {};

App.Models.Email = Backbone.Model.extend({

  url: '/email',

  validation: {
  	firstname: {
  		required: true,
  		msg: 'Please enter your first name.'
  	},
  	lastname: {
  		required: true,
  		msg: 'Please enter your first name.'
  	},
  	email: {
  		required: true,
  		pattern: 'email',
  		msg: 'Please enter a valid email!'
  	},
  	company: {
  		required: true,
  		msg: 'Please enter a company name!'
  	}, 
  	phone: {
  		required: true,
  		msg: 'Please enter a phone number!'
  	}
  }

});
