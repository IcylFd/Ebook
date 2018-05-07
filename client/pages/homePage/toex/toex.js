// pages/homePage/toex/toex.js
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
    var bookId = options.bookid;
    var userId = options.userid;
    var user;
    var book;
    var want;
    var user_array = app.globalData.user_array;
    var book_message_array = app.globalData.book_message_array;
    var my_ = app.globalData.my_;
    for(var i=0;i<user_array.length;i++){
      if(userId == user_array[i].userId){
        user = user_array[i];
      }
    }
    for(var i=0;i<user.userShelf.length;i++){
      if (user.userShelf[i].bookId == bookId){
        want = user.userShelf[i].want;
      }
    }
    for (var i = 0; i < book_message_array.length;i++){
      if (bookId == book_message_array[i].bookID){
        book = book_message_array[i];
      }
    }
    var onmycollection = "false";
    for (var i = 0; i < my_.userCollection.length;i++){
      if (bookId == my_.userCollection[i]){
        onmycollection = "true";
      }
    }
    book.onmycollection = onmycollection;
    this.setData({
      book: book,
      user: user,
      want: want
    })
  },
  clickLike: function(e){
    var my_ = app.globalData.my_;
    if(this.data.book.onmycollection == "true"){
      for(var i=0;i<my_.userCollection.length;i++){
        if (this.data.book.bookID == my_.userCollection[i]){
          my_.userCollection.splice(i,1);
          app.globalData.my_ = my_;
          var book = this.data.book;
          book.onMyCollection = false;
          book.onmycollection = "false";
          this.setData({
            book: book
          })
        }
      }
    }else{
      my_.userCollection[my_.userCollection.length] = this.data.book.bookID;
      app.globalData.my_ = my_;
      var book = this.data.book;
      book.onMyCollection = true;
      book.onmycollection = "true";
      this.setData({
        book: book
      })
    }
    
  },
  onAvatorTap: function(){
    app.globalData.u_array = this.data.user;
    wx.navigateTo({
      url: '../others_detail/others_detail',
    })
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