(() => {
  $('#loginBtn').click(e => {
    e.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();

    // 确保账号密码不为空
    if (username.trim() === '' || password.trim() === '') {
      $('#loginModal').modal('show');
      $('#loginModal .modal-body .modal-message').text('用户名和密码不能为空');
      return;
    }

    // 发送用户登录的 post 请求，请求账号登录信息
    $.ajax({
      type: 'post',
      url: 'http://127.0.0.1:8080/api/v1/admin/user/login',
      data: {
        username,
        password
      },
      dataType: 'json',
      success(res) {
        $('#loginModal').modal('show');
        $('#loginModal .modal-body .modal-message').text(res.msg);
        if (res.code === 200) {
          // 保存 token 到本地存储
          window.localStorage.setItem('bignews_token', res.token);
          // 绑定模态框隐藏事件
          $('#loginModal .btn-primary').text('确定');
          $('#loginModal').on('hide.bs.modal', () => window.location.href = 'index.html');
        }
      }
    });
  });
})();
