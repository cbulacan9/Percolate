'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.Footer = Backbone.View.extend({

  el: '.footer-container',

  id: 'footer',

  className: 'footer',

  template: JST['client/templates/footer.hbs'],

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
