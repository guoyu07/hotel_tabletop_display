define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/eventgrid.html',
	'slick'
], function($, _, Backbone, eventGridTemplate){
	var EventGridView = Backbone.View.extend({
		template: _.template(eventGridTemplate),
		initialize: function(){
			this.setElement("<div style='position: relative; height: 100%; width: 100%'></div>");
		},
		render: function(){
			this.$el.html(this.template());
			this.$el.find(".slideshow").slick({
				touchMove: true,
				swipe: true,
				draggable: true,
				dots: true
			});
		}
	});
	return EventGridView;
});