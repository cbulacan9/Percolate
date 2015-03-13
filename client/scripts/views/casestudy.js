'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.CaseStudy = Backbone.View.extend({

  el: '.case-study-container',

  template: JST['client/templates/casestudy.hbs'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
