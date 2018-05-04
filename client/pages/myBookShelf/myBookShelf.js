// pages/myBookShelf/myBookShelf.js
Page({
  data:{
    books_key:[]
  },
  onLoad: function(options){
    

    this.setData({
      books_key:myBooksList
    });
  },
  Count:function(event){
    console.log(index);
  },
  onBookTap:function(event){
    wx.navigateTo({
      url: 'myBookDetails/myBookDetails'
    })
  },
  scanCode :function(event){
    wx.scanCode({
      success: (res) => {
        console.log(res.result);
      }
    })
  },
  todeatail: function(e){
    wx.navigateTo({
      url: 'myBookDetails/myBookDetails',
    })
  }
  
})