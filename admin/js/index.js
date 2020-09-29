(() => {
  // 渲染页面
  $.ajax({
    url: window.bignews.user_info,
    dataType: 'json',
    success(res) {
      if (res.code === 200) {
        $('#nickname').text(res.data.nickname);
        $('img.user_avatar').prop('src', res.data.userPic);
      }
    }
  });

  // 用户登出
  $('#logout').click(() => {
    if (confirm('真的要退出吗？')) {
      window.localStorage.removeItem('bignews_token');
      window.location.href = 'login.html';
    }
  });

  $('.level01').click(e => {
    $('.level01').removeClass('active');
    $(e.currentTarget).addClass('active');

    const $arrowDownIcons = $(e.currentTarget).find('.icon-arrowdownl');
    // 检测一级按钮中是否有箭头
    if ($arrowDownIcons.length > 0) {
      $arrowDownIcons.toggleClass('rotate0');
      $('.level02').slideToggle();
    } else {
      $('.icon-arrowdownl').removeClass('rotate0');
      $('.level02').slideUp();
    }
  });

  $('.level02 li').click(e => {
    $(e.currentTarget).addClass('active').siblings().removeClass('active');
  });
})();
