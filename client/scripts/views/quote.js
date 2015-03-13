'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Quote = Backbone.View.extend({

  el: '.quote-container',

  template: JST['client/templates/quote.hbs'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
