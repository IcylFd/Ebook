// pages/exBook/exBook_detail/exBook_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
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
  toUser: function(e){
    wx.navigateTo({
      url: '../../homePage/others_detail/others_detail',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  onToexTap: function (event) {
    wx.navigateTo({
      url: '../../mine/myCollection/toex/toex',
    })
  }
})