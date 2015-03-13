'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Action = Backbone.View.extend({

  el: '.action-container',

  template: JST['client/templates/action.hbs'],

  events: {
    'click .perc-submit': 'mandrillMail'
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  mandrillMail: function(e) {
    e.preventDefault();
    var firstname = this.$('input[name=firstname]').val();
    var lastname = this.$('input[name=lastname]').val();
    var email = this.$('input[name=email]').val();
    var company = this.$('input[name=company]').val();
    var phone = this.$('input[name=phone]').val();
    var sendObj = {firstname: firstname, lastname: lastname, email: email, company: company, phone: phone};
    console.log(sendObj);
    this.model.save(sendObj);
  }

});
