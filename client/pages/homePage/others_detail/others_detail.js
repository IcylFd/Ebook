// pages/homePage/others_detail/others_detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: true,
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
  toDetail:function(e){
    wx.navigateTo({
      url: '../../exBook/exBook_detail/exBook_detail?bookid=' + e.currentTarget.dataset.bookid + '&bookname=' + e.currentTarget.dataset.bookname + '&bookauthor=' + e.currentTarget.dataset.bookauthor + '&bookimage=' + e.currentTarget.dataset.bookimage + '&onmycollection=' + e.currentTarget.dataset.onmycollection,
    })
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
    this.setData({
      user: app.globalData.u_array
    })
    var book_message_array = app.globalData.book_message_array;
    var booksArray = [];
    for (var i = 0; i < this.data.user.userShelf.length;i++ ){
      for(var j=0;j<book_message_array.length;j++){
        if (this.data.user.userShelf[i].bookId == book_message_array[j].bookID ){
          booksArray.push(book_message_array[j]);
        }
      }
    }
    this.setData({
      booksArray: booksArray
    })
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