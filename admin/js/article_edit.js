// 渲染日期
jeDate("#releaseTime", {
  format: 'YYYY-MM-DD'
});

// 点击按钮也能弹出日期框
$('#releaseTimeBtn').click(() => $('#releaseTime')[0].click());
