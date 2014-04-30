define([
    'jquery',
    'underscore',
    'backbone',
    'common'
], function($, _, Backbone, Common) {
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


            // Fetch from collections
            // SomeCollection.fetch();

            this.render();

        },
        
        render: function() {

            // Populate divs
            // $("#some_div").append(this.someView.$el);
            // this.someView.render();
            
        },
        
    });
    return AppView;
});