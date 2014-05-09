define([
	'jquery',
	'underscore',
	'backbone',
	'moment'
], function($, _, Backbone, moment){
	var HotelEvent = Backbone.Model.extend({
		defaults: {
			id: null,
			title: "Event Title",
			description: "Event Description",
			location: "Event Location",
			start_time: moment(),
			end_time: moment(),
			cover_image: null,
			relevant_interests: ["Interest 1", "Interest 2"],
			attending_count: 0
		},
		get_time_and_location: function(){
			var time = "";
			if(this.get("start_time").isBefore(moment())){
				time = "NOW";
			}else{
				time = this.get("start_time").format("h a").toUpperCase();
			}
			var location = this.get("location");
			return time + "@" + location;
		}
	});
	return HotelEvent;
});
