define([
  'jquery',
  'underscore',
  'backbone',
  'models/activity',
  'models/author',
  'models/hotelevent',
  'moment'
], function($, _, Backbone, Activity, Author, HotelEvent, moment){
  var ActivitySet = Backbone.Collection.extend({
    url: "http://mel-devel.media.mit.edu/sixdegrees/api/activities/?format=json",
    model: Activity,
    parse: function(response, options){
      var final_results = [];
      var results = response.results;
      var time = null;
      var author = null;
      var event = null;
      var action = null;

      _.each(results, function(result){
        time = result.time;
        author = new Author(result.author);
        event = new HotelEvent(result.event);
        action = result.action;
        final_results.push(new Activity({
          "time": time,
          "author": author,
          "event": event,
          "action": action
        }));
      });
      return final_results;
    }
  });
  return new ActivitySet();
});
