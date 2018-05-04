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
    wx.navigateTo({
      url: '../../../homePage/others_detail/others_detail',
    })
  },
  clickLike: function (event) {
    var my_ = app.globalData.my_;
    for(var i=0;i<my_.userCollection.length;i++){
      if (my_.userCollection[i]==this.data.book_note.bookId){
        my_.userCollection.splice(i,1);
      }
    }
    app.globalData.my_ = my_;
    wx.navigateBack({
      
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