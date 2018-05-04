// pages/login/registe/registe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  userName: function(e){
    this.setData({
      userName : e.detail.value
    })
  },
  userPassword: function(e){
    this.setData({
      userPassword: e.detail.value
    })
  },
  Log: function(e){
    var that = this;
    wx.request({
      url: 'https://659437054.exchangebook.xyz/consumer/register',
      method: "POST",
      data: {
        username: that.userName,
        pwd: that.userPassword,
        
      },
      success: function(e){
        console.log(e);
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