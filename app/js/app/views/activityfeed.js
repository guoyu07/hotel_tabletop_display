define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/activityfeed.html',
	'models/activity',
	'collections/activityset'
], function($, _, Backbone, activityFeedTemplate, Activity, ActivitySet){
	'use strict';
	var ActivityFeedView = Backbone.View.extend({
		tagName: "div",
		template: _.template(activityFeedTemplate),
		events: {
			'click .activity-item': 'on_activity_item_click'
		},
		on_activity_item_click: function(){
			Backbone.trigger("toggleMode");
		},
		initialize: function(){
			var self = this;
			ActivitySet.fetch({
				success: function(data){
					self.render();
				}
			});
		},
		render: function(){
			var reversed = [];
			ActivitySet.each(function(x){
				reversed.unshift(x);
			});
			this.$el.html(this.template({activities:reversed, "get_activity_description": this.get_activity_description}));
		},
		get_activity_description: function(activity){

			// Join
				// Location
				// Job

			// Attend
				// Num

			var author = activity.get("author");
			var event = activity.get("event");
			if(activity.get("action") == "join"){
				if(Math.random() < 0.5){
					var num_people = 0;
					ActivitySet.each(function(act){
						if(act.get("action") == "join" && act.get("author").get("location_name") == author.get("location_name")){
							num_people += 1;
						}
					});
					var prepend = num_people + " guests are from";
					if(num_people == 1){
						prepend = "Someone is from";
					}
					return [prepend, author.get("location_name")];
				}else{
					var num_people = 0;
					ActivitySet.each(function(act){
						if(act.get("action") == "join" && act.get("author").get("industry_name") == author.get("industry_name")){
							num_people += 1;
						}
					});
					var prepend = num_people + " guests work in";
					if(num_people == 1){
						prepend = "Someone works in";
					}
					return [prepend, author.get("industry_name")];
				}
			}else{
				var num_people = 0;
				ActivitySet.each(function(act){
					if(act.get("action") == "attend" && act.get("event").get("title") == event.get("title")){
						num_people += 1;
					}
				});
				var prepend = num_people + " guests are attending";
				if(num_people == 1){
					prepend = "Someone is attending";
				}
				return [prepend, event.get("title")];
			}
		}
	});

	return ActivityFeedView;
});
