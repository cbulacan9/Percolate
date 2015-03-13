'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Action = Backbone.View.extend({

  el: '.action-container',

  template: JST['client/templates/action.hbs'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
