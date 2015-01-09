$(document).foundation();

window.onload = function() {
    $('#program .inline-list .header').css("height", $('#program .inline-list').height());
};
$( window ).resize(function() {
    $('#program .inline-list .header').css("height", $('#program .inline-list').height());
});

