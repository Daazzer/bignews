(() => {
  // 渲染文章分类选择列表
  $.ajax({
    url: window.bignews.category_list,
    success(res) {
      if (res.code === 200) {
        const categorySelectListHTML = window.categorySelectList({ categoryItems: res.data, hasAll: false });
        $('#categoryId').html(categorySelectListHTML);
      } else {
        alert(res.msg);
      }
    }
  });

  // 文件上传预览
  $('#inputCover').change(e => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    $('#articleCover').prop('src', url);
  });

  $('#form').on('click', '#releaseBtn, #draftBtn', e => {
    e.preventDefault();
    if (confirm('确定要保存吗？')) {
      const articleTitle = $('#inputTitle').val().trim();
      const releaseTime = $('#releaseTime').val().trim();
      // 确保标题和时间不为空
      if (articleTitle === '' || releaseTime === '') {
        alert('发布时间和标题不能为空');
        return;
      }

      switch (e.target.id) {
        case 'releaseBtn':
          postArticle('已发布');
          break;
        case 'draftBtn':
          postArticle('草稿');
          break;
      }
    }
  });

  /**
    * 发送 post 请求，并发布文章
    * @param {string} state 文章状态
    */
  function postArticle(state) {
    const fd = new FormData($('#form')[0]);
    const articleContent = tinymce.activeEditor.getContent();
    // 追加富文本编辑器的内容
    fd.set('content', articleContent);
    // 追加文章状态
    fd.append('state', state);

    $.ajax({
      type: 'post',
      url: window.bignews.article_publish,
      contentType: false,
      processData: false,
      data: fd,
      dataType: 'json',
      success(res) {
        alert(res.msg);
        if (res.code === 200) {
          // 回到 article_list.html 页面
          $('.level02>li:eq(0) a', window.parent.document)[0].click();
        }
      },
      error(xhr, status) {
        alert(`${status}!! 保存数据失败`);
      }
    });
  }
})();
