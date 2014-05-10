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
		initialize: function(){
			ActivitySet.fetch({
				success: function(data){
					var authors = new Backbone.Collection(ActivitySet.pluck("author")).pluck("location_name");
					console.log(authors);
				}
			});
		},
		render: function(){
			this.$el.html(this.template());
		}
	});

	return ActivityFeedView;
});
