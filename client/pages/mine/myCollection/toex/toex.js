// pages/mine/toex/toex.js
var app = getApp();
Page({
  data: {
    buttonLike: "../../../../images/like.png",
    book_note: {}
  },

  onLoad: function (options) {
    var bookid = options.bookid;
    var note = app.globalData.note;
    var book_note = {};
    for(var i=0;i<note.length;i++){
      if(note[i].bookId==bookid){
        book_note = note[i];
        break;
      }
    }
    this.setData({
      book_note: book_note
    })
  },

  onAvatorTap:function(event){
    var userId = this.data.book_note.userid;
    var user_array = app.globalData.user_array;
    var u_array;
    for(var i=0;i<user_array.length;i++){
      if(userId == user_array[i].userId){
        u_array = user_array[i];
      }
    }
    app.globalData.u_array = u_array;
    wx.navigateTo({
      url: '../../../homePage/others_detail/others_detail',
    })
  },
  clickLike: function (event) {
    var my_ = app.globalData.my_;
    var book_note = this.data.book_note;
    if(book_note.onmycollection == 'true'){
      for (var i = 0; i < my_.userCollection.length; i++) {
        if (my_.userCollection[i] == book_note.bookId) {
          my_.userCollection.splice(i, 1);
          book_note.onmycollection = 'false';
        }
      }
    }else{
      my_.userCollection[my_.userCollection.length+1] = book_note.bookId;
      book_note.onmycollection = 'true';
    }
    this.setData({
      book_note : book_note
    })
    app.globalData.my_ = my_;
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