// pages/myBookShelf/myBookDetails/myBookDetails.js
Page({
  data: {
  
  },
  onLoad: function (options) {
  
  },
  confirm_delete: function(e){
    wx.showModal({
      title: '',
      content: '是否确认下架',
      confirmColor: "#95add0",
      success: function(){
        console.log("aaa");
        wx.navigateBack({
          
        })
      }
    })
  }
})