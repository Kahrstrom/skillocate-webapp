require.config({
    paths: {
        ko: "../lib/knockout/build/output/knockout-latest"
    },
    baseUrl: "/build/js"
});

require(['ko', 'viewmodels/appviewmodel'], function(ko, appViewModel){
	ko.applyBindings(new appViewModel());
})