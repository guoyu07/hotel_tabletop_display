define([
	'jquery',
	'underscore',
	'backbone',
	'models/hotelevent',
	'moment'
], function($, _, Backbone, HotelEvent, moment){
	var EventSet = Backbone.Collection.extend({
		url: "http://mel-devel.media.mit.edu/sixdegrees/api/events/?format=json",
		model: HotelEvent
	});
	return new EventSet();
});
