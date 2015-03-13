'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Splash = Backbone.View.extend({

  el: '.splash-container',

  template: JST['client/templates/splash.hbs'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
