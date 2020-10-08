(() => {
  $(() => {
    // 如果是文章发布页则显示现在的时间，否则不显示时间
    const url = window.location.href;
    const isArticlePage = /article_release/.test(url);
    // 渲染日期
    jeDate("#releaseTime", {
      isinitVal: isArticlePage,
      format: 'YYYY-MM-DD'
    });

    // 点击按钮也能弹出日期框
    $('#releaseTimeBtn').click(() => $('#releaseTime')[0].click());

    tinymce.init({
      selector: '#articleContent',
      height: '350px',
      language: 'zh_CN',
      browser_spellcheck: true,
      contextmenu: false,
      plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste imagetools wordcount',
        'code'
      ],
      toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code',
    });
  });
})();
