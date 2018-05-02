// pages/exBook/exBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booksArray: [
      {
        image: "https://img1.doubanio.com/view/subject/l/public/s29721129.jpg",
        introduction: "如何看懂艺术"
      },
      {
        image: "https://img3.doubanio.com/view/subject/l/public/s29731173.jpg",
        introduction: "粉墨"
      },
      {
        image: "https://img3.doubanio.com/view/subject/l/public/s8485113.jpg",
        introduction: "沉默的大多数"
      },
      {
        image: "https://img3.doubanio.com/view/subject/l/public/s11148145.jpg",
        introduction: "数据库系统简明教程"
      },
      {
        image: "https://img3.doubanio.com/view/subject/l/public/s9114855.jpg",
        introduction: "数学之美"
      },
      {
        image: "https://img3.doubanio.com/view/subject/l/public/s29515663.jpg",
        introduction: "白夜行"
      },
      {
        image: "https://img3.doubanio.com/view/subject/l/public/s27264181.jpg",
        introduction: "解忧杂货店"
      },
      {
        image: "https://img3.doubanio.com/view/subject/l/public/s5935002.jpg",
        introduction: "分类单词轻松记CET-6"
      },
      {
        image: "https://img1.doubanio.com/view/subject/l/public/s28054638.jpg",
        introduction: "呼兰河传"
      },
      {
        image: "https://img3.doubanio.com/view/subject/l/public/s3917731.jpg",
        introduction: "简爱"
      }
    ],
    
  },
  toDetail: function(e){
    wx.navigateTo({
      url: './exBook_detail/exBook_detail',
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