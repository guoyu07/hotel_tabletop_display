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
    initialize: function(){

    },
    render: function(){
      this.$el.html(this.template());
			// var temp = "<div class='brick' style='width:{width}px; height: {height}px; background-color: {color}'><div class='cover'>Demo fit zone</div></div>";

			// var w = 1, h = 1, html = '', color = '', limitItem = 28;
			// for (var i = 0; i < limitItem; ++i) {
			// 	h = 1 + 3 * Math.random() << 0;
			// 	w = 1 + 3 * Math.random() << 0;
			// 	html += temp.replace(/\{height\}/g, h*150).replace(/\{width\}/g, w*150).replace("{color}", "rgb(142, 68, 173)");
			// }
			// $("#freewall").html(html);


			$(function() {
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
				wall.fitZone();
			});

    }
  });
  return InterestGridView;
});
