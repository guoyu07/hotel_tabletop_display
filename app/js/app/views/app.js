define([
    'jquery',
    'underscore',
    'backbone',
    'common',
    'views/activityfeed',
    'views/eventgrid',
    'views/interestgrid'
], function($, _, Backbone, Common, ActivityFeedView, EventGridView, InterestGridView) {
    /**
     * The top-level piece of UI for the App.
     */
    var AppView = Backbone.View.extend({
        el: "#app",

        events: {

        },

        show_interest_grid: false,

        initialize: function() {
            // Make UI events (make sure you have required it!)
            // this.someView = new SomeView();
            // Fetch from collections
            // SomeCollection.fetch();

            this.listenTo(Backbone, "toggleMode", function(){
              this.show_interest_grid = !this.show_interest_grid;
              this.render();
            });

            this.render();

        },

        render: function() {
          $("#main_grid").html("");
          $("#activity-feed-container").html("");
          this.activityFeedView = new ActivityFeedView();
          this.eventGridView = new EventGridView();
          this.interestGridView = new InterestGridView();
          if(!this.show_interest_grid){
            $("#activity-feed-container").append(this.activityFeedView.$el);
            this.activityFeedView.render();

            $("#main_grid").append(this.eventGridView.$el);
            this.eventGridView.render();
          }else{
            $("#main_grid").append(this.interestGridView.$el);
            this.interestGridView.render();
          }
        },

    });
    return AppView;
});
