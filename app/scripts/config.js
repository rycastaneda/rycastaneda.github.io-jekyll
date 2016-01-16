var app = document.querySelector('#app') || {};
var devhosts = ['localhost', 'dev.music.freedom.tm'];
var config = {
    production: {},
    development: {
        data: 'data.json'
    },
};

/*jshint bitwise: false*/
app.config = config[!!~devhosts.indexOf(window.location.hostname) && 'development' || 'production'];
