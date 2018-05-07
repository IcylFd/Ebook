// pages/exBook/exBook.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
     booksArray: ""     
  },
  toDetail: function(e){
    wx.navigateTo({
      url: './exBook_detail/exBook_detail?bookid=' + e.currentTarget.dataset.bookid + '&bookname=' + e.currentTarget.dataset.bookname + '&bookauthor=' + e.currentTarget.dataset.bookauthor + '&bookimage=' + e.currentTarget.dataset.bookimage + '&onmycollection=' + e.currentTarget.dataset.onmycollection,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      booksArray: app.globalData.havedBook_message_array
    })
  }

  
})