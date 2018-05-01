// pages/mine/mine.js
Page({

  data: {
  
  },

  onLoad: function (options) {
  
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