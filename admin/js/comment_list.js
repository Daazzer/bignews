(() => {
  /**
   * 渲染评论列表
   * @param {number} currentPage 当前所在的页码
   */
  function renderCommentList(currentPage = 1) {
    $.ajax({
      url: window.bignews.comment_search,
      data: {
        page: currentPage,
        perpage: 10, // 每页返回10条数据
      },
      success(res) {
        if (res.code === 200) {
          // 根据响应数据渲染评论列表
          const commentListHTML = window.commentList({ comments: res.data.data });
          $('#commentTable>tbody').html(commentListHTML);
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
    $('#pagination').bootstrapPaginator({
      //设置版本号
      bootstrapMajorVersion: 1,
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
        renderCommentList(page);
      }
    });
  }

  $('body').on('click', '.btn-pass, .btn-reject, .btn-delete', e => {
    const id = $(e.currentTarget).attr('data-id');

    let url = '';
    let msg = '';

    if ($(e.currentTarget).hasClass('btn-pass')) {
      url = window.bignews.comment_pass;
      msg = '审批通过';
    } else if ($(e.currentTarget).hasClass('btn-reject')) {
      url = window.bignews.comment_reject;
      msg = '拒绝成功';
    } else if ($(e.currentTarget).hasClass('btn-delete') && confirm('真的要删除吗？')) {
      url = window.bignews.comment_delete;
      msg = '删除通过';
    } else {
      return;
    }

    $.ajax({
      type: 'post',
      url,
      data: { id },
      success(res) {
        if (res.code === 200) {
          alert(msg);
          const currentPage = parseInt($('#pagination .active a').text());
          renderCommentList(currentPage);
        }
      }
    });
  });

  renderCommentList();
})();
