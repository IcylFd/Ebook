// pages/mine/toex/toex.js
Page({
  data: {
  
  },

  onLoad: function (options) {
  
  },

  onAvatorTap:function(event){
    wx.navigateTo({
      url: '../../../homePage/others_detail/others_detail',
    })
  }
})