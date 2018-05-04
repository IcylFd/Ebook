// pages/myBookShelf/myBookDetails/myBookDetails.js
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
    wx.showModal({
      title: '',
      content: '是否确认下架',
      confirmColor: "#95add0",
      success: function(){
        wx.navigateBack({
          
        })
      }
    })
  }
})