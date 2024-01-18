$(document).ready(function() {
    function updateCountdown() {
        var now = new Date();
        var newYear = new Date(now.getFullYear() + 1, 0, 1);
        var diff = newYear - now;

        var days = Math.floor(diff / (1000 * 60 * 60 * 24));
        var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((diff % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);
    }

    setInterval(updateCountdown, 1000);
});
