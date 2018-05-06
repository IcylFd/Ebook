// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  logIn: function(e){
    var that = this;
    wx.request({
      url: 'https://2tmftt32.qcloud.la/consumer/login',
      method: "POST",
      data: {
        username: that.data.userName,
        pwd: that.data.userPassword
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res){
        console.log(res);
      }
    })
  },
  userName_f: function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  userPassword_f: function(e){
    this.setData({
      userPassword: e.detail.value
    })
  }
})