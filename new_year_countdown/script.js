$(document).ready(function(){
  function updateCountdown() {
    var now = new Date();
    var nextYear = now.getFullYear() + 1;
    var newYear = new Date(nextYear, 0, 1);
    var diff = newYear - now;

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diff % (1000 * 60)) / 1000);

    $('#days').text(days + " 天");
    $('#hours').text(hours + " 小時");
    $('#minutes').text(minutes + " 分鐘");
    $('#seconds').text(seconds + " 秒");



    if (diff <= 0) {
      clearInterval(interval);
      $('#countdown').html("新年快樂！");
    }

    $('#next-year').text(nextYear); // 設置下一年的年份
  }

  updateCountdown();
  var interval = setInterval(updateCountdown, 1000);
});
