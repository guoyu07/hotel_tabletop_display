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
			start_time: (new Date()).toString(),
			end_time: (new Date()).toString(),
			cover_image: null,
			relevant_interests: ["Interest 1", "Interest 2"],
			attending_count: 0,
			start_moment: null,
			end_moment: null
		},
		initialize: function(){
			this.set({
				"start_moment": moment(this.get("start_time")),
				"end_moment": moment(this.get("end_moment"))
			});
		},
		get_time_and_location: function(){
			if(this.get("start_moment").isBefore(moment())){
				time = "NOW";
			}else{
				time = this.get("start_moment").format("h a").toUpperCase();
			}
			var location = this.get("location");
			return time + "@" + location;
		}
	});
	return HotelEvent;
});
