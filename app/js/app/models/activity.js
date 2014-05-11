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
    get_relative_time_string: function(){
      var time = moment(this.get("time"));
      var now = moment();
      var seconds = now.diff(time, "seconds");
      var minutes = now.diff(time, "minutes");
      var hours = now.diff(time, "hours");
      var days = now.diff(time, "days");
      if(seconds < 60){
        return seconds + " SECONDS AGO";
      }else if(minutes < 60){
        return minutes + " MINUTES AGO";
      }else if(hours < 24){
        return hours + " HOURS AGO";
      }else{
        return days + " DAYS AGO";
      }
    }
  });
  return Activity;
});
