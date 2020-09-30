(() => {
  $(() => {
    // 渲染日期
    jeDate("#releaseTime", {
      format: 'YYYY-MM-DD'
    });

    // 点击按钮也能弹出日期框
    $('#releaseTimeBtn').click(() => $('#releaseTime')[0].click());

    tinymce.init({
      selector: '#articleContent',
      height: '350px',
      language: 'zh_CN',
      directionality: 'ltr',
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
