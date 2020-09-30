(() => {
  // 初始化渲染页面
  function renderPage() {
    $.ajax({
      url: window.bignews.category_list,
      dataType: 'json',
      success(res) {
        if (res.code === 200) {
          const articleCategoryListHTML = window.articleCategoryList({ articleCategoryItems: res.data });
          $('#articleCategoryTable tbody').html(articleCategoryListHTML);
        }
      }
    });
  }

  renderPage();

  // 打开模态框
  $('#articleCategoryModal').on('show.bs.modal', e => {
    // 清空输入框
    $('#recipientName').val('');
    $('#messageText').val('');
    $('#modelTips').text('');

    if (e.relatedTarget.classList.contains('btn-edit')) {
      editCategory(e.relatedTarget.dataset.id);
    } else if (e.relatedTarget.id === 'addCategoryBtn') {
      addCategory();
    }
  });

  // 新增分类
  function addCategory() {
    $('#categoryModalTitle').text('新增分类');

    handleConfirm((name, slug) => {
      $.ajax({
        type: 'post',
        url: window.bignews.category_add,
        data: {
          name,
          slug
        },
        dataType: 'json',
        success(res) {
          // 如果创建成功则渲染页面，如果创建失败则提示信息
          if (res.code === 201) {
            $('#articleCategoryModal').modal('hide');
            $('#articleCategoryModal').on('hidden.bs.modal', () => {
              alert('新增成功');
              renderPage();
            });
          } else {
            $('#modelTips').text(res.msg);
          }
        }
      });
    });
  }

  // 编辑分类
  function editCategory(id) {
    $('#categoryModalTitle').text('编辑分类');

    $.ajax({
      url: window.bignews.category_search,
      data: { id },
      dataType: 'json',
      success(res) {
        if (res.code === 200) {
          const categoryData = res.data[0];
          $('#recipientName').val(categoryData.name);
          $('#messageText').val(categoryData.slug);
        }
      }
    });

    handleConfirm((name, slug) => {
      $.ajax({
        type: 'post',
        url: window.bignews.category_edit,
        data: {
          name,
          slug,
          id
        },
        dataType: 'json',
        success(res) {
          if (res.code === 200) {
            $('#articleCategoryModal').modal('hide');
            $('#articleCategoryModal').on('hidden.bs.modal', () => {
              alert('修改成功');
              renderPage();
            });
          } else {
            $('#modelTips').text(res.msg);
          }
        }
      });
    });
  }

  function handleConfirm(cb) {
    // 每次点击新增或编辑都会解绑 hidden.bs.modal 事件，避免冲突
    $('#articleCategoryModal').off('hidden.bs.modal');
    $('#confirmBtn').off().click(() => {
      // 获取表单输入值
      const name = $('#recipientName').val().trim();
      const slug = $('#messageText').val().trim();

      if (name === '' || slug === '') {
        $('#modelTips').text('输入框不能留空！');
        return;
      }

      cb(name, slug);
    });
  }

  $('#articleCategoryTable').on('click', '.btn-del', e => {
    if (confirm('真的要删除这条分类吗？')) {
      const id = e.target.dataset.id;
      $.ajax({
        type: 'post',
        url: window.bignews.category_delete,
        data: { id },
        dataType: 'json',
        success(res) {
          alert(res.msg);
          if (res.code === 204) {
            renderPage();
          }
        }
      });
    }
  });
})();
