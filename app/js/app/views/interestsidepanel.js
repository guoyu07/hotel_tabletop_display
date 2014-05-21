define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/interestsidepanel.html',
	'models/activity',
	'collections/activityset'
], function($, _, Backbone, interestSidePanelView, Activity, ActivitySet){
	'use strict';
	var InterestSidePanelView = Backbone.View.extend({
		tagName: "div",
		template: _.template(interestSidePanelView),
		events: {
		},
		initialize: function(){
			console.log(this.template());
			var self = this;
			ActivitySet.fetch({
				success: function(data){
					self.render();
				}
			});
		},
		render: function(){
			this.$el.html(this.template());
		}
	});

	return InterestSidePanelView;
});
