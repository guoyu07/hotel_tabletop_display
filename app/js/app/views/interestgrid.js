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
    cancel_render: false,
    initialize: function(){
    },
    render: function(){
        if(this.interests === null || this.interests === undefined){
            var self = this;
            $.ajax({
                method: "GET",
                url: "http://mel-devel.media.mit.edu/sixdegrees/publicdisplay/screen_two/",
                success: function(data){
                    if(self.cancel_render)
                        return;
                    self.cancel_render = true;
                    self.interests = data[Math.floor(Math.random()*data.length)];
                    Backbone.trigger("typed", self.title_for_interest(self.interests));
                    self.render();
                }
            });
            return;
        }

        this.$el.html(this.template({
            interests: this.interests,
            title_for_interest: this.title_for_interest,
            brick_size: this.brick_class_size_for_interest
        }));
        //console.log(this.title_for_interest(this.interests));
        var wall = new freewall("#freewall");
        wall.reset({
            selector: '.brick',
            animate: false,
            // cellW: 160,
            // cellH: 160,
            delay: 30,
            onResize: function() {
                wall.refresh();
            }
        });
        // caculator width and height for IE7;
        wall.fitHeight();
    },

    brick_class_size_for_interest: function(interest){
        if(interest.n <= 1){
            return "1";
        }else if(interest.n <= 3){
            return "3";
        }else if(interest.n <= 8){
            return "8";
        }else{
            return "10";
        }
    },
    title_for_interest: function(interest){
        if(interest.location_name !== undefined){
            return [interest.n, " come(s) from ", interest.location_name];
        }

        if(interest.company_name !== undefined){
            return [interest.n, " work(s) for ", interest.company_name];
        }

        if(interest.industry_name !== undefined){
            return [interest.n, " work(s) in ", interest.industry_name];
        }

        if(interest.interest_name !== undefined){
            return [interest.n, " like ", interest.interest_name];
        }

        if(interest.school_name !== undefined){
            return [interest.n, " studied at ", interest.school_name];
        }

    }
  });
  return InterestGridView;
});
