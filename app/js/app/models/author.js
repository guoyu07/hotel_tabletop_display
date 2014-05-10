define([
  'jquery',
  'underscore',
  'backbone',
  'moment'
], function($, _, Backbone, moment){
  var Author = Backbone.Model.extend({
    defaults: {
      display_name: null,
      id: null,
      industry_name: null,
      location_name: null,
      match: null,
      profile_photo: null
    },
  });
  return Author;
});
