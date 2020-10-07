(() => {
  /**
   * 渲染文章列表
   * @param {number} currentPage 当前所在的页码
   */
  function renderPage(currentPage = 1) {
    const type = $('#selCategory').val();
    const state = $('#selStatus').val();

    $.ajax({
      url: window.bignews.article_query,
      dataType: 'json',
      data: {
        page: currentPage,
        perpage: 10, // 每页返回10条数据
        type,
        state,
      },
      success(res) {
        if (res.code === 200) {
          // 根据响应数据渲染文章列表
          const acticleListHTML = window.articleList({ articles: res.data.data });
          $('#acticleTable tbody').html(acticleListHTML);
          let totalPage = res.data.totalPage;
          if (totalPage <= 0 || isNaN(totalPage)) {
            totalPage = 1;
          }
          // 根据响应的数据渲染分页器
          setPaginatior(currentPage, totalPage);
        } else {
          alert(res.msg);
        }
      }
    });
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
        renderPage(page);
      }
    });
  }

  // 筛选文章类别
  $('#btnSearch').click(e => {
    e.preventDefault();

    renderPage();
  });

  // 渲染分类下拉菜单
  $.ajax({
    url: window.bignews.category_list,
    dataType: 'json',
    success(res) {
      if (res.code === 200) {
        const categoryHTML = window.categorySelectList({ categoryItems: res.data, hasAll: true });
        $('#selCategory').html(categoryHTML);
      } else {
        alert(res.msg);
      }
    }
  });

  // 删除文章
  $('#acticleTable').on('click', '.delete', e => {
    if (confirm('真的要删除此文章吗？')) {
      const id = e.target.dataset.id;
      $.ajax({
        type: 'post',
        url: window.bignews.article_delete,
        data: { id },
        dataType: 'json',
        success(res) {
          if (res.code === 204) {
            const currentPage = parseInt($('.pagination .active a').text());
            renderPage(currentPage);
          }
          alert(res.msg);
        },
        error(xhr, status) {
          alert(`${status}!! 删除失败`);
        }
      });
    }
  });

  renderPage();

  /* 
  点击发布文章按钮左侧导航栏对应的索引高亮显示
  直接等于点击左侧对应的索引
   */
  $('#releaseBtn').click(() => $('.level02>li:eq(1) a', window.parent.document)[0].click());
})();
