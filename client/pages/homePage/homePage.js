// pages/homePage/homePage.js
var postdata = require("../../data/books_data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    swiper_type: true,
    bottom_border_left: "bottom_border_left",
    bottom_border_right: "bottom_border_right",
    book_message_array : "",
    back_array: "" ,
    user_array: "",
    my_:""
  },
  toOthers_detail:function(e){
    wx.navigateTo({
      url: './others_detail/others_detail',
    })
  },
  // 轮播图滑动
  bindchange: function (e){
    this.setData({
      index: e.detail.current
    })
  },
  // 滑块点击显示书籍详情
  swiper_navigate: function(e){
    var like = e.currentTarget.dataset.like;
    var that = this;
    wx.navigateTo({
      url: './homePage_swiper_detail/homePage_swiper_detail'
    })
  },
  //点击切换轮播图展示的类别
  choose_swiper1: function(e){
    this.setData({
      swiper_type: true
    })   
  },
  choose_swiper2: function(e){
    this.setData({
      swiper_type: false
    })
  },
  
  
  onLoad: function(e){
    this.setData({
      book_message_array: postdata.postlist.book_message_array,
      back_array: postdata.postlist.back_array,
      user_array: postdata.postlist.user_array,
      havedBook_message_array: postdata.postlist.havedBook_message_array,
      my_: postdata.postlist.my_
    })
  },

// 判断全部书籍中的书是否在我的收藏里
  matchBook: function(){
    if(this.data.swiper_type){
      var book_message_array = this.data.book_message_array;
      var that = this;
      for (var i = 0; i < book_message_array.length; i++) {
        if (that.book_on_my_collection(book_message_array[i].bookID) == true) {
          var path = 'book_message_array[' + i + '].onMyCollection';
          this.setData({
            [path]: true
          })
        }
      }
    }else{
      var havedBook_message_array = this.data.havedBook_message_array;
      var that = this;
      for (var i = 0; i < havedBook_message_array.length; i++) {
        if (that.book_on_my_collection(havedBook_message_array[i].bookID) == true) {
          var path = 'havedBook_message_array[' + i + '].onMyCollection';
          this.setData({
            [path]: true
          })
        }
      }
    }
  },
  book_on_my_collection: function(bookId){
    var my_ = this.data.my_;
    for (var i = 0; i < my_.userCollection.length;i++){
      if (bookId == my_.userCollection[i]){
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
    if (onMyCollection==true){
      for (var i = 0; i < my_.userCollection.length; i++) {
        if (bookid == my_.userCollection[i]) {
          my_.userCollection.splice(i,1);
          this.setData({
            my_: my_
          });
          console.log("e");
          if(this.data.swiper_type == true){
            var path = 'book_message_array[' + index + '].onMyCollection';
            this.setData({
              [path]: false
            })
          }else{
            
            var path = 'havedBook_message_array[' + index + '].onMyCollection';
            this.setData({
              [path]: false
            })
          }
        }
      }
    }else{
      my_.userCollection.push(bookid);
      this.setData({
        my_: my_
      })
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
    
  },
  
})