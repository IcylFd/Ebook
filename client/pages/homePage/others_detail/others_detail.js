// pages/homePage/others_detail/others_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: true,
    others_message: {
      image: "http://img63.nipic.com/file/20150416/20852081_222349129000_1.jpg",
      name: "Author",
      sex: true,
      dengji: "24"
    },
    booksArray: [
      {
        image: "../../../images/back_1.jpg",
        introduction: "高等数学asdas"
      },
      {
        image: "../../../images/back_2.jpg",
        introduction: "高等数学ddddd"
      },
      {
        image: "../../../images/back_3.jpg",
        introduction: "高等数学asds"
      },
      {
        image: "../../../images/back_4.jpg",
        introduction: "高等数学2weasds"
      },
      {
        image: "../../../images/back_5.jpg",
        introduction: "高等数学asssss"
      },
      {
        image: "../../../images/back_6.jpg",
        introduction: "高等数学a"
      }
    ],
    articalsArray: [
      {
        title: "沉默的羔羊",
        content: "不过在微信小程序里面，不能通过JavaScript来直接操作dome，所以一些常用的方法在这里都没有办法用了。这让笔者非常着急，因为项目比较赶，不能因为这种低级的布局问题拖慢了进度。百度了半天，发现了css3的column这个属性，但是最后实现出来的方法就如右图所示，这不符合需求，需求是两列，从左到右进行排列的，大概就像小红书APP那种瀑布流布局",
        name: "2018-04-23",
        likecount: "26",
        commentcount: "261"
      }, {
        title: "沉默的羔羊",
        content: "不过在微信小程序里面，不能通过JavaScript来直接操作dome，所以一些常用的方法在这里都没有办法用了。这让笔者非常着急，因为项目比较赶，不能因为这种低级的布局问题拖慢了进度。百度了半天，发现了css3的column这个属性，但是最后实现出来的方法就如右图所示，这不符合需求，需求是两列，从左到右进行排列的，大概就像小红书APP那种瀑布流布局",
        name: "2018-04-23",
        likecount: "26",
        commentcount: "261"
      }, {
        title: "沉默的羔羊",
        content: "不过在微信小程序里面，不能通过JavaScript来直接操作dome，所以一些常用的方法在这里都没有办法用了。这让笔者非常着急，因为项目比较赶，不能因为这种低级的布局问题拖慢了进度。百度了半天，发现了css3的column这个属性，但是最后实现出来的方法就如右图所示，这不符合需求，需求是两列，从左到右进行排列的，大概就像小红书APP那种瀑布流布局",
        name: "2018-04-23",
        likecount: "26",
        commentcount: "261"
      }
    ]
  },
  exchangeTobooks: function(e){
    this.setData({
      books: true
    })
  },
  exchangeToarticals: function(e){
    this.setData({
      books: false
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