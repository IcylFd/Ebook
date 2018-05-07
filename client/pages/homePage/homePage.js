// pages/homePage/homePage.js
var postdata = require("../../data/books_data.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    swiper_type: true,
    bottom_border_left: "bottom_border_left",
    bottom_border_right: "bottom_border_right",
    book_message_array: "",
    back_array: "",
    user_array: "",
    my_: ""
  },
  toOthers_detail: function (e) {
    app.globalData.u_array = e.currentTarget.dataset.user;
    wx.navigateTo({
      url: './others_detail/others_detail',
    })
  },
  // 轮播图滑动
  bindchange: function (e) {
    this.setData({
      index: e.detail.current
    })
  },
  // 滑块点击显示书籍详情
  swiper_navigate: function (e) {
    var like = e.currentTarget.dataset.like;
    var that = this;
    wx.navigateTo({
      url: './homePage_swiper_detail/homePage_swiper_detail?bookid=' + e.currentTarget.dataset.bookid + '&onmycollection=' + e.currentTarget.dataset.onmycollection + '&bookname=' + e.currentTarget.dataset.bookname + '&bookauthor=' + e.currentTarget.dataset.bookauthor + '&bookimage=' + e.currentTarget.dataset.bookimage
    })
  },
  //点击切换轮播图展示的类别
  choose_swiper1: function (e) {
    this.setData({
      swiper_type: true
    })
    this.matchBook();
  },
  choose_swiper2: function (e) {
    this.setData({
      swiper_type: false
    })
    this.matchBook();
  },


  onShow: function (e) {
    this.setData({
      back_array: postdata.postlist.back_array,
      havedBook_message_array: app.globalData.havedBook_message_array,
      user_array: app.globalData.user_array,
      book_message_array: app.globalData.book_message_array,
      my_: app.globalData.my_
    })
    this.matchBook();
  },

  // 判断全部书籍中的书是否在我的收藏里
  matchBook: function () {
      var book_message_array = this.data.book_message_array;
      var that = this;
      for (var i = 0; i < book_message_array.length; i++) {
        if (that.book_on_my_collection(book_message_array[i].bookID) == true) {
          var path = 'book_message_array[' + i + '].onMyCollection';
          that.setData({
            [path]: true
          })
        }else{
          var path = 'book_message_array[' + i + '].onMyCollection';
          that.setData({
            [path]: false
          })
        }
      }
    
      var havedBook_message_array = this.data.havedBook_message_array;
      
      for (var i = 0; i < havedBook_message_array.length; i++) {
        if (that.book_on_my_collection(havedBook_message_array[i].bookID) == true) {
          var path = 'havedBook_message_array[' + i + '].onMyCollection';
          that.setData({
            [path]: true
          })
        }else{
          var path = 'havedBook_message_array[' + i + '].onMyCollection';
          that.setData({
            [path]: false
          })
        }
      }  
  },
  book_on_my_collection: function (bookId) {
    var my_ = app.globalData.my_;
    for (var i = 0; i < my_.userCollection.length; i++) {
      if (bookId == my_.userCollection[i]) {
        return true;
      }
    }
    return false;
  },
  // 添加收藏
  clickLike: function (event) {
    var my_ = this.data.my_;
    var bookid = event.currentTarget.dataset.bookid;
    var index = event.currentTarget.dataset.index;
    var onMyCollection = event.currentTarget.dataset.onmycollection;
    if (onMyCollection == true) {
      for (var i = 0; i < my_.userCollection.length; i++) {
        if (bookid == my_.userCollection[i]) {
          my_.userCollection.splice(i, 1);
          this.setData({
            my_: my_
          });
          app.globalData.my_ = my_;
          if (this.data.swiper_type == true) {
            var path = 'book_message_array[' + index + '].onMyCollection';
            this.setData({
              [path]: false
            })
          } else {
            var path = 'havedBook_message_array[' + index + '].onMyCollection';
            this.setData({
              [path]: false
            })
          }
        }
      }
    } else {
      my_.userCollection.push(bookid);
      this.setData({
        my_: my_
      })
      app.globalData.my_ = my_;
      if (this.data.swiper_type == true) {
        var path = 'book_message_array[' + index + '].onMyCollection';
        this.setData({
          [path]: true
        })
      } else {
        var path = 'havedBook_message_array[' + index + '].onMyCollection';
        this.setData({
          [path]: true
        })
      }
    }
  }
  // onShareAppMessage: function(e){
  //   if(e.from==="button"){
  //     console.log(e.target);
  //   }
  //   return{
  //     title: "aa",
  //     path: '/pages/homePage/homePage_swiper_detail?id=123',
  //     success: function(e){
  //       console.log(e);
  //     }
  //   }
  // }
})