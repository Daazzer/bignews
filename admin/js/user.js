$.ajax({
  url: window.BigNews.user_detail,
  dataType: 'json',
  success(res) {
    console.log(res);
    if (res.code === 200) {
      const userData = res.data;
      // const userPic = userData.userPic;
      for (const key in userData) {
        if (key === 'userPic') {
          $(`#${key}`).prop('src', userData[key]);
        } else {
          $(`#${key}`).val(userData[key]);
        }
      }
    } else {
      alert(res.msg);
    }
  }
});
