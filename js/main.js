$(document).ready(function () {



});
$(function () {
  var location = window.location.href;
  var cur_url = '../' + location.split('/').pop();

  $('.nav li').each(function () {
    var link = $(this).find('a').attr('href');

    if (cur_url == link) {
      $(this).addClass('current');
    }
  });
});