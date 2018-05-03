// pages/homePage/homePage_swiper_detail/homePage_swiper_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book:{
      bookName: "了比起的盖茨比",
      bookImage: "http://p5.qhimg.com/t01cb6ab8b8a8ea0609.jpg",
      bookAuthor: "隔壁老王"
    },
    book_haver: [
      {
image:"http://img.zcool.cn/community/016b3756ea1b1a32f875520fc0224b.jpg@900w_1l_2o_100sh.jpg"
      },{
        image: "http://img63.nipic.com/file/20150416/20852081_222349129000_1.jpg"
      },{
        image: "http://img.zcool.cn/community/016fdd5819a73fa84a0e282be9a3a1.jpg"
      }, {
        image: "http://img.zcool.cn/community/016b3756ea1b1a32f875520fc0224b.jpg@900w_1l_2o_100sh.jpg"
      }, {
        image: "http://img63.nipic.com/file/20150416/20852081_222349129000_1.jpg"
      }, {
        image: "http://img.zcool.cn/community/016fdd5819a73fa84a0e282be9a3a1.jpg"
      }
    ],
    comments: [{
      title: "沉默的话语权",
      content: "小程序组件 scroll-view 中分别有上下竖向滑动和左右横向滑动之分，在这次项目中刚好需要用到横向滑动，但在测试过程中发现横向滑动没有了效果（静止在那里没移动过），经调试发现1.scroll-view 中的需要滑动的元素不可以用float 浮动2.scroll-view 中的包裹需要滑动的元素的大盒子用 display:flex; 是没有作用的",
      name: "Author",
      likecount: "240",
      commentcount: "360"
    }, {
      title: "沉默的话语权",
      content: "小程序组件 scroll-view 中分别有上下竖向滑动和左右横向滑动之分，在这次项目中刚好需要用到横向滑动，但在测试过程中发现横向滑动没有了效果（静止在那里没移动过），经调试发现1.scroll-view 中的需要滑动的元素不可以用float 浮动2.scroll-view 中的包裹需要滑动的元素的大盒子用 display:flex; 是没有作用的",
      name: "Author",
      likecount: "240",
      commentcount: "360"
      }, {
        title: "沉默的话语权",
        content: "小程序组件 scroll-view 中分别有上下竖向滑动和左右横向滑动之分，在这次项目中刚好需要用到横向滑动，但在测试过程中发现横向滑动没有了效果（静止在那里没移动过），经调试发现1.scroll-view 中的需要滑动的元素不可以用float 浮动2.scroll-view 中的包裹需要滑动的元素的大盒子用 display:flex; 是没有作用的",
        name: "Author",
        likecount: "240",
        commentcount: "360"
      }
    ]
  },
  onAvatorTap: function(e){
    wx.navigateTo({
      url: '../../mine/myCollection/toex/toex',
    })
  },
  onLoad: function(option){
    console.log(option);
  }
})