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

page('/animations', function () {
    app.route = 'animations';
});

page('/home', function () {
    app.route = 'home';
});

page('/', function () {
    app.route = 'home';
});


page({ hashbang: true });
