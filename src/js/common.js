require.config({
    paths: {
        ko: "../lib/knockout/build/output/knockout-latest",
        material: "../lib/material-design-lite/material"
    },
    baseUrl: "/build/js"
});

require(['ko', 'viewmodels/appviewmodel'], function(ko, appViewModel){
	ko.applyBindings(new appViewModel());
});

