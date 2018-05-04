// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab_position: 0,
    arrays: [
      {
        userImage: "http://img.zcool.cn/community/016b3756ea1b1a32f875520fc0224b.jpg@900w_1l_2o_100sh.jpg",
        userName: "Benny",
        bookImage: "https://img3.doubanio.com/view/subject/l/public/s4610502.jpg",
        bookName: "白夜行",
        position: "林大家属区",
        toExchange: "三体",
        tradingState: "待确认"
      }, {
        userImage: "http://img63.nipic.com/file/20150416/20852081_222349129000_1.jpg",
        userName: "Jeff",
        bookImage: "https://img3.doubanio.com/view/subject/l/public/s10213984.jpg",
        bookName: "云图",
        position: "林大老食堂门口",
        toExchange: "高级英语视听",
        tradingState: "已完成"
      }, {
        userImage: "http://img.zcool.cn/community/016fdd5819a73fa84a0e282be9a3a1.jpg",
        userName: "Mandy",
        bookImage: "https://img1.doubanio.com/view/subject/l/public/s3993878.jpg",
        bookName: "亲爱的安德烈",
        position: "林大",
        toExchange: "数字图像处理",
        tradingState: "已完成"
      }
    ]
  },
  choose0: function(e){
    this.setData({
      tab_position: 0
    })
  },
  choose1: function (e) {
    this.setData({
      tab_position: 1
    })
  },
  choose2: function (e) {
    this.setData({
      tab_position: 2
    })
  },
  onTradingState: function(event){
    if(event.currentTarget.dataset.tradingstate == '待确认'){
      wx.showModal({
        title: '',
        content: '您已确认交换，等待对方确认',
        confirmColor: "#95add0"
      })
    }
  }
})