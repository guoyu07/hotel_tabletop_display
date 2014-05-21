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
		data: ["","",""],
		events: {
		},
		initialize: function(){
			var self = this;
			this.listenTo(Backbone, "typed", function(data){
				self.data = data;
				self.render();
			});
		},
		render: function(){
			this.$el.html(this.template({"data":this.data}));
		}
	});

	return InterestSidePanelView;
});
