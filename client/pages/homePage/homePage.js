// pages/homePage/homePage.js
var postdata = require("../../data/books_data.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    swiper_type: true,
    bottom_border_left: "bottom_border_left",
    bottom_border_right: "bottom_border_right",
    
    book_message_array : "",
    back_array: "" ,
    user_array: ""
  },
  toOthers_detail:function(e){
    wx.navigateTo({
      url: './others_detail/others_detail',
    })
  },
  // 添加收藏
  clickLike: function (event){
    var index = event.currentTarget.dataset.index;
    var key_like = "array[" + index + "].like";
    var key_button_like = "array[" + index + "].button_like";
    if (event.currentTarget.dataset.src == "../../images/like.png"){
      this.setData({
        [key_like]: true,
        [key_button_like]: "../../images/like1.png"
      })
    }else{
      this.setData({
        [key_like]: false,
        [key_button_like]: "../../images/like.png"
      })
    }
  },
  // 轮播图滑动
  bindchange: function (e){
    this.setData({
      index: e.detail.current
    })
  },
  // 滑块点击显示书籍详情
  swiper_navigate: function(e){
    var like = e.currentTarget.dataset.like;
    var that = this;
    wx.navigateTo({
      url: './homePage_swiper_detail/homePage_swiper_detail'
    })
  },
  //点击切换轮播图展示的类别
  choose_swiper1: function(e){
    this.setData({
      swiper_type: true
    })   
  },
  choose_swiper2: function(e){
    this.setData({
      swiper_type: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function(e){
    this.setData({
      book_message_array: postdata.postlist.book_message_array,
      back_array: postdata.postlist.back_array,
      user_array: postdata.postlist.user_array,
      havedBook_message_array: postdata.postlist.havedBook_message_array
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(postdata.postlist.back_array);
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