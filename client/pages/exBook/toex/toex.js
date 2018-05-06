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
      book.onmycollection = "flase"
    }
    this.setData({
      user: user,
      book: book
    })
  },
  clickLike: function(){
    
  }
  
})