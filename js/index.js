$(()=>{
  // 巨幕文字动画效果
  $('.hugescreen').on('mousemove',()=>{
    $('.text').slideDown(4000);
  });

  // 巨幕 app下载二维码显示
  $('.download').on('mouseenter',()=>{
    $('.hashCode').css('display','inline-block')
  }).on('mouseleave',()=>{
    $('.hashCode').css('display','none')
  })


  // ===动态渲染导航子项目===
  let navList = ['测试1','测试1','测试1','测试1','测试1','测试1',]
  navList.forEach(item=>{
    $('.nav').append(`<div class="nav-list">${item}</div>`)
  })


  // 动态渲染服务项目列表
  let serveList = ['测试2','测试2','测试2','测试2','测试2','测试2',]
  serveList.forEach(item=>{
    $('.serve').append(`<li class="serve-item">${item}</li>`)
  })


  // ===导航条的吸顶效果===
  // window.addEventListener('scroll',()=>{
  //   if(scrollY >= 875){
  //     $('.nav').css({
  //       position: 'absolute',
  //       top: scrollY + 'px',
  //       left: 0,
  //       zIndex: 99,
  //       marginTop: 0
  //     })
  //   }else{
  //     $('.nav').css({
  //       position: 'static',
  //       marginTop: '10px'
  //     })
  //   }
  // })

  // 获取nav
  let target = $('.nav')[0]
  // 获取nav距离页面顶部的距离
  let targetT = target.offsetTop
  window.onscroll = ()=>{
    // 获取当前页面的滚动条纵坐标位置 （依次为火狐谷歌、safari、IE678）
    var scrollT = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
    // 当滚动距离大于等于nav距离顶部的距离时
    if (scrollT >= targetT) {
      if (window.navigator.userAgent.indexOf('MSIE 6.0') != -1) {
       // 兼容IE6代码
       target.style.position = 'absolute';
       target.style.top = scrollT + 'px';
       target.style.left = 0 + 'px';
       target.style.marginTop = 0;
      } else { 
       // 正常浏览器代码
       target.style.position = 'fixed';
       target.style.top = 0;
       target.style.left = 0;
       target.style.marginTop = 0;
      }
    } else{
      target.style.position = 'static';
      target.style.marginTop = '10px';
    }
  }
})
