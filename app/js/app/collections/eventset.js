define([
	'jquery',
	'underscore',
	'backbone',
	'models/hotelevent',
	'moment'
], function($, _, Backbone, HotelEvent, moment){
	var EventSet = Backbone.Collection.extend({
		url: "http://mel-devel.media.mit.edu/sixdegrees/api/events/?format=json",
		model: HotelEvent,
		custom_fetch: function() {
			$.ajax({
				method: "GET",
				url: "http://mel-devel.media.mit.edu/sixdegrees/api/events/?format=json",
				success: function(data){
					console.log(data)
				}
			})
		}
	});
	return new EventSet();
});
