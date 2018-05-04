// pages/mine/mine.js
var app = getApp();
Page({

  data: {
  
  },

  onLoad: function (e) {
  
  },

  onCollectionTap: function (event) {
    wx.navigateTo({
      url: 'myCollection/myCollection',
    })
  },
  onRecordTap: function (event) {
    wx.navigateTo({
      url: 'exchangeRecord/exchangeRecord',
    })
  }
})