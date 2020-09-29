(() => {
  $.ajax({
    url: window.bignews.user_detail,
    dataType: 'json',
    success(res) {
      if (res.code === 200) {
        const userData = res.data;
        // const userPic = userData.userPic;
        for (const key in userData) {
          if (key === 'userPic') {
            $('#userPicImg').prop('src', userData[key]);
          } else {
            $(`#${key}`).val(userData[key]);
          }
        }
      } else {
        alert(res.msg);
      }
    }
  });

  $('#editBtn').click(e => {
    e.preventDefault();
    const userEditForm = $('#form').get(0);
    const userEditFd = new FormData(userEditForm);

    $.ajax({
      type: 'post',
      url: window.bignews.user_edit,
      data: userEditFd,
      contentType: false,
      processData: false,
      dataType: 'json',
      success(res) {
        $('#userModal').modal('show');
        $('#userModal .modal-tips').text(res.msg);
        if (res.code === 200) {
          $('#userModal').on('hide.bs.modal', () => {
            // 在 index 页面发请求重新渲染页面
            const indexPage = window.parent;
            // 渲染页面
            indexPage.$.ajax({
              url: window.bignews.user_info,
              dataType: 'json',
              success(res) {
                if (res.code === 200) {
                  indexPage.$('#nickname').text(res.data.nickname);
                  indexPage.$('img.user_avatar').prop('src', res.data.userPic);
                }
              }
            });
          });
        }
      }
    });
  });

  $('#userPic').change(e => {
    const imgSrc = URL.createObjectURL(e.target.files[0]);
    $('#userPicImg').prop('src', imgSrc);
  });
})();
