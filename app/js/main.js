require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
    baseUrl: 'js/app',
    
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bootstrap: {
            deps: ['jquery']
        }
    },
    paths: {
        jquery: '../lib/jquery',
        underscore: '../lib/underscore',
        backbone: '../lib/backbone',
        bootstrap: '../../css/bootstrap/js/bootstrap'
    }
});

require([
    'backbone',
    'views/app',
], function(Backbone, AppView) {
    Backbone.history.start();
    
    // Initialize the application view
    var appView = new AppView();
    appView.render();
});