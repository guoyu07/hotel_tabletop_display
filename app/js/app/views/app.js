define([
    'jquery',
    'underscore',
    'backbone',
    'common',
    'views/activityfeed',
    'views/eventgrid'
], function($, _, Backbone, Common, ActivityFeedView, EventGridView) {
    /**
     * The top-level piece of UI for the App.
     */
    var AppView = Backbone.View.extend({
        el: "#app",
        
        events: {
            
        },
        
        initialize: function() {
            // Make UI events (make sure you have required it!)
            // this.someView = new SomeView();
            this.activityFeedView = new ActivityFeedView();
            this.eventGridView = new EventGridView();

            // Fetch from collections
            // SomeCollection.fetch();

            this.render();

        },
        
        render: function() {

            // Populate divs
            $("#activity-feed-container").append(this.activityFeedView.$el);
            this.activityFeedView.render();

            $("#grid-container").append(this.eventGridView.$el);
            this.eventGridView.render();
            // $("#some_div").append(this.someView.$el);
            // this.someView.render();
            
        },
        
    });
    return AppView;
});