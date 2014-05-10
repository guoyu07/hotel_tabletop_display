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
			this.$el.html(this.template({activities:reversed}));
		}
	});

	return ActivityFeedView;
});
