// pages/homePage/homePage_swiper_detail/homePage_swiper_detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bookid: "",
    onmycollection: false,
    bookname: "",
    bookimage: "",
    bookauthor: "",
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
  onAvatorTap: function (e) {
    wx.navigateTo({
      url: '../../mine/myCollection/toex/toex',
    })
  },
  onLoad: function (option) {
    this.setData({
      bookid: option.bookid,
      bookname: option.bookname,
      bookimage: option.bookimage,
      bookauthor: option.bookauthor,
      onmycollection: option.onmycollection,
      my_: app.globalData.my_
    })
  },
  clickLike: function (e) {

    if (this.data.onmycollection == 'true') {

      for (var i = 0; i < this.data.my_.userCollection.length; i++) {
        if (this.data.bookid == this.data.my_.userCollection[i]) {
          this.data.my_.userCollection.splice(i, 1);
          this.setData({
            my_: this.data.my_,
            onmycollection: 'false'
          });
          app.globalData.my_ = this.data.my_;

        }
      }
    } else {
      this.data.my_.userCollection.push(this.data.bookid);
      this.setData({
        my_: this.data.my_,
        onmycollection: 'true'
      });
      app.globalData.my_ = this.data.my_;
    }
  },
  matchOnmycollection: function (e) {

  }
})