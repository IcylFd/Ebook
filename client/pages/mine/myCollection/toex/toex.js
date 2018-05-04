// pages/mine/toex/toex.js
Page({
  data: {
    buttonLike: "../../../../images/like.png",
  },

  onLoad: function (options) {
  
  },

  onAvatorTap:function(event){
    wx.navigateTo({
      url: '../../../homePage/others_detail/others_detail',
    })
  },
  clickLike: function (event) {
    // var index = event.currentTarget.dataset.index;
    // var key_like = "array[" + index + "].like";
    // var key_button_like = "array[" + index + "].button_like";
    // if (event.currentTarget.dataset.src == "../../../images/like.png") {
    //   this.setData({
    //     [key_like]: true,
    //     [key_button_like]: "../../../images/like1.png"
    //   })
    // } else {
    //   this.setData({
    //     [key_like]: false,
    //     [key_button_like]: "../../../images/like.png"
    //   })
    // }
  },

  onExchangeTap: function (event) {
    wx.showModal({
      content: '是否确认给对方发送换书请求',
      confirmColor: '#bbc5ef',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
  
})