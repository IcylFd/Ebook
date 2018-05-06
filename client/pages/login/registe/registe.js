// pages/login/registe/registe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  userName_f: function(e){
    this.setData({
      userName : e.detail.value
    })

  },
  userPassword_f: function(e){
    this.setData({
      userPassword: e.detail.value
    })

  }, 
  userRepwd_f: function(e){
    this.setData({
      userRepwd: e.detail.value
    })  
  },
  userSno_f: function(e){
    this.setData({
      userSno: e.detail.value
    })
  },
  userMajor_f: function(e){
    this.setData({
      userMajor: e.detail.value
    })
  },
  userWechat_f: function(e){
    this.setData({
      userWechat:e.detail.value
    })
  },
  Log: function(e){
    var that = this;
    wx.request({
      url: 'https://2tmftt32.qcloud.la/consumer/register',
      method: "POST",
      data: {
        username: that.data.userName,
        pwd: that.data.userPassword,
        repwd: that.data.userRepwd,
        sno: that.data.userSno,
        major: that.data.userMajor,
        wechat: that.data.userWechat
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(e){
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})