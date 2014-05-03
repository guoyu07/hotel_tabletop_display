define([
	'jquery',
	'underscore',
	'backbone',
	'models/hotelevent',
	'moment'
], function($, _, Backbone, HotelEvent, moment){
	var EventSet = Backbone.Collection.extend({
		model: HotelEvent
	});

	return new EventSet();
});