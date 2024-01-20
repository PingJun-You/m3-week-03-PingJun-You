$(document).ready(function () {
      // 假设GIF动画播放时间大约是3秒钟
    var gifDisplayDuration = 1000; // 3秒

    setTimeout(function() {
        // GIF播放完毕后隐藏GIF容器
        $('#gif-container').hide();

        // 显示倒数计时器的HTML内容
        $('#countdown-placeholder').show();

        // 开始倒数计时
        startCountdown();
    }, gifDisplayDuration);

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
