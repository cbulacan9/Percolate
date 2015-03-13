'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Navbar = Backbone.View.extend({

  el: '.header-container',

  template: JST['client/templates/navbar.hbs'],

  events: {
    'click div.show-menu': 'showMenu'
  },

  showMenu: function(e) {
    $('div.navigation').toggle();
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
