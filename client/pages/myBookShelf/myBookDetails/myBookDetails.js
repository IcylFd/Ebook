// pages/myBookShelf/myBookDetails/myBookDetails.js
var app = getApp();
Page({
  data: {
    
  },
  onLoad: function (options) {
    this.setData({
      bookid: options.bookid,
      bookname: options.bookname,
      bookimage: options.bookimage,
      bookauthor: options.bookauthor
    })
  },
  confirm_delete: function(e){
    var that = this;
    wx.showModal({
      title: '',
      content: '是否确认下架',
      confirmColor: "#95add0",
      success: function(res){
        if(res.confirm){
          var my_ = app.globalData.my_;
          for (var i = 0; i < my_.userShelf.length; i++) {
            if (that.data.bookid == my_.userShelf[i].bookId) {
              my_.userShelf.splice(i, 1);
            }
          }
          app.globalData.my_ = my_;
          var havedBook_message_array = app.globalData.havedBook_message_array;
          for (var i = 0; i < havedBook_message_array.length; i++) {
            if (that.data.bookid == havedBook_message_array[i].bookID) {
              havedBook_message_array.splice(i, 1);
            }
          }
          app.globalData.havedBook_message_array = havedBook_message_array;
          wx.navigateBack({

          })
        }
      }
    })
  }
})