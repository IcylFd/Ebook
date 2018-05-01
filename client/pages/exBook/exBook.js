// pages/exBook/exBook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    booksArray: [
      {
        image: "https://img1.doubanio.com/view/subject/l/public/s29721129.jpg",
        introduction: "高等数学asdas"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844140594&di=ccb1265777a90ec3a72fad1bdc551f06&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F10%2F69%2F02%2F93b1OOOPICba.jpg",
        introduction: "高等数学ddddd"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844140593&di=818a28aac8128ec0d55c768c6242b80d&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F30%2F00%2F59658PICRQh_1024.jpg",
        introduction: "高等数学asds"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844140591&di=73f5a4d1f9ec9666d8c093049dbae995&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Dd8cfb933b299a9012f38537575fc600e%2F4d086e061d950a7bc5f72be300d162d9f3d3c9d3.jpg",
        introduction: "高等数学2weasds"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844140584&di=b5ef16552085b62e8c31d6b59834ac45&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201701%2F16%2F046a059c2b092144bf9b64ec5c3a9bec.jpg",
        introduction: "高等数学asssss"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844140584&di=296e9b5dcc2a9789587758c817185622&imgtype=0&src=http%3A%2F%2Fpic1.5442.com%3A82%2F2015%2F0222%2F01%2F02.jpg%2521960.jpg",
        introduction: "高等数学a"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844238762&di=193301defe6c6544f6f689e66573c616&imgtype=0&src=http%3A%2F%2Fpic20.nipic.com%2F20120409%2F5629225_112105437358_2.jpg",
        introduction: "高等数学asds"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844238761&di=c41823eb7985de8aaa295e42a425cdb5&imgtype=0&src=http%3A%2F%2Fimg16.3lian.com%2Fgif2016%2Fq21%2F84%2F83.jpg",
        introduction: "高等数学2weasds"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844238761&di=b0e985b22aacdac1c878137afec1728d&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3Db89400cda76eddc432eabcb851b2dc88%2F50da81cb39dbb6fde406cb0e0324ab18972b37bc.jpg",
        introduction: "高等数学asssss"
      },
      {
        image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524844238761&di=266a5fb85dfe15702fdebd578e30f407&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimage%2Fc0%253Dshijue1%252C0%252C0%252C294%252C40%2Fsign%3D2a067fe33badcbef15397645c4c644a8%2F77094b36acaf2edd59680fce871001e939019378.jpg",
        introduction: "高等数学a"
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