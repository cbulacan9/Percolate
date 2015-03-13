'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Highlight = Backbone.View.extend({

  el: '.highlight-container',

  template: JST['client/templates/highlight.hbs'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
