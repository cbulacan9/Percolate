'use strict';

var App = App || {};
App.Routers = App.Routers || {};

App.Routers.Main = Backbone.Router.extend({

  routes: {
    '': 'index'
  },
  index: function() {
    // Render index page
    var email = new App.Models.Email({});
    new App.Views.Navbar();
    new App.Views.Splash();
    new App.Views.Highlight();
    new App.Views.CaseStudy();
    new App.Views.Quote();
    new App.Views.Action({model: email});
    new App.Views.Footer();
  }
});
