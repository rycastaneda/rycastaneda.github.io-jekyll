// var app = document.querySelector('#app');

// console.log("   app.route",     app.route);
// console.log("   page",     page);



var app = document.querySelector('#layout');
console.log("   app",     app);
console.log("   app.route",     app.route);

page('/todo', function () {
    app.route = 'todo';
console.log("   app.route",     app.route);
});

page('/linkedin', function () {
    app.route = 'linkedin';
});

page('/github', function () {
    app.route = 'github';
});


page('/', function (data) {
    // app.route = 'linkedin';
    console.log("test");
});

page({ hashbang: true });
    // template.route = 'linkedin'; // selected is an index by default
