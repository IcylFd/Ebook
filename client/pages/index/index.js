var util = require('../../utils/util.js');
Page({

  data: {
  },

  onLoad: function (options) {
    var myDate = new Date();
    var year = myDate.getFullYear();
    var month = myDate.getMonth();
    var day = myDate.getDate();
    var c_month = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Spt", "Oct", "Nov", "Dec");
    this.setData({
      year: year,
      month: c_month[month],
      day: day
    });

    setTimeout(function(){
      wx.switchTab({
        url: '../homePage/homePage',
      })
    },2500)
 
},
  onEntranceTap: function (event) {
    wx.switchTab({
      url: '../homePage/homePage',
    })
  }

})