define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/eventgrid.html',
	'collections/eventset',
	'models/hotelevent',
	'moment',
	'slick'
], function($, _, Backbone, eventGridTemplate, EventSet, HotelEvent){
	var EventGridView = Backbone.View.extend({
		template: _.template(eventGridTemplate),
		initialize: function(){
			this.setElement("<div style='position: relative; height: 100%; width: 100%'></div>");
		},
		render: function(){
			var events = [
					{
							"id": 1,
							"title": "Branding and Mobile Apps",
							"description": "Come learn about how you can better brand your mobile apps from our guest speaker, John Smith, Lead Designer at Startuply",
							"start_time": "2014-06-17T17:00:00Z",
							"end_time": null,
							"location": "Marriott Business Center",
							"cover_image": "http://mel-devel.media.mit.edu/sixdegrees/media/cache/4a/70/4a7039081e44793ff688cb9dad25df92.jpg",
							"relevant_interests": [
									"1",
									"2",
									"3"
							],
							"attending_count": 6
					},
					{
							"id": 2,
							"title": "Meet & Greet",
							"description": "This is a great way to meet other guests. Come socialize over drinks!",
							"start_time": "2014-06-16T19:00:00Z",
							"end_time": null,
							"location": "Champions Sports Bar",
							"cover_image": "http://mel-devel.media.mit.edu/sixdegrees/media/cache/bd/26/bd261ccde6c50262f45ecb3f61990656.jpg",
							"relevant_interests": [
							"1",
							"2",
							"3"
							],
							"attending_count": 2
					},
					{
							"id": 3,
							"title": "Branding and Mobile Apps",
							"description": "Come learn about how you can better brand your mobile apps from our guest speaker, John Smith, Lead Designer at Startuply",
							"start_time": "2014-06-17T17:00:00Z",
							"end_time": null,
							"location": "Marriott Business Center",
							"cover_image": "http://mel-devel.media.mit.edu/sixdegrees/media/cache/4a/70/4a7039081e44793ff688cb9dad25df92.jpg",
							"relevant_interests": [
									"1",
									"2",
									"3"
							],
							"attending_count": 6
					},
					{
							"id": 4,
							"title": "Branding and Mobile Apps",
							"description": "Come learn about how you can better brand your mobile apps from our guest speaker, John Smith, Lead Designer at Startuply",
							"start_time": "2014-06-17T17:00:00Z",
							"end_time": null,
							"location": "Marriott Business Center",
							"cover_image": "http://mel-devel.media.mit.edu/sixdegrees/media/cache/4a/70/4a7039081e44793ff688cb9dad25df92.jpg",
							"relevant_interests": [
									"1",
									"2",
									"3"
							],
							"attending_count": 6
					},
					{
							"id": 5,
							"title": "Branding and Mobile Apps",
							"description": "Come learn about how you can better brand your mobile apps from our guest speaker, John Smith, Lead Designer at Startuply",
							"start_time": "2014-06-17T17:00:00Z",
							"end_time": null,
							"location": "Marriott Business Center",
							"cover_image": "http://mel-devel.media.mit.edu/sixdegrees/media/cache/4a/70/4a7039081e44793ff688cb9dad25df92.jpg",
							"relevant_interests": [
									"1",
									"2",
									"3"
							],
							"attending_count": 6
					}];
			_.each(events, function(event){
				EventSet.add(new HotelEvent({
					id: event.id,
					title: event.title,
					description: event.description,
					location: event.location,
					start_time: moment(event.start_time),
					end_time: moment(event.end_time),
					cover_image: event.cover_image,
					relevant_interests: event.relevant_interests,
					attending_count: event.attending_count
				}));
			});
			//console.log(moment("2014-06-17T17:00:00Z").format("h a").toUpperCase());
			this.$el.html(this.template({
				events: EventSet.models
			}));
			this.$el.find(".slideshow").slick({
				touchMove: true,
				swipe: true,
				draggable: true
			});
		}
	});
	return EventGridView;
});
