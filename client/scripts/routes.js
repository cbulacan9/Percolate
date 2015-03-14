'use strict';

var App = App || {};
App.Routers = App.Routers || {};

App.Routers.Main = Backbone.Router.extend({

  routes: {
    '': 'index'
  },
  index: function() {
    // Render index page
    new App.Views.Navbar();
    new App.Views.Splash();
    new App.Views.Highlight();
    new App.Views.CaseStudy();
    new App.Views.Quote();
    new App.Views.Action();
    new App.Views.Footer();
  }
});
