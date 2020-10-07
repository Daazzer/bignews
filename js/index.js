(() => {
  // 渲染热门焦点
  $.ajax({
    url: window.bignews.index_hotpic,
    success(res) {
      if (res.code === 200) {
        const focusNewsHTML = window.focusNews({ pictures: res.data });
        $('.focus_list').html(focusNewsHTML);
      }
    }
  });

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

  // 渲染最新资讯
  $.ajax({
    url: window.bignews.index_latest,
    success(res) {
      if (res.code === 200) {
        // 返回的富文本编辑器的正文内容，如果模板引擎转义则会发生标签出现在内容中的情况，如果不转义则会发生html中出现多余标签的情况
        const commonNewsListHTML = window.commonNewsList({ commonNewsItems: res.data });
        $('.common_news').html(commonNewsListHTML);
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
})();
