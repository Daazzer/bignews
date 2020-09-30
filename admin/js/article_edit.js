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
        const { title, cover, date, content } = res.data;
        $('#inputTitle').val(title);
        $('#acticleCover').prop('src', cover);
        $('#releaseTime').val(date);
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
