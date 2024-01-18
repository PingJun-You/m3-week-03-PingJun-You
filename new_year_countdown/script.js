$(document).ready(function () {
  function updateCountdown() {
    var now = new Date();
    var nextYear = now.getFullYear() + 1;
    var newYear = new Date(nextYear, 0, 1);
    var diff = newYear - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $('#days').text(days);
    $('#hours').text(hours);
    $('#minutes').text(minutes);
    $('#seconds').text(seconds);
    $('#new-year').text(nextYear); // 更新年份
  }

  setInterval(updateCountdown, 1000);
});
