(() => {
  $(() => {
    /**
     * 获取查询字符串对象
     * @param {string} search url 的查询字符串字段 
     * @returns {Object} 查询字符串对象
     */
    function getQueryString(search) {
      const queryString = search;
      const paramStr = queryString.split('?')[1];
      const params = paramStr.split('&');
      const query = {};
      params.forEach(param => {
        const key = param.split('=')[0];
        const value = param.split('=')[1];
        query[key] = value;
      });
      return query;
    }

    /** 页面渲染 */
    function renderPage() {
      const query = getQueryString(window.location.search);
      const { id } = query;

      // 渲染文章属性
      $.ajax({
        url: window.bignews.article_search,
        data: { id },
        dataType: 'json',
        success(res) {
          if (res.code === 200) {
            const { title, cover, date, content, categoryId } = res.data;
            $('#inputTitle').val(title);
            $('#acticleCover').prop('src', cover);
            $('#releaseTime').val(date);
            $('#categoryId').val(categoryId);
            /*
            细节：由于tinymce比较复杂，加载需要时间。
            一旦网速过快，就有可能导致数据已经返回，但是插件还没加载完的情况
            解决方案：使用定时器延迟加载（可以添加一个loading动画迷惑用户）
             */
            setTimeout(() => tinymce.activeEditor.setContent(content), 200);
          } else {
            alert(res.msg);
          }
        }
      });

      // 渲染分类选项
      $.ajax({
        url: window.bignews.category_list,
        dataType: 'json',
        success(res) {
          if (res.code === 200) {
            const categorySelectHTML = window.categorySelectList({ categoryItems: res.data });
            $('#categoryId').html(categorySelectHTML);
          } else {
            alert(res.msg);
          }
        }
      });
    }

    renderPage();

    // 文件上传预览
    $('#inputCover').change(e => {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      $('#acticleCover').prop('src', url);
    });

    $('#form').on('click', '#editBtn, #draftBtn', e => {
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
          case 'editBtn':
            saveArticle('已发布');
            break;
          case 'draftBtn':
            saveArticle('草稿');
            break;
        }
      }
    });

    /**
     * 发送 post 请求保存文章
     * @param {string} state 文章状态
     */
    function saveArticle(state) {
      const fd = new FormData($('#form')[0]);
      const query = getQueryString(window.location.search);
      const articleContent = tinymce.activeEditor.getContent();
      const { id } = query;
      // 追加富文本编辑器的内容
      fd.set('content', articleContent);
      // 追加文章 id
      fd.append('id', id);
      // 追加文章状态
      fd.append('state', state);

      $.ajax({
        type: 'post',
        url: window.bignews.article_edit,
        contentType: false,
        processData: false,
        data: fd,
        dataType: 'json',
        success(res) {
          alert(res.msg);
          if (res.code === 200) {
            window.location.href = 'article_list.html';
          }
        },
        error(xhr, status) {
          alert(`${status}!! 保存数据失败`);
        }
      });
    }
  });
})();
