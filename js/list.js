(() => {
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

  /**
   * 获取 URL 中的参数
   * @param {string} qs URL 中的查询字符串字段
   * @returns {Object} URL 参数对象
   */
  function getURIParams(qs) {
    const paramStr = qs.substr(1);
    const params = decodeURIComponent(paramStr).split('&');
    const param = Object.create(null);
    params.forEach(item => {
      const key = item.split('=')[0];
      const value = item.split('=')[1];
      param[key] = value;
    });
    return param;
  }

  /**
    * 渲染分页器
    * @param {number} currentPage 当前页数
    * @param {number} totalPages 总页数
    */
  function setPaginatior(currentPage, totalPages) {
    $('.pagination').bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 3,
      // 显示第几页
      currentPage,
      // 总页数
      totalPages,
      tooltipTitles(type, page) {
        switch (type) {
          case 'first':
            return '第一页';
          case 'prev':
            return '上一页';
          case 'next':
            return '下一页';
          case 'last':
            return '最后一页';
          case 'page':
            return `第${page}页`;
        }
      },
      // 当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
      onPageClicked(event, originalEvent, type, page) {
        renderNewsList(page);
      }
    });
  }

  /**
   * 渲染新闻列表
   * @param {number} currentPage 当前所在的页码
   */
  function renderNewsList(currentPage = 1) {

    const param = getURIParams(window.location.search);
    const data = Object.create(null);
    let categoryTitle = '';
    let perpage = 6;
    data.page = currentPage;

    if (param.name) {
      categoryTitle = param.name;
      data.type = param.id;
    } else if (param.key) {
      perpage = 10;
      categoryTitle = '搜索结果';
      data.key = param.key;
      data.perpage = perpage;
    }

    $.ajax({
      url: window.bignews.index_search,
      data,
      success(res) {
        if (res.code === 200) {

          // 返回的富文本编辑器的正文内容，如果模板引擎转义则会发生标签出现在内容中的情况，如果不转义则会发生html中出现多余标签的情况
          const commonNewsDetailHTML = window.commonNewsDetail({ categoryTitle, commonNewsItems: res.data.data });
          $('.news_list_wrapper').html(commonNewsDetailHTML);

          let totalPage = Math.ceil(res.data.totalCount / perpage);
          if (totalPage <= 0 || isNaN(totalPage)) {
            totalPage = 1;
          }
          // 根据响应的数据渲染分页器
          setPaginatior(currentPage, totalPage);
        }
      }
    });
  }

  $('.search_btn').click(e => {
    const key = $('.search_txt').val().trim();

    if (key === '') {
      alert('搜索内容不能为空');
      return;
    }

    window.location.href = `list.html?key=${key}`;
  });

  renderNewsList();
})();
