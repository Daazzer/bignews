(() => {
  const url = window.location.href;
  const id = url.substr(1).split('=')[1];

  // 渲染分类列表
  $.ajax({
    url: window.bignews.index_category,
    success(res) {
      if (res.code === 200) {
        const categoryListHTML = window.categoryList({ categoryItems: res.data });
        $('.level_two').html(categoryListHTML);
      }
    }
  });

  // 渲染热门排行
  $.ajax({
    url: window.bignews.index_rank,
    success(res) {
      if (res.code === 200) {
        const hotrankListHTML = window.hotrankList({ hotrankItems: res.data });
        $('.hotrank_list').html(hotrankListHTML);
      }
    }
  });

  // 渲染最新评论
  $.ajax({
    url: window.bignews.index_latest_comment,
    success(res) {
      if (res.code === 200) {
        const commentListHTML = window.commentList({ comments: res.data });
        $('.comment_list').html(commentListHTML);
      }
    }
  });

  // 渲染焦点关注
  $.ajax({
    url: window.bignews.index_attention,
    success(res) {
      if (res.code === 200) {
        const attentionListHTML = window.attentionList({ attentionItems: res.data });
        $('.guanzhu_list').html(attentionListHTML);
      }
    }
  });

  // 渲染新闻详情
  $.ajax({
    url: window.bignews.index_article,
    data: { id },
    success(res) {
      if (res.code === 200) {
        const articleTitle = res.data.title;
        const articleCategory = res.data.category;
        const articleContent = res.data.content;
        const articleInfoContentHTML = window.articleInfoContent({ article: res.data });
        const articleLinksContentHTML = window.articleLinksContent({ article: res.data });
        $('.article_title').text(articleTitle);
        $('#articleCategory').text(articleCategory);
        $('.article_con').html(articleContent);
        $('.article_info').html(articleInfoContentHTML);
        $('.article_links').html(articleLinksContentHTML);
      }
    }
  });

  // 渲染评论详情
  $.ajax({
    url: window.bignews.index_get_comment,
    data: { articleId: id },
    success(res) {
      if (res.code === 200) {
        const commentDetailListHTML = window.commentDetailList({ commentItems: res.data });
        $('.comment_list_con').html(commentDetailListHTML);
        $('.comment_count').text(res.data.length + '条评论');
      }
    }
  });

  $('.comment_sub').click(e => {
    e.preventDefault();
    const author = $('.comment_name').val().trim();
    const content = $('.comment_input').val().trim();

    if (author === '' || content === '') {
      alert('用户名和评论内容不能为空');
      return;
    }

    const articleId = id;

    $.ajax({
      type: 'post',
      url: window.bignews.index_post_comment,
      data: {
        author,
        content,
        articleId
      },
      success(res) {
        console.log(res);
        if (res.code === 201) {
          alert('发表成功');
          window.location.reload();
        }
      }
    });
  });

  $('.search_btn').click(e => {
    const key = $('.search_txt').val().trim();

    if (key === '') {
      alert('搜索内容不能为空');
      return;
    }

    window.location.href = `list.html?key=${key}`;
  });
})();
