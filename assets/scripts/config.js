// apply global RequireJS configuration
require.config({
    // baseUrl: '/assets/scripts/',
    deps: ['scripts/main'],
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
        "jquery": "components/jquery/jquery.min",
        "foundation": "components/foundation/js/foundation/foundation",
        "foundation.alerts": "components/foundation/js/foundation/foundation.alerts",
        "foundation.clearing": "components/foundation/js/foundation/foundation.clearing",
        "foundation.cookie": "components/foundation/js/foundation/foundation.cookie",
        "foundation.dropdown": "components/foundation/js/foundation/foundation.dropdown",
        "foundation.forms": "components/foundation/js/foundation/foundation.forms",
        "foundation.joyride": "components/foundation/js/foundation/foundation.joyride",
        "foundation.magellan": "components/foundation/js/foundation/foundation.magellan",
        "foundation.orbit": "components/foundation/js/foundation/foundation.orbit",
        "foundation.placeholder": "components/foundation/js/foundation/foundation.placeholder",
        "foundation.topbar": "components/foundation/js/foundation/foundation.topbar",
        "foundation.reveal": "components/foundation/js/foundation/foundation.reveal",
        "foundation.section": "components/foundation/js/foundation/foundation.section",
        "foundation.tooltips": "components/foundation/js/foundation/foundation.tooltips",
        "foundation.topbar": "components/foundation/js/foundation/foundation.topbar",
        "plugins": "scripts/plugins"
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
        },
        "plugins": {
            deps: ["jquery"]
        }
    },

    waitSeconds: 20

});