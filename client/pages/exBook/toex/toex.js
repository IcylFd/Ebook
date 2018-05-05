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
    this.setData({
      user: user,
      book: book
    })
  },

  
})