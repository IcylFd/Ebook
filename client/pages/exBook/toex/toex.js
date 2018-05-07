// pages/exBook/toex/toex.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var user = app.globalData.user;
    var book = app.globalData.book;
    var my_ = app.globalData.my_;
    var flag = 0;
    for(var i=0;i<my_.userCollection.length;i++){
      if (book.bookId == my_.userCollection[i]){
        flag = 1;
        book.onmycollection = "true"
      }
    }
    if(flag == 0){
      book.onmycollection = "false"
    }
    this.setData({
      user: user,
      book: book
    })
  },
  clickLike: function(){
    var my_ = app.globalData.my_;
    
    if (this.data.book.onmycollection == "true") {
      for (var i = 0; i < my_.userCollection.length; i++) {
        if (this.data.book.bookId == my_.userCollection[i]) {
          my_.userCollection.splice(i, 1);
          app.globalData.my_ = my_;
          var book = this.data.book;
          book.onMyCollection = false;
          book.onmycollection = "false";
          this.setData({
            book: book
          })
        }
      }
    } else {
      my_.userCollection[my_.userCollection.length] = this.data.book.bookId;
      app.globalData.my_ = my_;
      var book = this.data.book;
      book.onMyCollection = true;
      book.onmycollection = "true";
      this.setData({
        book: book
      })
    }
    console.log(this.data.book);
    console.log(my_);
  },
  onExchangeTap: function (event) {
    wx.showModal({
      content: '是否确认给对方发送换书请求',
      confirmColor: '#bbc5ef',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})