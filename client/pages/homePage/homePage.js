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
    rank_list_array : [
      {
        rankImage: "http://img.zcool.cn/community/016b3756ea1b1a32f875520fc0224b.jpg@900w_1l_2o_100sh.jpg",
        Lv: 24
      },{
        rankImage: "http://img63.nipic.com/file/20150416/20852081_222349129000_1.jpg",
        Lv: 24
      },{
        rankImage: "http://img.zcool.cn/community/016fdd5819a73fa84a0e282be9a3a1.jpg",
        Lv: 24
      },{
        rankImage: "http://img.zcool.cn/community/01a1b75819a73fa84a0e282bc24651.jpg",
        Lv: 24
      },{
        rankImage: "http://img0w.pconline.com.cn/pconline/1403/29/spcgroup/width_640,,qua_30/4523636_04.jpg",
        Lv: 24
      },{
        rankImage: "http://www.touxiang.cn/uploads/20131012/12-054249_479.jpg",
        Lv: 24
      },{
        rankImage: "http://www.qqzhi.com/uploadpic/2015-01-14/204348907.jpg",
        Lv: 24
      },{   
        rankImage: "http://pic.58pic.com/58pic/16/83/97/18258PIC9Jv_1024.jpg",
        Lv: 24
      },{
        rankImage: "http://img03.tooopen.com/uploadfile/Downs/images/2012/2/24/sy_20120224133241944132.jpg",
        Lv: 24
      }
    ],
    array : postdata.postlist.book_message_array,
    back_array: postdata.postlist.back_array
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