define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/eventgrid.html',
	'collections/eventset',
	'collections/activityset',
	'models/hotelevent',
	'moment',
	'slick'
], function($, _, Backbone, eventGridTemplate, EventSet, ActivitySet, HotelEvent){
	var EventGridView = Backbone.View.extend({
		template: _.template(eventGridTemplate),
		initialize: function(){
			this.setElement("<div style='position: relative; height: 100%; width: 100%'></div>");
			var self = this;
			EventSet.fetch({
				success:function(data){
					self.render();
				}
			});
			ActivitySet.fetch({
				success: function(data){
					console.log(ActivitySet);
				}
			});
		},
		render: function(){
			this.$el.html(this.template({
				events: EventSet.models
			}));
			this.$el.find(".slideshow").slick({
				touchMove: true,
				swipe: true,
				draggable: true
			});
			this.animateEventBoxes();
		},
		animateEventBoxes: function(){
			this.$el.find('.bar').animate({width:"150px"},1000);
			this.$el.find(".attending-number").each(function(index, value){
				var item = $(value);
				var iterations = Number(item.html());
				var i = 0;
				var recurse = function(){
					item.html(i);
					i += 1;
					if(i <= iterations){
						setTimeout(recurse, 100);
					}
				}
				setTimeout(recurse, 100);
			});
		}
	});
	return EventGridView;
});
