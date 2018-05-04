// pages/myBookShelf/myBookShelf.js
var app = getApp();
Page({
  data: {
    my_bookshelf: [],
  },

  onShow: function (options) {
    var bookshelf = [];
    var length = bookshelf.length;
    for (var i = 0; i < app.globalData.my_.userShelf.length; i++) {
      bookshelf[length + 1] = app.globalData.my_.userShelf[i];
      length++;
    };

    this.setData({
      my_bookshelf: bookshelf
    });
    var book_message_array = app.globalData.book_message_array;
    var book_array = [''];

    for (var i = 1; i < bookshelf.length; i++) {
      for(var j = 0; j < book_message_array.length; j++){
        if(bookshelf[i].bookId == book_message_array[j].bookID){
          book_array.push(book_message_array[j]);
        }
      }
    };
    this.setData({
      book_array:book_array
    })
    console.log(bookshelf);
    console.log(book_array);
  },
  onBookTap: function (event) {
    wx.navigateTo({
      url: 'myBookDetails/myBookDetails'
    })
  },
  scanCode: function (event) {
    wx.scanCode({
      success: (res) => {
        wx.request({
          url: 'http://api.jisuapi.com/isbn/query',
          data: {
            
          },
          method: 'POST',
          dataType: 'json',
          responseType: 'text',
          success: function(res) {
            console.log(res);
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    })
  },
 
  todeatail: function (e) {
    
    wx.navigateTo({
      url:'./myBookDetails/myBookDetails?bookid=' + e.currentTarget.dataset.bookid +  '&bookname=' + e.currentTarget.dataset.bookname + '&bookauthor=' + e.currentTarget.dataset.bookauthor + '&bookimage=' + e.currentTarget.dataset.bookimage
    })
  }

})