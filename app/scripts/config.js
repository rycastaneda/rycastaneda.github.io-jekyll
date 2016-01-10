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
console.log("   app.config",     app.config);
app.serialize = function (obj) {
    var str = [];
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop]) {
            str.push(encodeURIComponent(prop) + '=' + encodeURIComponent(obj[prop]));
        }
    }
    return str.join('&');
};