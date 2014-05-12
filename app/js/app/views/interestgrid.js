define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/interestgrid.html',
  'freewall'
], function($, _, Backbone, interestGridTemplate, freewall){
  'use strict';
  var InterestGridView = Backbone.View.extend({
    tagName: 'div',
    template: _.template(interestGridTemplate),
    interests: null,
    initialize: function(){
        var self = this;
        $.ajax({
            method: "GET",
            url: "http://mel-devel.media.mit.edu/sixdegrees/publicdisplay/screen_two/",
            success: function(data){
                self.interests = data[Math.round(Math.random()*data.length)];
                self.render();
            }
        });
    },
    render: function(){
        if(this.interests === null || this.interests === undefined){
            return;
        }

        this.$el.html(this.template({
            interests: this.interests,
            title_for_interest: this.title_for_interest
        }));
        var wall = new freewall("#freewall");
        wall.reset({
            selector: '.brick',
            animate: false,
            cellW: 160,
            cellH: 160,
            delay: 30,
            onResize: function() {
                wall.refresh();
            }
        });
        // caculator width and height for IE7;
        wall.fitZone();
    },
    title_for_interest: function(interest){
        if(interest.location_name !== undefined){
            return interest.n + " come(s) from " + interest.location_name;
        }

        if(interest.company_name !== undefined){
            return interest.n + " work(s) for " + interest.company_name;
        }

        if(interest.industry_name !== undefined){
            return interest.n + " work(s) in " + interest.industry_name;
        }

        if(interest.interest_name !== undefined){
            return interest.n + " like " + interest.interest_name;
        }

        if(interest.school_name !== undefined){
            return interest.n + " studied at " + interest.school_name;
        }

    }
  });
  return InterestGridView;
});
