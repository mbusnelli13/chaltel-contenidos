// apply global RequireJS configuration
require.config({
    // baseUrl: '/assets/scripts/',
    deps: ['main'],
    // the left side is the module ID,
    // the right side is the path to
    // the jQuery file, relative to baseUrl.
    // Also, the path should NOT include
    // the '.js' file extension. This example
    // is using jQuery 1.9.0 located at
    // js/lib/jquery-1.9.0.js, relative to
    // the HTML page.
    paths: {
        // jquery: "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min,"
        "jquery": "vendor/jquery/jquery.min",
        "foundation": "vendor/foundation/js/foundation/foundation",
        "foundation.alerts": "vendor/foundation/js/foundation/foundation.alerts",
        "foundation.clearing": "vendor/foundation/js/foundation/foundation.clearing",
        "foundation.cookie": "vendor/foundation/js/foundation/foundation.cookie",
        "foundation.dropdown": "vendor/foundation/js/foundation/foundation.dropdown",
        "foundation.forms": "vendor/foundation/js/foundation/foundation.forms",
        "foundation.joyride": "vendor/foundation/js/foundation/foundation.joyride",
        "foundation.magellan": "vendor/foundation/js/foundation/foundation.magellan",
        "foundation.orbit": "vendor/foundation/js/foundation/foundation.orbit",
        "foundation.placeholder": "vendor/foundation/js/foundation/foundation.placeholder",
        "foundation.topbar": "vendor/foundation/js/foundation/foundation.topbar",
        "foundation.reveal": "vendor/foundation/js/foundation/foundation.reveal",
        "foundation.section": "vendor/foundation/js/foundation/foundation.section",
        "foundation.tooltips": "vendor/foundation/js/foundation/foundation.tooltips",
        "foundation.topbar": "vendor/foundation/js/foundation/foundation.topbar"
    },
    shim: {
        "jquery": {
            exports: 'jquery'
        },
        "foundation": {
            deps: ["jquery"]
        },
        "foundation.alerts": {
            deps: ["foundation"]
        },
        "foundation.clearing": {
            deps: ["foundation"]
        },
        "foundation.cookie": {
            deps: ["foundation"]
        },
        "foundation.dropdown": {
            deps: ["foundation"]
        },
        "foundation.forms": {
            deps: ["foundation"]
        },
        "foundation.joyride": {
            deps: ["foundation"]
        },
        "foundation.magellan": {
            deps: ["foundation"]
        },
        "foundation.orbit": {
            deps: ["foundation"]
        },
        "foundation.placeholder": {
            deps: ["foundation"]
        },
        "foundation.reveal": {
            deps: ["foundation"]
        },
        "foundation.section": {
            deps: ["foundation"]
        },
        "foundation.tooltips": {
            deps: ["foundation"]
        },
        "foundation.topbar": {
            deps: ["foundation"]
        }
    },

    waitSeconds: 20

});