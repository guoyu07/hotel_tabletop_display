define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/activityfeed.html'
], function($, _, Backbone, activityFeedTemplate){
	'use strict';
	var ActivityFeedView = Backbone.View.extend({
		tagName: "div",
		template: _.template(activityFeedTemplate),
		initialize: function(){

		},
		render: function(){
			this.$el.html(this.template());
		}
	});

	return ActivityFeedView;
});