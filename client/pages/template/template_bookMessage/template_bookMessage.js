// pages/template/template_bookMessage/template_bookMessage.js
Page({
  data: {
  
  },

  onLoad: function (options) {
  
  },
  clickLike: function (event) {
    var index = event.currentTarget.dataset.index;
    var key_like = "array[" + index + "].like";
    var key_button_like = "array[" + index + "].button_like";
    if (event.currentTarget.dataset.src == "../../../images/like.png") {
      this.setData({
        [key_like]: true,
        [key_button_like]: "../../../images/like1.png"
      })
    } else {
      this.setData({
        [key_like]: false,
        [key_button_like]: "../../../images/like.png"
      })
    }
  }
})