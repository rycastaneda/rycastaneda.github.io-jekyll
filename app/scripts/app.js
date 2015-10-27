// var app = document.querySelector('#app');

// console.log("   app.route",     app.route);
// console.log("   page",     page);


var app = document.querySelector('#layout');

page('/todo', function () {
    app.route = 'todo';
});

page('/linkedin', function () {
    app.route = 'linkedin';
});

page('/github', function () {
    app.route = 'github';
});

page('/home', function () {
    app.route = 'home';
});

page('/', function () {
    app.route = 'home';
});


page({ hashbang: true });
    // template.route = 'linkedin'; // selected is an index by default
