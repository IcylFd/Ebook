// pages/myBookShelf/AddMyBook/AddMyBook.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onTapCover: function (event) {
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var coverImgPath = res.tempFilePaths
      }
    })
  },
  onTapBack: function (event) {
    wx.chooseImage({
      count: 1,
      success: function (res) {
        var backImgPath = res.tempFilePaths
      }
    })
  }
})