define([
  'jquery',
  'underscore',
  'backbone',
  'moment'
], function($, _, Backbone, moment){
  var Activity = Backbone.Model.extend({
    defaults: {
      time: null,
      author: null,
      event: null,
      action: null
    },
  });
  return Activity;
});
